import React from 'react';
import { RecoilRoot } from 'recoil';
import { createUseStyles } from 'react-jss';

import AppContainer from './components/UI/AppContainer/AppContainer';
import { useForm, FormProvider } from 'react-hook-form';
import Loader from './components/Loader/Loader';

const useAppStyles = createUseStyles({
  app: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#F8FAFF'
  }
});


const App:React.FC = () => {
  const formMethods = useForm({ mode: 'onChange' });
  const styles = useAppStyles();

  return (
    <RecoilRoot>
      <React.Suspense fallback={<Loader />}>
        <div className={styles.app}>
          <FormProvider {...formMethods}>
            <AppContainer />
          </FormProvider>
        </div>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
