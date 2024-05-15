import SearchBox from '@core/components/bi-tasik/input/SearchBox'
import React from 'react'

interface HeroSectionProps {
  margin?: string // prop untuk mengatur margin
}

const HeroSection: React.FC<HeroSectionProps> = ({ margin }) => {
  return (
    <div
      className={`items-center justify-center ${margin} md:flex md:flex-row`}
    >
      <div>
        <div className="text-2xl font-bold">
          <p>Temukan</p>

          <p className="text-4xl">
            <span className="text-blue">Insight</span> Baru
          </p>

          <div className="flex mt-8">
            <p className='text-lg'>Masukkan kata kunci untuk mendapatkan insight</p>
          </div>
        </div>

        <div className="mt-4">
          <SearchBox intlPleaceHolder='placeholder.searchbox.insight'/>
        </div>
      </div>

      <div className="hidden ml-32 md:flex" style={{ width: '20%' }}>
        <img src="/images/bi/vector/insight.svg" />
      </div>
    </div>
  )
}

export default HeroSection
