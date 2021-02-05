import React from 'react';
import { createUseStyles } from 'react-jss';
import UserForm from '../../components/UserForm/UserForm';

const useStyles = createUseStyles({
  wrapper: {
    background:' #FFFFFF',
    boxShadow: '0px 30px 100px rgba(166, 189, 219, 0.4)',
    borderRadius: 10,
    padding: '52px 73px 51px 76px',
    marginTop: 61
  },
  title: {
    color: '#2D3958',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 600,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 0
  }
})

const SecondStep:React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Заполните ваши данные</h2>
      <UserForm />
    </div>
  );
};

export default SecondStep;