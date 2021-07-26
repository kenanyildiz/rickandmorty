import React from 'react';
import {loadingGif} from './loadingGif';
import Character from "../Character";

const Error = () => {
  const [{
    images: {
      original: {
        url = ''
      } = {}
    } = {}
  }] = loadingGif

  return <Character isLoading data={{ image: url }} />
};

export default Error
