import React from 'react';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { createUseStyles } from 'react-jss';
import InputMask from 'react-input-mask';
import Field from '../Field/Field';
import Button from '../../Button/Button';

const useInputStyles = createUseStyles({
  input: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    color: '#2F3854',
    paddingBottom: 14,
    border: 'none',
    borderBottom: '1px solid #CBD0DE',
    outline: 'none',

    '&:active, &:focus': {
      borderColor: '#0036F5'
    }
  },
  error: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1,
    color: 'tomato',
    position: 'absolute',
    bottom: -16,
    left: 0,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  floatBtn: {
    position: 'absolute',
    right: 0,
    top: 'calc(50% - 14.5px)'
  }
})

type InputProps = {
  id: string;
  label: string;
  register: ReturnType<typeof useForm>['register'];
  control: ReturnType<typeof useForm>['control'];
  required?: boolean;
  datetime?: boolean;
  error?: {
    message: string,
    type: string
  };
  mask?: string;
  button?: { text: string } & React.HTMLAttributes<HTMLButtonElement>
}

const Input:React.FC<InputProps & React.HTMLAttributes<HTMLInputElement>> = ({ id, label, register, control, required = false, datetime = false, error, mask, button, ...props }) => {
  const styles = useInputStyles();

  return (
    <Field label={label} id={id}>
      {
        !mask &&
          <input ref={register({ required: required ? 'Заполните поле' : false })}
            className={styles.input}
            name={id}
            id={id}
            type={datetime ? 'datetime-local' : 'text'}
            {...props}
          />
      }
      {
        mask && (
          //@ts-ignore
          <Controller
            as={InputMask}
            control={control}
            rules={{ required: required ? 'Заполните поле' : false }}
            mask="+7 (999) 999-99-99"
            maskPlaceholder={null}
            className={styles.input}
            name={id}
            id={id}
            type={datetime ? 'datetime-local' : 'text'}
            {...props}
            defaultValue={""}
          />
        )
      }
      { error && <span className={styles.error}>{error.message}</span> }
      { button && (
        <div className={styles.floatBtn}>
          <Button theme="light" size="small" type="button" {...button}>{button.text}</Button>
        </div>
      )}
    </Field>
  );
};

export default React.memo(Input);