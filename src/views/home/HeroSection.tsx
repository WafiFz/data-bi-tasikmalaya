import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="sc-fodVek fBnKBn flex flex-col md:flex-row">
      <div className="sc-fFucqa gxikOp">
        <div>
          <p className="sc-bkzYnD lcvJDI">Akses Data Ind<span className="sc-bkzYnD lcvJDI" style={{ color: 'red' }}>onesia</span></p>
          <p className="sc-bkzYnD lcvJDI">dalam<span style={{ color: 'red' }}> Satu Portal</span></p>
          <div className="sc-dIUeWJ kbqGlW flex">
            <p className="sc-idOiZg gpvpej" style={{ color: 'red', marginRight: '10px', fontWeight: 'bold' }}>363804</p>
            <p className="sc-idOiZg gpvpej">DATASET TERSEDIA</p>
          </div>
        </div>
        <div className="sc-kstqJO hxBIOc mt-4 md:mt-0 md:ml-4 flex items-center">
          <div className="basic-single grouped-dropdownNew md:d-none d-md-block css-b62m3t-container flex-grow">
            {/* Dropdown component */}
          </div>
          <div className="sc-hBEYId jUZYmd md:ml-4 mt-4 md:mt-0">
            <input name="searchText" placeholder="Cari Data Publik Indonesia" value="" className="border-gray-300 border-2 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500" />
            <div className="btn-search svg-15 ml-2">
              {/* Search button icon */}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '20px', width: '30%' }}>
        <img className="sc-hHfuMS dwLdMQ" src="https://data.go.id/api-be/file/public-view/indonesia_20231012060306_20231013151237.png" />
      </div>
    </div>
  );
};

export default HeroSection;
