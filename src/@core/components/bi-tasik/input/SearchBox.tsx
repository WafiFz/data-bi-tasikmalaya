import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { useIntl } from 'react-intl'

interface SearchBoxProps {
  intlPleaceHolder?: string
}

const SearchBox: React.FC<SearchBoxProps> = ({
  intlPleaceHolder = 'placeholder.searchbox'
}) => {
  const intl = useIntl()
  const placeholderSearchBox = intl.formatMessage(
    {
      id: intlPleaceHolder
    },
    { defaultMessage: 'Search' }
  )

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholderSearchBox}
        inputProps={{ 'aria-label': 'search' }}
      />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBox
