import SearchBox from '@core/components/bi-tasik/input/SearchBox'
import React from 'react'

const Filter: React.FC = () => {
  const handleSearch = (keyword: string) => {
    // Di sini Anda bisa melakukan sesuatu dengan kata kunci pencarian,
    // misalnya, mengirim permintaan ke API untuk mendapatkan data insight
    console.log('Kata kunci pencarian:', keyword)
  }

  
return (
    <>
      <SearchBox onSearch={handleSearch} />
    </>
  )
}

export default Filter
