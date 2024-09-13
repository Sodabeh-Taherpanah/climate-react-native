import {useState} from 'react';

const useNotification = () => {
  const [notification, setNotification] = useState<string>('');

  const setNotificationMessage = (message: string) => {
    setNotification(message);
  };

  const resetNotification = () => {
    setNotification('');
  };

  return {
    notification,
    setNotificationMessage,
    resetNotification,
  };
};

export default useNotification;
