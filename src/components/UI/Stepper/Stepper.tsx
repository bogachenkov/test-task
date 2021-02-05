import React from 'react';
import { createUseStyles } from 'react-jss';
import StepperItem from './StepperItem/StepperItem';

const useStepperStyles = createUseStyles({
  stepper: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  }
});

type StepperProps = {
  steps: Steps,
  activeStepId: number
}

const Stepper:React.FC<StepperProps> = ({ steps, activeStepId }) => {
  const styles = useStepperStyles();
  return (
    <div className={styles.stepper}>
      {
        steps.map((step, _, self) => (
          <StepperItem id={step.id}
                key={step.id}
                title={step.title}
                active={step.id <= activeStepId}
                isLast={step.id === self.length}
          />
        ))
      }
    </div>
  );
};

export default Stepper;