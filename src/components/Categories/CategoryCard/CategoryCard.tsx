import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { searchState, selectedCategoryName } from '../../../state';

const useCardStyles = createUseStyles({
  card: selected => ({
    height: 110,
    flex: '0 0 120px',
    padding: '13px 10px',
    backgroundColor: selected ? '#0036F5' : '#ffffff',
    borderRadius: 10,
    boxShadow: '0 0 33px 0 #A6BDDB40',
    transition: 'background-color .5s, color .5s, transform .2s',
    cursor: 'pointer',
    color: selected ? '#FFFFFF' : '#2F3854',
    fontFamily: '"San Francisco(SF UI)", sans-serif',

    '&:hover': {
      boxShadow: '0 0 33px 0 #A6BDDB90',
      transform: 'scale(1.05)'
    }
  }),
  icon: selected => ({
    height: 22,
    width: 22,
    filter: selected ? 'brightness(0) invert(1)' : 'none'
  }),
  name: {
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: .3,
    lineHeight: 1,
    marginTop: 18,
    textOverflow: 'ellipsis'
  }
});

type CategoryCardProps = {
  name: CategoryName;
  iconUrl: string;
  selected: boolean;
}

const CategoryCard:React.FC<CategoryCardProps> = ({ name, iconUrl, selected }) => {
  const styles = useCardStyles(selected);
  const setSelectedCategory = useSetRecoilState(selectedCategoryName);
  const resetSearchState = useResetRecoilState(searchState);

  const onCategoryClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    resetSearchState();
    setSelectedCategory(name);
  }, [name, resetSearchState, setSelectedCategory]);

  return (
    <div className={styles.card} onClick={onCategoryClick}>
      <img className={styles.icon} src={iconUrl} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default React.memo(CategoryCard);