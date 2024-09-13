import {useCallback, useState} from 'react';

export const useCalendarModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const selectDate = useCallback(
    (date: string) => {
      setSelectedDay(date);
      closeModal(); // Close the modal after date selection
    },
    [closeModal],
  );

  return {
    modalVisible,
    selectedDay,
    openModal,
    closeModal,
    selectDate,
  };
};
