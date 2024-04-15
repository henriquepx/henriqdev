import { useState } from 'react';
import './SendEmail.css';

const SendEmail = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <a href='maillto:henriquepinheiroxavier@gmail.com' className='containerSendEmail'>
      <input type="checkbox" name="send" id="send" checked={checked} onChange={handleCheckboxChange} />
      <label htmlFor="send" className={`send ${checked ? 'checked' : ''}`}>
        <div className="rotate">
          <div className="move">
            <div className="part left"></div>
            <div className="part right"></div>
          </div>
        </div>
      </label>
    </a>
  );
};

export default SendEmail;
