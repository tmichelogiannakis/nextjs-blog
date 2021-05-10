import {
  forwardRef,
  HTMLProps,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import clsx from 'clsx';

type InputProps = HTMLProps<HTMLInputElement> & {
  className?: string;
};

const Input: ForwardRefExoticComponent<
  PropsWithoutRef<InputProps> & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <input
      ref={ref}
      className={clsx(
        'w-full p-1 rounded border border-solid border-gray-400 bg-gray-50',
        className
      )}
      {...otherProps}
    />
  );
});

Input.displayName = 'ForwardRef(Input)';

export default Input;
