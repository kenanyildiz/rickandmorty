import React from 'react';
import {notFoundGif} from './notFoundGif';
import Character from "../Character";

const NotFound = () => {
  const [{
    images: {
      original: {
        url = ''
      } = {}
    } = {}
  }] = notFoundGif

  return <Character isNotFound data={{ image: url }} />
};

export default NotFound
