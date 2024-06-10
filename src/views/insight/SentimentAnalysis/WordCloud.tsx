import WordCloudComponent from '@core/components/bi-tasik/insight/WordCloud'
import Typography from '@mui/material/Typography'
import React from 'react'
import { FormattedMessage } from 'react-intl'

interface WordCloudProps {
  title: string
  intlTitle?: string
  words: { text: string; value: number }[]
  className?: string
}

const WordCloud: React.FC<WordCloudProps> = ({
  title,
  intlTitle,
  words,
  className
}) => {
  return (
    <div style={{ width: '100%', height: '500px' }} className={className}>
      <Typography
        variant={'h6'}
        marginTop={8}
        textAlign="center"
        fontWeight={700}
      >
        <FormattedMessage id={intlTitle} defaultMessage={title} />
      </Typography>

      <WordCloudComponent words={words}></WordCloudComponent>
    </div>
  )
}

export default WordCloud
