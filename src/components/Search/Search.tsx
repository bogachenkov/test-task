import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useRecoilState } from 'recoil';
import { searchState } from '../../state';

const useSearchStyles = createUseStyles({
  wrapper: {
    width: 'min(784px, 90%)',
    margin: '45px auto 42px auto'
  },
  input: {
    width: '100%',
    height: 33,
    border: 'none',
    borderBottom: '1px solid #CBD0DE',
    background: 'transparent',
    textAlign: 'center',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    outline: 'none',

    '&:focus': {
      borderBottom: '1px solid #0036F5',
    },

    '&::placeholder': {
      color: '#CBD0DE'
    }
  }
})

const Search:React.FC = () => {
  const [ searchVal, setSearchVal ] = useRecoilState(searchState);
  const styles = useSearchStyles();

  return (
    <div className={styles.wrapper}>
      <input className={styles.input}
           value={searchVal}
           onChange={(e) => setSearchVal(e.target.value)}
           placeholder="Поиск"
      />
    </div>
  );
};

export default Search;