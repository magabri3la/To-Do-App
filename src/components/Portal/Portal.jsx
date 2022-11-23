import React from 'react';
import ReactDOM from 'react-dom';

function Portal ({ id, children }) {
  const element = React.useRef(document.getElementById(id) || document.createElement('div'));
  const [ dynamic ] = React.useState(!element.current.parentElement);

  React.useEffect(() => {
    if (dynamic) {
      element.current.id = id;
      document.body.appendChild(element.current);
      window.document.body.style.setProperty('overflow', 'hidden');
    }
    return () => {
      if (dynamic && element.current.parentElement) {
        element.current.parentElement.removeChild(element.current);
        window.document.body.style.removeProperty('overflow');
      }
    };
  }, [id]);

  return ReactDOM.createPortal(children, element.current);
};

export default React.memo(Portal);