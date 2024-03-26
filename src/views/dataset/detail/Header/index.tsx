import CardTitle from '@core/components/bi-tasik/cards/CardTitle'
import { useRouter } from 'next/router'
import React from 'react'

const Header: React.FC = () => {
  const router = useRouter()
  const title = router.query.slug
  const source = 'UDSK'
  return (
    <>
      <CardTitle title={title} source={source} />
    </>
  )
}

export default Header
