import React from 'react';
import {errorGif} from './errorGif';
import Character from "../Character";

const Error = () => {
  const [{
    images: {
      original: {
        url = ''
      } = {}
    } = {}
  }] = errorGif

  return <Character hasError data={{ image: url }} />
};

export default Error
