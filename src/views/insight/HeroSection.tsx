import React from 'react';
import SearchBox from '@core/components/bi-tasik/input/SearchBox';

interface HeroSectionProps {
  margin?: string;
  onSearch: (keyword: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ margin, onSearch }) => {

  return (
    <div className={`items-center justify-center ${margin} md:flex md:flex-row`}>
      <div>
        <div className="text-2xl font-bold">
          <p>Temukan</p>

          <p className="text-4xl">
            <span className="text-blue">Insight</span> Baru
          </p>

          <div className="flex mt-8">
            <p className="text-lg">Masukkan kata kunci untuk mendapatkan insight</p>
          </div>
        </div>

        <div className="mt-4">
          <SearchBox intlPleaceHolder="placeholder.searchbox.insight" onSearch={onSearch} />
        </div>
      </div>

      <div className="hidden ml-32 md:flex" style={{ width: '20%' }}>
        <img src="/images/bi/vector/insight.svg" alt="Insight" />
      </div>
    </div>
  );
};

export default HeroSection;
