import React from 'react';
import { renderToString } from 'react-dom/server';
import html from './html';
import App from './components/App';

export default function render(req,res) {
  const appString = renderToString(<App />);
  res.send(html({
    body: appString,
    title: 'Render From Server'
  }));
}