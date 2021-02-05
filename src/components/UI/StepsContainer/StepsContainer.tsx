import React from 'react';
import { createUseStyles } from 'react-jss';
import { useRecoilValue } from 'recoil';
import FirstStep from '../../../steps/FirstStep/FirstStep';
import SecondStep from '../../../steps/SecondStep/SecondStep';
import { activeStepState } from '../../../state';

const useContainerStyles = createUseStyles({
  container: {

  }
})

const StepsContainer:React.FC = () => {
  const activeStep = useRecoilValue(activeStepState);
  const styles = useContainerStyles();

  return (
    <main className={styles.container}>
      { activeStep === 1 && <FirstStep /> }
      { activeStep === 2 && <SecondStep /> }
    </main>
  );
};

export default StepsContainer;