import React from 'react';
import { createUseStyles } from 'react-jss';

const useButtonStyles = createUseStyles({
  button: {
    border: 'none',
    borderRadius: 10,
    height: ({ size }) => size === 'small' ? 29 : 50,
    width: ({ size }) => size === 'small' ? 100 : 'min(236px, 45%)',
    backgroundColor: ({ theme }) => theme === 'light' ? '#DAE2FE' : '#0036F5',
    color: ({ theme }) => theme === 'light' ? '#0036F5' : '#FFFFFF',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 600,
    fontSize: ({ size }) => size === 'small' ? 11 : 14,
    lineHeight: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
    outlineColor: '#0036F5',

    '&:hover:enabled': {
      boxShadow: ({ size }) => size === 'small' ? '0 0 13px 0px #A6BDDB' : '0 0 23px 0px #A6BDDB',
    },

    '&:disabled': {
      cursor: 'auto',
      opacity: '.7'
    }
  }
});

type ButtonProps = {
  theme: 'light' | 'dark',
  size?: 'small' | 'big'
}

const Button:React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ theme, size = 'big', children, ...props }) => {
  const styles = useButtonStyles({ theme, size });
  return (
    <button className={styles.button} {...props}>
      { children }
    </button>
  );
};

export default Button;