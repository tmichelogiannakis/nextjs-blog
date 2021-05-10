import React, { FC } from 'react';
import clsx from 'clsx';

type FormControlProps = React.HTMLProps<HTMLDivElement> & {
  className?: string;
};

const FormControl: FC<FormControlProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <div className={clsx('w-full', className)} {...otherProps}>
      {children}
    </div>
  );
};

export default FormControl;
