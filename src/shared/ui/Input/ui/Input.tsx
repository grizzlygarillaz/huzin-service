import { InputText, InputTextProps } from 'primereact/inputtext';
import classNames from 'classnames';
import { FC } from 'react';

interface InputProps extends InputTextProps {
  label?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  inGroup?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const { label, labelClassName, placeholder = 'Введите', inGroup = true } = props;

  return (
    <>
      {label && (
        <span className={classNames({ 'p-inputgroup-addon': inGroup }, labelClassName)}>
          {label}
        </span>
      )}
      <InputText {...props} placeholder={placeholder} />
    </>
  );
};
