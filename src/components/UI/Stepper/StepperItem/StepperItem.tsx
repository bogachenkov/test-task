import React from 'react';
import { createUseStyles } from 'react-jss';

const useStepperItemStyles = createUseStyles({
  step: {
    flex: '0 0 160px',
    opacity: ({active}) => active ? 1 : 0.3
  },
  count: {
    width: 32,
    height: 32,
    borderRadius: 16,
    background: '#0036F5',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"San Francisco(SF UI)", sans-serif',
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 19
  },
  stepline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ({ id, isLast }) => {
      if (id === 1) return 'flex-end';
      if (isLast) return 'flex-start';
      return 'center'
    }
  },
  line: {
    width: 64,
    height: 2,
    background: '#0036F5',
  },
  title: {
    width: '70%',
    margin: '6px auto',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 600,
    fontSize: 14,
    textAlign: 'center',
    color: '#0036F5'
  }
});

type StepProps = {
  id: number;
  title: string;
  active: boolean;
  isLast: boolean;
}

const StepperItem:React.FC<StepProps> = ({ id, title, active, isLast }) => {
  const styles = useStepperItemStyles({active, id, isLast});
  return (
    <div className={styles.step}>
      <div className={styles.stepline}>
        { id !== 1 && <span className={styles.line} /> }
        <span className={styles.count}>{id}</span>
        { !isLast && <span className={styles.line} /> }
      </div>
      <p className={styles.title}>
        {title}
      </p>
    </div>
  );
};

export default StepperItem;