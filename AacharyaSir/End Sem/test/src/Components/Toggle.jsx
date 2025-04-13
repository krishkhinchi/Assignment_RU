import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    if(isToggled) {
        setIsToggled(false);
    } else {
        setIsToggled(true);
    }
  };

  return (
    <button onClick={handleToggle}>
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
};

export default Toggle;