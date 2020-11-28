import React, { useState, useRef } from 'react';
import './index.scss';
import Modal from '../Modal';

const SkillRoleCard = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const innterText = useRef();

  const openModal = (e) => {
    innterText.current = e.target.innerText;
    setModalVisible(true);
  };
  const closeModal = (e) => {
    setModalVisible(false);
    innterText.current = '';
  };
  return (
    <div className="skill__role">
      <div className="skill__role--title">
        <h2>{props.title}</h2>
      </div>
      <div className="skil__role--section">
        {props.section.map(({ title, names }) => {
          return (
            <>
              <h3 className="skill__role--section-title">{title}</h3>
              <div className="skill__role--section-skill-list">
                {names.map((name) => {
                  return (
                    <>
                      <div
                        className="skill-name-wrapper"
                        data-skill-name={name}
                        onClick={openModal}
                      >
                        <span>{name}</span>
                      </div>
                      {innterText.current === name
                        ? modalVisible && (
                            <Modal visible={modalVisible} onClose={closeModal}>
                              {name}
                            </Modal>
                          )
                        : null}
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SkillRoleCard;
