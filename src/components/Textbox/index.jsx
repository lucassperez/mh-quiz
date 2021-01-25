import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

function Textbox (props) {
  const [input, setInput] = useState('');

  return (
    <InputText
      type="text"
      value={input}
      placeholder={props.placeholder}
      onChange={e => setInput(e.target.value)}
    />
  );
}

export default Textbox;

const InputText = styled.input`
  background-color: transparent;
  border: 3px solid ${db.theme.colors.primaryDark};
  border-radius: 5px;
  color: ${db.theme.colors.contrastText};
  height: 40px;
  padding: 16px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
