export const getByCurrPage = (
  data,
  page,
  sizePerPage,
  pageStartIndex
) => {
  const dataSize = data.length;
  if (!dataSize) return [];

  const getNormalizedPage = () => {
    const offset = Math.abs(1 - pageStartIndex);
    return page + offset;
  };

  const end = (getNormalizedPage() * sizePerPage) - 1;
  const start = end - (sizePerPage - 1);

  const result = [];
  for (let i = start; i <= end; i += 1) {
    result.push(data[i]);
    if (i + 1 === dataSize) break;
  }
  return result;
};
