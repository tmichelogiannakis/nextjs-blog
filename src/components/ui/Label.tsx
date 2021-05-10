import React, { FC } from 'react';
import clsx from 'clsx';

type LabelProps = React.HTMLProps<HTMLLabelElement> & {
  className?: string;
};

const Label: FC<LabelProps> = ({ className, children, ...otherProps }) => {
  return (
    <label
      className={clsx('block font-bold mt-2 mx-0 mb-1', className)}
      {...otherProps}
    >
      {children}
    </label>
  );
};

export default Label;
