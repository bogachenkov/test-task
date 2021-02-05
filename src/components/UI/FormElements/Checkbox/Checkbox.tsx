import React from 'react';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';

const useCheckboxStyes = createUseStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 26,
    cursor: 'pointer'
  },
  input: {
    appearance: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    margin: 0,

    '&:checked + svg': {
      opacity: 1
    }
  },
  icon: {
    opacity: 0
  },
  checkbox: {
    border: '1px solid #0036F5',
    borderRadius: 4,
    width: 18,
    height: 18,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    lineHeight: 1,
    color: '#2F3854',
    fontFamily: 'Raleway, sans-serif',
    fontSize: 14,
    fontWeight: 400
  }
});

type CheckboxProps = {
  id: string;
  label: string;
  register: ReturnType<typeof useForm>['register']
}

const Checkbox:React.FC<CheckboxProps & React.HTMLAttributes<HTMLInputElement>> = ({ id, label, register, ...props }) => {
  const styles = useCheckboxStyes();
  return (
    <label htmlFor={id} className={styles.wrapper}>
      <div className={styles.checkbox}>
        <input ref={register()} type="checkbox" className={styles.input} name={id} id={id} {...props} />
        <svg className={styles.icon} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4.42729L4.36538 8L11 1" stroke="#0036F5" strokeWidth="2"/>
        </svg>
      </div>
      <span className={styles.label}>
        {label}
      </span>
    </label>
  );
};

export default React.memo(Checkbox);