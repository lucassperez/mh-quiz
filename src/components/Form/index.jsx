import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../../../db.json';
// import Textbox from '../Textbox';
// import Submit from '../Submit';

function Form () {
  const [aviso, setAviso] = useState(false);
  const [input, setInput] = useState('');
  const router = useRouter();

  function handleSubmit (e) {
    e.preventDefault();
    router.push(`/quiz?name=${input}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      {aviso && "Escolha um nome para poder jogar!"}
      <InputText
        type="text"
        value={input}
        placeholder={"Diz aí o teu nome pra jogar (:"}
        onChange={e => setInput(e.target.value)}
      />
      <InputSubmit
        disabled={!input}
        type="submit"
        value="Jogar!"
      />
    </form>
  );
}

export default Form;

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

const InputSubmit = styled.input`
  background-color: ${db.theme.colors.secondary};
  border-radius: 5px;
  color: ${db.theme.colors.contrastText};
  cursor: pointer;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  height: 52px;
  padding: 10px;
  margin: 24px 0 0;
  width: 100%;
  &:hover {
    color: #f5f5f5;
    background-color: ${db.theme.colors.secondaryLight};
  }
  &:active {
    background-color: ${db.theme.colors.secondaryDark};
    color: #555;
  }
  &:focus { outline: none; }
  &:disabled {
    background-color: #555;
    color: black;
  }
`;

