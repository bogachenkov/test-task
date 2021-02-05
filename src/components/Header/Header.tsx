import React from 'react';
import { useRecoilValue } from 'recoil';
import { activeStepState, stepState } from '../../state';
import ScreenTitle from '../UI/ScreenTitle/ScreenTitle';
import Stepper from '../UI/Stepper/Stepper';

const Header:React.FC = () => {
  const steps = useRecoilValue(stepState);
  const activeStepId = useRecoilValue(activeStepState);

  return (
    <header>
      <ScreenTitle>
        { steps.find(step => step.id === activeStepId)?.title }
      </ScreenTitle>
      <Stepper steps={steps} activeStepId={activeStepId} />
    </header>
  );
};

export default Header;