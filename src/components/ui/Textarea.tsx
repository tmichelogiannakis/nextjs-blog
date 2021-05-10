import {
  forwardRef,
  HTMLProps,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import clsx from 'clsx';

type TextareaProps = HTMLProps<HTMLTextAreaElement> & {
  className?: string;
};

const Textarea: ForwardRefExoticComponent<
  PropsWithoutRef<TextareaProps> & RefAttributes<HTMLTextAreaElement>
> = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <textarea
      ref={ref}
      className={clsx(
        'w-full p-1 rounded border border-solid border-gray-400 bg-gray-50 resize-none',
        className
      )}
      {...otherProps}
    />
  );
});

Textarea.displayName = 'ForwardRef(Textarea)';

export default Textarea;
