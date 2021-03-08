/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Trie } from 'prefix-trie-ts';
import { useState } from 'react';
// import {useState} from '@

import { words } from './wordlist';

const trie = new Trie(words);
console.log(trie.getPrefix('bat'));

const items = [...Array(25)];
const initialInputs = items.reduce((acc, key) => ({ ...acc, [key]: '' }));
const App: React.FC = () => {
  const [inputs, setInputs] = useState(initialInputs);

  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        backgroundColor: 'lightcoral',
        // margin: '0 auto',
        width: '100vw',
        // width: '640px',
        height: '640px',
      }}
    >
      {items.map((_, i) => (
        <input
          type="text"
          key={i}
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'cyan',
            fontSize: '30px',
          }}
          onChange={(event) => {
            setInputs({ ...inputs, [i]: event.target.value.slice(-1) });
          }}
          value={inputs[i]}
        />
      ))}
    </div>
  );
};

export default App;
