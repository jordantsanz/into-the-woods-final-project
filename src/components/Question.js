/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

const Question = ({
  title, answer1, answer2, answer3, image1, image2, image3, onSelect, answerval1, answerval2, answerval3,
}) => {
  const onClick = (answerval) => {
    console.log({ answerval });
    onSelect(answerval);
  };

  const [answer1pressed, click1] = useState('none');
  const [answer2pressed, click2] = useState('none');
  const [answer3pressed, click3] = useState('none');

  const update = (which) => {
    if (which === 1) {
      click1('pressed');
      click2('not');
      click3('not');
    } else if (which === 2) {
      click1('not');
      click2('pressed');
      click3('not');
    } else {
      click1('not');
      click2('not');
      click3('pressed');
    }
  };

  return (
    <div className="question">
      <div className="title">{title}</div>
      <div className="answers">
        <div className={`answer ${answer1pressed}`} onClick={() => { onClick(answerval1); update(1); }}>
          <h1 className="answer-text">{answer1}</h1>
          <img className="image" src={image1} alt="answer1" />
        </div>

        <div className={`answer ${answer2pressed}`} onClick={() => { onClick(answerval2); update(2); }}>
          <h1 className="answer-text">{answer2}</h1>
          <img className="image" src={image2} alt="answer2" />
        </div>

        <div className={`answer ${answer3pressed}`} onClick={(e) => { onClick(answerval3); update(3); }}>
          <h1 className="answer-text">{answer3}</h1>
          <img className="image" src={image3} alt="answer3" />
        </div>

      </div>
    </div>
  );
};

export default Question;
