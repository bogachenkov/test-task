import React from 'react';
import { createUseStyles } from 'react-jss';

const useLoaderStyles = createUseStyles({
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#F8FAFF'
  },
  message: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 24,
    fontWeight: 400
  }
});

const Loader:React.FC = () => {
  const styles = useLoaderStyles();
  return (
    <div className={styles.loader}>
      <h3 className={styles.message}>
        Загрузка данных...
      </h3>
    </div>
  );
};

export default Loader;