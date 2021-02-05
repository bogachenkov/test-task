import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from '../../Header/Header';
import Navigation from '../../Navigation/Navigation';
import StepsContainer from '../StepsContainer/StepsContainer';

const useContainerStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    width: 'min(1000px, 100%)',
    padding: '40px 25px 40px 25px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'min(1000px, 100%)',
    gridTemplateRows: 'auto 1fr auto'
  }
});

const AppContainer:React.FC = () => {
  const styles = useContainerStyles();

  return (
    <div className={styles.container}>
      <Header />
      <StepsContainer />
      <Navigation />
    </div>
  );
};

export default React.memo(AppContainer);