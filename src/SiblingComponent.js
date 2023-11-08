
import React, {useState} from 'react'

const SiblingComponent= () => {
    const [text, setText] = useState('я текст');
    
    const handleClick = () => {
      setText(text === 'я текст'? <h1>REDEV</h1> : text);
    }
  
    return (
      <div>
        <p>{text}</p>
        <button onClick={handleClick}>Изменить текст</button>
       
      </div>
    );
  }
  
  export default SiblingComponent