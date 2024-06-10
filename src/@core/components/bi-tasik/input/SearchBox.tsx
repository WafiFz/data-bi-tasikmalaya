import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { useIntl } from 'react-intl';

interface SearchBoxProps {
  intlPleaceHolder?: string;
  onSearch: (keyword: string) => void; // Tambahkan prop untuk menangani fungsi pencarian
}

const SearchBox: React.FC<SearchBoxProps> = ({
  intlPleaceHolder = 'placeholder.searchbox',
  onSearch,
}) => {
  const intl = useIntl();
  const placeholderSearchBox = intl.formatMessage(
    {
      id: intlPleaceHolder,
    },
    { defaultMessage: 'Search' }
  );

  
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const keyword = event.currentTarget.keyword.value;

    const newUrl = new URL(window.location.href);

    newUrl.searchParams.set('q', keyword);

    window.history.replaceState({}, '', newUrl.toString());

    onSearch(keyword);
  };

  return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }} onSubmit={handleSearch}>
      <InputBase
        name="keyword"
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholderSearchBox}
        inputProps={{ 'aria-label': 'search' }}
      />

      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBox;
