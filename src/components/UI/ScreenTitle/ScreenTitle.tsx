import React from 'react';
import { createUseStyles } from 'react-jss';

const useTitleStyles = createUseStyles({
  title: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '38px',
    textAlign: 'center',
    color: '#2D3958',
    marginTop: 0,
    marginBottom: 60
  }
});

const ScreenTitle:React.FC = ({ children }) => {
  const styles = useTitleStyles();
  return (
    <h1 className={styles.title}>
      { children }
    </h1>
  );
};

export default ScreenTitle;