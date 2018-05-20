/* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { filters } from './filter';
import { LIKE, EQ } from './comparison';
import { FILTER_TYPE } from './const';

export default (
  _,
  isRemoteFiltering,
  handleFilterChange
) => {
  const FilterContext = React.createContext();

  class FilterProvider extends React.Component {
    static propTypes = {
      data: PropTypes.array.isRequired,
      columns: PropTypes.array.isRequired
    }

    constructor(props) {
      super(props);
      this.currFilters = {};
      this.onFilter = this.onFilter.bind(this);
    }

    onFilter(column, filterType) {
      return (filterVal) => {
        // watch out here if migration to context API, #334
        const currFilters = Object.assign({}, this.currFilters);
        const { dataField, filter } = column;

        if (!_.isDefined(filterVal) || filterVal === '') {
          delete currFilters[dataField];
        } else {
          // select default comparator is EQ, others are LIKE
          const {
            comparator = (filterType === FILTER_TYPE.SELECT ? EQ : LIKE),
            caseSensitive = false
          } = filter.props;
          currFilters[dataField] = { filterVal, filterType, comparator, caseSensitive };
        }

        this.currFilters = currFilters;

        if (isRemoteFiltering()) {
          handleFilterChange(currFilters);
          // when remote filtering is enable, dont set currFilters state
          // in the componentWillReceiveProps,
          // it's the key point that we can know the filter is changed
          return;
        }

        this.forceUpdate();
      };
    }

    render() {
      let { data } = this.props;
      if (!isRemoteFiltering()) {
        data = filters(data, this.props.columns, _)(this.currFilters);
      }
      return (
        <FilterContext.Provider value={ {
          data,
          onFilter: this.onFilter
        } }
        >
          { this.props.children }
        </FilterContext.Provider>
      );
    }
  }

  return {
    Provider: FilterProvider,
    Consumer: FilterContext.Consumer
  };
};
