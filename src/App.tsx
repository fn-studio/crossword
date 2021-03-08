/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState, useEffect } from 'react';

import { Trie } from 'prefix-trie-ts';

import { words } from './wordlist';

const trie = new Trie(words);

const App: React.FC = () => {
  // Create the count state.
  const [count, setCount] = useState(0);
  console.log(trie.getPrefix('bat'));

  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div css={{ backgroundColor: 'darkorchid' }}>
      <header>
        <img />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </p>
      </header>
    </div>
  );
};

export default App;
