import React, { useState } from 'react';


const Content = () => {
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleButtonClick = () => {
        // Handle button click logic here
        setDisplayText(text);
      };
    
      const handleTextAreaChange = (event) => {
        // Handle text area change logic here
        setText(event.target.value);
      };
    

    
    return (
        <div className="text-center"> 
       
      <textarea className=" w-auto text-sm text-auto bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400" value={text} onChange={handleTextAreaChange} /> <br></br>
      <button className=" bg-red-700 rounded-sm hover:bg-red-800 text-white " onClick={handleButtonClick}>Click Here</button><br></br>
      {<p>{displayText}</p>}
        </div>
    );
};

export default Content;