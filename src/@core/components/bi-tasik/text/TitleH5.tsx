import Typography from '@mui/material/Typography'
import React from 'react'
import { FormattedMessage } from 'react-intl'

interface TitleH5Props {
  title: string
  intlTitle?: string
  className?: string
  textAlignCenter?: boolean
}

const TitleH5: React.FC<TitleH5Props> = ({
  title,
  intlTitle = 'title.h5',
  className,
  textAlignCenter = false
}) => {
  return (
    <>
      <Typography
        variant={'h5'}
        fontWeight={700}
        marginTop={8}
        textAlign={textAlignCenter ? 'center' : undefined}
        color="primary"
      >
        <FormattedMessage id={intlTitle} defaultMessage={title} />
      </Typography>
    </>
  )
}

export default TitleH5
