import React, { useCallback, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { useRecoilValue } from 'recoil';

import { categoriesState, selectedCategoryName } from '../../state';

import CategoryCard from './CategoryCard/CategoryCard';

const useCategoriesStyles = createUseStyles({
  categories: {
    display: 'flex',
    //gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: 13,
    top: 0,
    left: 0,
    right: 0,
    padding: '33px 0',
    margin: '-33px 0',
    alignItems: 'center',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    overflowX: 'auto',

    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
});

const Categories:React.FC = () => {
  const categories = useRecoilValue(categoriesState);
  const selectedCategory = useRecoilValue(selectedCategoryName);
  const ref = useRef<HTMLDivElement>(null);
  const styles = useCategoriesStyles();

  const handleScroll = useCallback((e: React.WheelEvent<HTMLElement>) => {
    if (!ref.current) return;
    ref.current.scrollTo({
        top: 0,
        left: ref.current.scrollLeft + e.deltaY
    });
  }, []);

  return (
    <div ref={ref} onWheel={handleScroll} className={styles.categories}>
      {
        categories.map(category =>
          <CategoryCard key={category.name}
                        name={category.name}
                        selected={selectedCategory === category.name}
                        iconUrl={category.iconUrl} />)
      }
    </div>
  );
};

export default Categories;