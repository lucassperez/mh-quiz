import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../../../db.json';
import Input from '../Textbox';
import Submit from '../Submit';

function Form () {
  const [input, setInput] = useState('');
  const [aviso, setAviso] = useState(false);
  const router = useRouter();

  function handleSubmit (e) {
    e.preventDefault();
    router.push(`/quiz?name=${input}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      {aviso && "Escolha um nome para poder jogar!"}
      <Input
        placeholder={"Diz aí o teu nome pra jogar (:"}
        input={input}
        setInput={setInput}
      />
      <Submit
        disabled={!input}
        type="submit"
        value="Jogar!"
      />
    </form>
  );
}

export default Form;

