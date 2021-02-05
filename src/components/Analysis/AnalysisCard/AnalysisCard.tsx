import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';

const useCardStyles = createUseStyles({
  card: {
    position: 'relative',
    height: 90,
    display: 'grid',
    gridTemplateColumns: '4.5fr 1fr',
    gap: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: '13px 11px',
    fontFamily: '"San Francisco(SF UI)", sans-serif',
    overflow: 'hidden',
    boxShadow: '0 0 33px 0 #A6BDDB40',

    '&:after': {
      content: selected => selected ? '""' : null,
      height: '100%',
      width: 4,
      position: 'absolute',
      right: 0,
      top: 0,
      backgroundColor: '#0036F5'
    }
  },
  about: {
    overflow: 'hidden'
  },
  descAndDays: {
    color: '#9CA2B4',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '14px',
    letterSpacing: '0.02em',
    margin: '4px 0 0 0'
  },
  nameAndPrice: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '17px',
    letterSpacing: '0.02em',
    color: '#2F3854',
    margin: 0,
  },
  name: {
    extend: 'nameAndPrice',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%'
  },
  price: {
    extend: 'nameAndPrice',
    textAlign: 'right',
  },
  description: {
    extend: 'descAndDays'
  },
  days: {
    extend: 'descAndDays',
    textAlign: 'right'
  },
  button: {
    cursor: 'pointer',
    backgroundColor: '#F6F8FD',
    border: 'none',
    borderRadius: 6,
    width: 28,
    height: 28,
    marginTop: 4,
    float: 'right',
    position: 'relative',
    outlineWidth: 1,
    outlineColor: '#0036F5',

    '&:hover': {
      '&:before, &:after': {
        background: '#2F3854',
      }
    },

    '&:before, &:after': {
      position: 'absolute',
      top: 'calc(50% - 1px)',
      left: 'calc(50% - 9px)',
      width: 18,
      height: 2,
      background: '#CBD0DE',
      transition: 'all .3s'
    },

    '&:before': {
      content: '""',
      transform: 'matrix(1, 0, 0, 1, 0, 0)'
    },


    '&:after': {
      content: selected => selected ? null : '""',
      transform: 'matrix(0, 1, -1, -0.01, 0, 0)'
    },
  }
});

type AnalysisCardProps = {
  analysis: AnalysisData;
  selected: boolean;
  toggleSelection: (a: AnalysisData) => void;
}

const AnalysisCard:React.FC<AnalysisCardProps> = ({ analysis, selected, toggleSelection }) => {
  const { id, name, description, price, days } = analysis;
  const styles = useCardStyles(selected);

  const daysLabel = () => {
    if (days.toString().endsWith('1')) return 'день';
    else if (days.toString().endsWith('2') && days !== 12) return 'дня';
    else if (days.toString().endsWith('3') && days !== 13) return 'дня';
    else if (days.toString().endsWith('4') && days !== 14) return 'дня';
    return 'дней';
  }

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    toggleSelection(analysis);
  }, [toggleSelection, id]);

  return (
    <article className={styles.card}>
      <div className={styles.about}>
        <h3 className={styles.name}>{ name }</h3>
        <p className={styles.description}>{ description.slice(0, 80).trimEnd() + "..." }</p>
      </div>
      <div>
        <h3 className={styles.price}>{price} &#8381;</h3>
        <p className={styles.days}>{days + " " + daysLabel()}</p>
        <button className={styles.button} onClick={handleClick} />
      </div>
    </article>
  );
};

export default React.memo(AnalysisCard);