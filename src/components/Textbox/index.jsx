import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

function Input ({ placeholder, input, setInput }) {

  return (
    <InputBase
      type="text"
      value={input}
      placeholder={placeholder}
      onChange={e => setInput(e.target.value)}
    />
  );
}

export default Input;

const InputBase = styled.input`
  background-color: transparent;
  border: 3px solid ${db.theme.colors.primaryDark};
  border-radius: 5px;
  color: ${db.theme.colors.contrastText};
  height: 40px;
  padding: 16px;
  width: 100%;
  &:focus {
    outline: none;
`;

