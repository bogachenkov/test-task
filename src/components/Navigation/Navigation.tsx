import React from 'react';
import { createUseStyles } from 'react-jss';
import { useFormContext } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activeStepState, selectedAnalysisState, stepState } from '../../state';

import Button from '../UI/Button/Button';

const useNavigationStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginTop: 32,
    marginBottom: 16
  },
  info: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    width: 'min(580px, 90%)',
    margin: '0 auto',
    textAlign: 'center',
    color: '#7C89A8',
  },
  link: {
    cursor: 'pointer',
    outline: 'none',
    fontWeight: 600,
    padding: 0,
    background: 'none',
    border: 'none',
    color: '#7C89A8',
    fontFamily: 'Raleway, sans-serif',
    fontSize: 14,

    '&:hover, &:active': {
      textDecoration: 'underline'
    }
  }
});

const Navigation:React.FC = () => {
  const { formState, handleSubmit } = useFormContext();
  const steps = useRecoilValue(stepState);
  const selectedAnalysis = useRecoilValue(selectedAnalysisState);
  const [ activeStep, setActiveStep ] = useRecoilState(activeStepState);

  const styles = useNavigationStyles();

  const nextStep = () => {
    if (activeStep === 2) {
      handleSubmit((data: any) => {
        console.log('Выбранные анализы:', selectedAnalysis);
        console.log('Данные пользователя:', data);
      })();
    }
    else if (activeStep < steps.length) setActiveStep(step => step + 1);
  }

  const prevStep = () => {
    if (activeStep > 1) setActiveStep(step => step - 1);
  }

  return (
    <footer>
      <div className={styles.container}>
        <Button theme="light"
                disabled={activeStep === 1}
                onClick={prevStep}>
          Предыдущий шаг
        </Button>
        <Button theme="dark"
                disabled={selectedAnalysis.length === 0 || activeStep === steps.length || ( activeStep === 2 && !formState.isValid )}
                onClick={nextStep}>
          Следующий шаг
          {(activeStep === 1) && (
            <span>
              { selectedAnalysis.reduce((totalPrice, { price }) => totalPrice + price, 0) } &#8381;
            </span>
          )}
        </Button>
      </div>
      {
        activeStep === 1 && (
          <p className={styles.info}>
            Не могу <button className={styles.link}>найти</button> нужные исследования
          </p>
        )
      }
      {
        activeStep === 2 && (
          <p className={styles.info}>
            Нажимая на кнопку, вы принимаете <button className={styles.link}>Оферту об оказании услуг</button> и даете согласие
            на обработку персональных данных в соответствии с <button className={styles.link}>Политикой конфиденциальности</button>.
          </p>
        )
      }
    </footer>
  );
};

export default Navigation;