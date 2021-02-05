import React from 'react';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';
import Field from '../Field/Field';

const useTextAreaStyles = createUseStyles({
  input: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    color: '#2F3854',
    padding: '13px 12px',
    border: '1px solid #CBD0DE',
    borderRadius: 10,
    height: 195,
    outline: 'none',
    resize: 'none',

    '&::placeholder': {
      color: '#9CA2B4'
    },

    '&:active, &:focus': {
      borderColor: '#0036F5'
    }
  },
})

type TextAreaProps = {
  id: string;
  label: string;
  placeholder?: string;
  register: ReturnType<typeof useForm>['register'];
}

const Textarea:React.FC<TextAreaProps & React.HTMLAttributes<HTMLTextAreaElement>> = ({ id, label, placeholder, register, ...props }) => {
  const styles = useTextAreaStyles();

  return (
    <Field label={label} id={id}>
      <textarea ref={register()}
        className={styles.input}
        name={id}
        id={id}
        placeholder={placeholder}
        {...props}
      />
    </Field>
  );
};

export default React.memo(Textarea);