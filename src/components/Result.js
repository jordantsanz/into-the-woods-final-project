import React from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

const Result = ({ result, description, image }) => {
  if (result === 'none') {
    return (
      <div />
    );
  }

  if (result === 'invalid') {
    return (
      <div className="error">Please answer all questions!</div>
    );
  }

  return (
    <div className="modal-flex">
      <Modal
        className="modal"
        isOpen
      >
        <div className="result">{result}</div>
        <img className="image" src={image} alt="result" />
        <div className="description">{description}</div>
        <NavLink to="/">
          <button className="button modal-button" type="button">Go home</button>
        </NavLink>
      </Modal>
    </div>
  );
};

export default Result;
