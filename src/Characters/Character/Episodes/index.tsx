import React from 'react';
import {ITheme} from "../../../Interfaces";

interface IEpisodes {
  episode: string[],
  status: string
}

const Index = (props: IEpisodes) => {
  const { episode, status } = props

  const theme: ITheme = {
    'Alive': 'bg-success',
    'Dead': 'bg-danger',
    'unknown': 'bg-secondary',
  }

  const badgeClass: string = (theme as any)[status] || 'bg-dark';

  return (
    episode.length
      ? <div className="card-text">
        <>
          <h5 className="card-title">Featured on Episodes</h5>
          {
            episode.map((episodeItem, episodeIndex) => {
              return <span key={episodeIndex} className={`badge ms-1 me-1 ${badgeClass}`}>
                {episodeItem.match(/\d+/)}
              </span>
            })
          }
        </>
      </div>
      : null
  );
};

export default Index
