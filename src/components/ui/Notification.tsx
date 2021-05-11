import { ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';

export type NotificationProps = {
  severity?: 'success' | 'error' | 'info';
  message?: string;
};

const Notification = (props: NotificationProps): ReactPortal | null => {
  const notificationRoot = document.getElementById('notification-root');

  const { message, severity = 'info' } = props;

  return notificationRoot
    ? ReactDOM.createPortal(
        <div
          className={clsx(
            'fixed bottom-0 left-2/4 -ml-64 w-full max-w-lg flex justify-between items-center py-0 px-8 h-20 shadow',
            {
              info: 'text-gray-100 bg-gray-800',
              success: 'text-gray-800 bg-success-500',
              error: 'text-gray-100 bg-error-500'
            }[severity]
          )}
        >
          {message && <div>{message}</div>}
        </div>,
        notificationRoot
      )
    : null;
};

export default Notification;
