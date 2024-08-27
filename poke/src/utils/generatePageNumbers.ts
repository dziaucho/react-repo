function generatePageNumbers(
  dataItems: string[],
  currentPage: number,
  itemsPerPage: number,
): (number | string)[] {
  const pagesAmount: number = Math.ceil(dataItems.length / itemsPerPage);
  const pageNumbers: (number | string)[] = [];

  if (currentPage <= 4) {
    for (let i = 1; i <= 5; i += 1) {
      pageNumbers.push(i);
    }
    pageNumbers.push('...');
    pageNumbers.push(pagesAmount);
  } else if (currentPage >= pagesAmount - 3) {
    pageNumbers.push(1);
    pageNumbers.push('...');
    for (let i = pagesAmount - 4; i <= pagesAmount; i += 1) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1);
    pageNumbers.push('...');
    for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
      pageNumbers.push(i);
    }
    pageNumbers.push('...');
    pageNumbers.push(pagesAmount);
  }

  return pageNumbers;
}

export default generatePageNumbers;
