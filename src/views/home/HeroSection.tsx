import SearchBox from '@core/components/bi-tasik/input/SearchBox'
import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div>
        <div className="text-2xl font-bold">
          <p>DATA</p>

          <p className="text-4xl">
            BI Kpw <span className="text-blue">TASIKMALAYA</span>
          </p>

          <div className="flex mt-8">
            <p className="mr-4 text-blue">363804</p>

            <p>DATASET TERSEDIA</p>
          </div>
        </div>

        <div className="mt-4">
          <SearchBox />
        </div>
      </div>

      <div className="hidden ml-32 md:flex" style={{ width: '40%' }}>
        <img src="images/bi/gedung-bi-tasik.png" />
      </div>
    </div>
  )
}

export default HeroSection
