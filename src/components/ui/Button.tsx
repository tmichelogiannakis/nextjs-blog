import { FC, HTMLProps } from 'react';
import clsx from 'clsx';

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  severity?: 'primary' | 'default';
};

const Button: FC<ButtonProps> = ({
  className,
  type = 'button',
  severity = 'default',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(
        'border border-solid py-2 px-4 rounded-lg shadow',
        {
          'bg-primary-700 text-primary-50 border-primary-700':
            severity === 'primary'
        },
        className
      )}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
