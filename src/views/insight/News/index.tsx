import CardNews from '@core/components/bi-tasik/cards/CardNews';
import TitleH5 from '@core/components/bi-tasik/text/TitleH5';
import PaginationRounded from '@core/components/navigation/pagination/PaginationRounded';
import DisplayModeSelector from '@core/components/ux/DisplayModeSelector';
import { INews } from '@core/interfaces/insight/news.interface';
import { calculateTotalPages, paginateArray } from '@core/utils/pagination';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { newsDisplayModes } from './newsDisplayModes.variable';

interface NewsViewProps {
  allNews: INews[];
  positiveNews: INews[];
  negativeNews: INews[];
  neutralNews: INews[];
}

const NewsView: React.FC<NewsViewProps> = ({
  allNews,
  positiveNews,
  negativeNews,
  neutralNews
}) => {
  const router = useRouter();
  const currentPageQuery = parseInt(router.query.page as string) || 1;
  const itemsPerPageQuery = parseInt(router.query.itemsPerPage as string) || 6;

  const [displayMode, setDisplayMode] = useState('all');
  const [currentPage, setCurrentPage] = useState<number>(currentPageQuery);
  const [itemsPerPage] = useState<number>(itemsPerPageQuery);

  useEffect(() => {
    if (
      currentPage !== currentPageQuery ||
      itemsPerPage !== itemsPerPageQuery
    ) {
      const query = {
        ...router.query,
        page: currentPage.toString(),
        itemsPerPage: itemsPerPage.toString(),
      };

      router.push({ pathname: router.pathname, query }, undefined, { shallow: true });
    }
  }, [currentPage, itemsPerPage, router, currentPageQuery, itemsPerPageQuery]);

  const handleDisplayModeChange = (mode: string) => {
    setDisplayMode(mode);

    setCurrentPage(1); // Reset halaman saat mode berubah
  };

  let news: INews[] = [];

  if (displayMode === 'all') {
    news = allNews;
  } else if (displayMode === 'positive') {
    news = positiveNews;
  } else if (displayMode === 'negative') {
    news = negativeNews;
  } else if (displayMode === 'neutral') {
    news = neutralNews;
  }

  const paginatedNews = paginateArray<INews>(news, currentPage, itemsPerPage);
  const totalPages = calculateTotalPages(news.length, itemsPerPage);

  return (
    <>
      <TitleH5 title="Berita" textAlignCenter={true}></TitleH5>

      <DisplayModeSelector
        displayModes={newsDisplayModes}
        onDisplayModeChange={handleDisplayModeChange}
      />

      <div className="my-6 grid grid-cols gap-4 sm:grid-cols-2">
        {paginatedNews.map((news: INews) => (
          <CardNews
            key={news.title}
            link={news.link}
            title={news.title}
            source={news.source}
            date={news.date}
            snippet={news.snippet}
            thumbnail={news.thumbnail}
          />
        ))}
      </div>

      <PaginationRounded
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default NewsView;
