import WordCloudComponent from '@core/components/bi-tasik/insight/WordCloud'
import React from 'react'

const WordCloud: React.FC = () => {

  const words = [
    { text: 'React', value: 30 },
    { text: 'Next.js', value: 20 },
    { text: 'TypeScript', value: 15 },
    { text: 'JavaScript', value: 25 },
    { text: 'Node.js', value: 10 },
    { text: 'Web Development', value: 20 },
    { text: 'Programming', value: 18 },
    // Tambahkan lebih banyak kata sesuai kebutuhan
];
  return (
    <>
      <WordCloudComponent words={words}></WordCloudComponent>
    </>
  )
}

export default WordCloud
