import React from 'react';
import { useFormContext } from 'react-hook-form';
import { createUseStyles } from 'react-jss';

import Checkbox from '../UI/FormElements/Checkbox/Checkbox';
import Input from '../UI/FormElements/Input/Input';
import Textarea from '../UI/FormElements/Textarea/Textarea';

const useFormStyles = createUseStyles({
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    columnGap: 26
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    columnGap: 16
  }
});

type FieldData = {
  label: string;
  id: string;
  required?: boolean;
  datetime?: boolean;
  mask?: string;
}

const fields = {
  time: {
    label: 'Время сдачи',
    id: 'datetime',
    required: true,
    datetime: true
  },
  address: {
    label: 'Адрес',
    id: 'address',
    required: true
  },
  addressDetails: [{
    label: 'Квартира',
    id: 'apartment',
    required: true
  },
  {
    label: 'Домофон',
    id: 'intercom',
    required: true
  },
  {
    label: 'Подъезд',
    id: 'entrance',
    required: true
  },
  {
    label: 'Этаж',
    id: 'floor',
    required: true
  }],
  phone: {
    label: 'Номер телефона',
    id: 'phone',
    required: true,
    mask: '(+7 (999) 999-99-99)',
    button: {
      text: 'Подтвердить'
    }
  },
  comment: {
    label: 'Комментарий',
    id: 'comment',
    placeholder: 'Введите комментарий'
  },
  checkbox: {
    label: 'Перезвоните мне для уточнения заказа',
    id: 'call'
  }
}

const UserForm:React.FC = () => {
  const styles = useFormStyles();
  const { register, errors, control } = useFormContext();

  const renderInput = (field: FieldData) => <Input key={field.id} {...field} register={register} control={control} error={errors[field.id]} />;

  return (
    <form className={styles.form}>
      <div>
        { renderInput(fields.time) }
        { renderInput(fields.address) }
        <div className={styles.row}>
          {
            fields.addressDetails.map(field => renderInput(field))
          }
        </div>
        { renderInput(fields.phone) }
      </div>
      <div>
        <Textarea {...fields.comment} register={register} />
        <Checkbox {...fields.checkbox} register={register} />
      </div>
    </form>
  );
};

export default React.memo(UserForm);