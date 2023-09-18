import { useState, useEffect } from 'react';

const TypingTitle = ({completionWord}) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return <h1 className="main-title">{blogTitle}</h1>;
};

export default TypingTitle