import React from "react";
import { ITheme } from "../../../Interfaces";

interface IEpisodes {
  episode: string[];
  status: string;
}

const theme: ITheme = {
  Alive: "bg-success",
  Dead: "bg-danger",
  unknown: "bg-secondary",
};

const Index = ({ episode, status }: IEpisodes) => {
  const badgeClass: string = (theme as any)[status] || "bg-dark";

  if (!episode.length) {
    return null
  }

  return  (
    <div className="card-text">
      <>
        <h5 className="card-title">Featured on Episodes</h5>
        {episode.map((episodeItem, episodeIndex) => {
          return (
            <span
              key={episodeIndex}
              className={`badge ms-1 me-1 ${badgeClass}`}
            >
              {episodeItem.match(/\d+/)}
            </span>
          );
        })}
      </>
    </div>
  )
};

export default Index;
