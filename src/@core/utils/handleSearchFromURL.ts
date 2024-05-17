export const handleSearchFromURL = (handleSearch: (keyword: string) => void) => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchKeyword = urlParams.get('q') || '';
    handleSearch(searchKeyword);
  };