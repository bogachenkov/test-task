import React from 'react';

import Analysis from '../../components/Analysis/Analysis';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';

const FirstStep:React.FC = () => {
  return (
    <div>
      <Search />
      <Categories />
      <Analysis />
    </div>
  );
};

export default FirstStep;