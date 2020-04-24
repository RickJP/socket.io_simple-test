import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:4001';

function App() {
  const [ res, setRes ] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromAPI', data => {
      setRes(data);
      console.log(data);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={res}>{res}</time>
    </p>
  )
};

export default App;