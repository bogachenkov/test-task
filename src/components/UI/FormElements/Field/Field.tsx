import React from 'react';
import { createUseStyles } from 'react-jss';

const useFieldStyles = createUseStyles({
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 26,
    position: 'relative'
  },
  label: {
    marginBottom: 8,
    fontFamily: '"Raleway", sans-serif',
    fontSize: 12,
    fontWeight: 400,
    color: '#9CA2B4'
  }
})

type FieldProps = {
  label: string;
  id: string;
}

const Field:React.FC<FieldProps> = ({ label, id, children }) => {
  const styles = useFieldStyles();
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>{ label }</label>
      { children }
    </div>
  );
};

export default Field;