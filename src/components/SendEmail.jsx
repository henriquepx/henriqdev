import { useState, useEffect } from 'react';
import './SendEmail.css';

const SendEmail = () => {
  const [checked, setChecked] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (checked) {
      const timeoutId = setTimeout(() => {
        setAnimationFinished(true);
        window.location.href = 'mailto:henriquepinheiroxavier@gmail.com';
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [checked]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    setAnimationFinished(false);
  };

  return (
    <div className={`containerSendEmail ${checked ? 'checked' : ''}`}>
      <input type="checkbox" name="send" id="send" checked={checked} onChange={handleCheckboxChange} />
      <label htmlFor="send" className="send">
        <div className={`rotate ${animationFinished ? 'animation-finished' : ''}`}>
          <div className="move">
            <div className="part left"></div>
            <div className="part right"></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default SendEmail;
