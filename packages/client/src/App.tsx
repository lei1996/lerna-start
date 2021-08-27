import React from 'react';
import { css } from 'linaria';

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
