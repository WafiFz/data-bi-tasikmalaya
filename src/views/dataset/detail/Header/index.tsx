import CardTitle from '@core/components/bi-tasik/cards/CardTitle'
import React from 'react'

interface HeaderProps {
  title: string | string[] | undefined
  source: string
  description: string
}

const Header: React.FC<HeaderProps> = ({title, source, description}) => {
  
return (
    <>
      <CardTitle title={title} description={description} source={source} />
    </>
  )
}

export default Header
