import { handleSearchFromURL } from '@core/utils/handleSearchFromURL';
import DataTopics from '@views/home/DataTopics'
import HeroSection from '@views/home/HeroSection'
import ListFileSection from '@views/home/ListFileSection'
import { useEffect } from 'react';


export default function IndexPage() {
  const handleSearch = (keyword: string) => {
    // Di sini Anda bisa melakukan sesuatu dengan kata kunci pencarian,
    // misalnya, mengirim permintaan ke API untuk mendapatkan data insight
    console.log('Kata kunci pencarian:', keyword);
  };

  useEffect(() => {
    // Memanggil fungsi pencarian pertama kali saat komponen dimuat
    handleSearchFromURL(handleSearch);
  }, []);

  if (typeof window === 'undefined') {
    console.log('window is undefined')

    return <></>
  } else {
    return (
      <>
        <HeroSection onSearch={handleSearch} />

        <DataTopics />

        <ListFileSection />
      </>
    )
  }
}
