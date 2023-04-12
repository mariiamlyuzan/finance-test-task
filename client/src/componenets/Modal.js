import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Wrapper, Backdrop } from '../styles/Modal.styled';
import { HiX } from 'react-icons/hi';
import { Button } from '../styles/TickersItem.styled';
import { AddTickerForm } from './AddTickerForm';

import { IconContext } from 'react-icons';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Wrapper>
        <Button onClick={onClose} position transparent right top>
          <IconContext.Provider value={{ color: '#A9A9A9', size: '1em' }}>
            <div>
              <HiX />
            </div>
          </IconContext.Provider>
        </Button>
        <AddTickerForm onClose={onClose} />
      </Wrapper>
    </Backdrop>,
    modalRoot,
  );
};
