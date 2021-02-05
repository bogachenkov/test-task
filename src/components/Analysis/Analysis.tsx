import React, { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { analysisState, selectedAnalysisState } from '../../state';
import AnalysisCard from './AnalysisCard/AnalysisCard';

const useAnalysisStyles = createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(308px, 1fr))',
    gap: 13,
    marginTop: 27,
    marginBottom: 24,
  },
  warning: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 42
  },
  showMoreButton: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 600,
    fontSize: 14,
    textAlign: 'center',
    color: '#0036F5',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline'
    }
  },
  centered: {
    textAlign: 'center'
  }
});

const Analysis:React.FC = () => {
  const [ isShowingMore, setIsShowingMore ] = useState(false);
  const [selectedAnalysis, toggleAnalysisSelection] = useRecoilState(selectedAnalysisState);
  const analysis = useRecoilValue(analysisState);
  const styles = useAnalysisStyles();

  const toggleSelection = useCallback((analysis: AnalysisData) => {
    toggleAnalysisSelection(state => {
      if (state.some(a => a.id === analysis.id)) return state.filter(a => a.id !== analysis.id);
      return state.concat(analysis);
    });
  }, []);

  const renderAnalysisCard = (a: AnalysisData) => (
    <AnalysisCard key={a.id}
                  analysis={a}
                  toggleSelection={toggleSelection}
                  selected={selectedAnalysis.some(selected => selected.id === a.id)}
    />
  )

  if (!analysis || analysis.length === 0) return (
    <h1 className={styles.warning}>
      Нет доступных анализов
    </h1>
  )

  return (
    <>
      <div className={styles.grid}>
        {
          analysis.slice(0, 6).map(renderAnalysisCard)
        }
        {
          (isShowingMore && analysis.length > 6) && analysis.slice(6, 9).map(renderAnalysisCard)
        }
      </div>
      <div className={styles.centered}>
        {
          ( analysis.length > 6 ) && (
            <button onClick={() => setIsShowingMore(state => !state)} className={styles.showMoreButton}>
              { isShowingMore ? 'Скрыть' : 'Показать ещё' }
            </button>
          )
        }
      </div>
    </>
  );
};

export default Analysis;