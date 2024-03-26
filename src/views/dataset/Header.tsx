import FileAmount from '@core/components/bi-tasik/text/FileAmount'
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
          <FormattedMessage id="title.dataset" defaultMessage="Dataset" />
        </Typography>

        <FormattedMessage
          id="description_page.dataset"
          defaultMessage="Find your dataset"
        />
      </div>

      <div className="flex justify-between">
        <div className="mt-16 grid grid-cols">
          <FileAmount title="dataset.amount" amount={20000} color={'blue'} />
        </div>

        <SearchIlustrationImg
          src="/images/bi/vector/search-ilustration.png"
          className="hidden md:inline"
        />
      </div>
    </>
  )
}

export default Header
