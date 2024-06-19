import FileAmount from '@core/components/bi-tasik/text/FileAmount'
import Loader from '@core/components/ux/Loader'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const SearchIlustrationImg = styled('img')({
  height: 180
})

const Header: React.FC = () => {
  return (
    <>
      <div className="">
        <Typography variant="h4" fontWeight={800} gutterBottom>
          <FormattedMessage id="title.prediction" defaultMessage="Prediksi Data" />
        </Typography>

        <FormattedMessage
          id="description_page.prediction"
          defaultMessage="Prediksi data makro indikator ekonomi dari data yang kami miliki"
        />
      </div>

      <div className="flex justify-between">
        <SearchIlustrationImg
          src="/images/bi/vector/search-ilustration.png"
          className="hidden md:inline"
        />
      </div>
    </>
  )
}

export default Header
