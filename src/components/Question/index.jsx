import React, { useState } from 'react';
import { Widget } from '../Widget';
import Submit from '../Submit';
import PropTypes from 'prop-types';
import db from '../../../db.json';

function Question ({ question, questionIndex, total, onSubmit }) {
  const questionId = `question_${questionIndex}`;
  const [checkedAny, setCheckedAny] = useState('');

  const willSubmit = e => {
    e.preventDefault();
    setCheckedAny(false);
    onSubmit(e);
  }

  return (
    <Widget>
      <Widget.Header>
        Pergunta Número&nbsp;<b>{questionIndex+1}</b>&nbsp;de&nbsp;<b>{total}</b>
      </Widget.Header>
      <Widget.Content>
        <div style={{
          width: "inherit",
          overflow: "hidden"
        }}>
          <img src={question.image}/>
        </div>
        <h1>{question.title}</h1>
        <p>{question.description}</p>
        <form onSubmit={e => willSubmit(e)}>
          {question.alternatives.map((opção, i) => {
            const idOpção = `opção_${i}`;

            return (
              <Widget.Topic
                key={idOpção}
                as="label"
                htmlFor={idOpção}
                style={{ backgroundColor: checkedAny === idOpção && db.theme.colors.secondary }}
              >
                <input
                  style={{ display: 'none' }}
                  name={questionId}
                  type="radio"
                  id={idOpção}
                  onClick={() => setCheckedAny(idOpção)}
                />
                {opção}
              </Widget.Topic>
            );
          })}
          <Submit
            value="Responder!"
            disabled={!checkedAny}
          />
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default Question;

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
