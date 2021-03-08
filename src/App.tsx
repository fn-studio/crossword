/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { Trie } from 'prefix-trie-ts';

import { words } from './wordlist';

const trie = new Trie(words);
console.log(trie.getPrefix('bat'));

const App: React.FC = () => {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        backgroundColor: 'lightcoral',
        margin: '0 auto',
        width: '640px',
        height: '640px',
      }}
    >
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'cyan',
          }}
        >
          hi
        </div>
      ))}
    </div>
  );
};

export default App;
