import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Input from '../Textbox';
import Submit from '../Submit';

function Form () {
  const [input, setInput] = useState('');
  const router = useRouter();

  function handleSubmit (e) {
    e.preventDefault();
    router.push(`/quiz?name=${input}`);
  }

  return (
    <form onSubmit={handleSubmit}>
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

