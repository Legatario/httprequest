import React from 'react';

const Message = ({onMsg}) => {


 
  return (
    <div>
        {onMsg && <p>{onMsg}</p>}
    </div>
  );
};

export default Message;