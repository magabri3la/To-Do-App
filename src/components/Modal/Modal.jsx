import React from 'react';
import Portal from '../Portal/Portal';
import styles from './Modal.module.css';

function Overlay ({children}) {
  return (
    <div className={styles.overlay}>
      {children}
    </div>
  );
};

function BaseModal ({children}) {
  return (
    <div className={styles.baseModal}>
      {children}
    </div>
  );
};

function Modal({id, children}) {
  return(
    <Portal id={id}>
      <Overlay>
        <BaseModal>
          {children}
        </BaseModal>
      </Overlay>
    </Portal>
  )
}

export { Modal };