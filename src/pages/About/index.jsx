import React, { useState } from 'react';
import './index.scss';
import Modal from '../../components/Modal';

const About = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <h1>About</h1>
      <button onClick={openModal}>Modal Open</button>
      {modalVisible && (
        <Modal visible={modalVisible} onClose={closeModal}>
          Hello
        </Modal>
      )}
    </>
  );
};

export default About;
