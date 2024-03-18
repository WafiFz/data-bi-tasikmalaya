import SearchBox from '@core/components/bi-tasik/input/SearchBox'
import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row">
      <div className="sc-fFucqa gxikOp">
        <div className="text-2xl font-bold">
          <p>DATA</p>
          <p className="text-4xl">
            BI Kpw <span className="text-blue">TASIKMALAYA</span>
          </p>
          {/* <p>
              Dalam&nbsp;
              <span className="text-blue">Satu Portal</span>
            </p> */}

          <div className="mt-8 flex">
            <p className="text-blue mr-4">363804</p>
            <p>DATASET TERSEDIA</p>
          </div>
        </div>
        <div className="mt-4">
          <SearchBox></SearchBox>
        </div>
      </div>
      <div className="hidden ml-32 md:flex" style={{ width: '40%' }}>
        <img className="" src="images/bi/gedung-bi-tasik.png" />
      </div>
    </div>
  )
}

export default HeroSection
