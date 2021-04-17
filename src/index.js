import React from 'react';
import ReactDOM from 'react-dom';
// App.jsxをインポートしておく。
import App from "./App";

// index.htmlの<div id="root"></div>にapp.jsxに書いたコンポーネント<App />を表示させる。
ReactDOM.render(
    <App />,
  document.getElementById('root')
);