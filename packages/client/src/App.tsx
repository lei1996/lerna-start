import React from 'react';
import { css } from 'linaria';
import socket from './socket';

socket.on('message', (message) => {
  console.log(message, 'aaa -');
});

const styles = {
  title: css`
    color: blue;
  `,
};

function App() {
  return (
    <div>
      <h1 className={styles.title}>App</h1>
    </div>
  );
}

export default App;
