import React, { FC } from "react";
import Episodes from "./Episodes/index";
import TextElement from "./TextElement/index";
import Title from "./Title/index";
import { ICharacter } from "../../Interfaces";

interface ICharacterProps {
  data: ICharacter;
  hasError?: boolean;
  isLoading?: boolean;
  isNotFound?: boolean;
}

const Character: FC<ICharacterProps> = (props) => {
  const {
    hasError = false,
    isLoading = false,
    isNotFound = false,
    data: {
      image = "",
      name = "",
      species = "",
      status = "",
      origin: { name: originName = "" } = {},
      location: { name: locationName = "" } = {},
      episode = [],
    } = {},
  } = props;

  return (
    <div className="col">
      <div className="card h-100 text-white bg-dark mb-3">
        <img
          className="card-img-top"
          alt={image}
          src={image}
          width="300"
          height="300"
          style={{ aspectRatio: 'attr(width) / attr(height)' }}
        />
        {!hasError && !isNotFound && !isLoading ? (
          <div className="card-body">
            <Title name={name} species={species} />
            <div className="card-text">
              <TextElement name={originName} />
              <TextElement name={locationName} extraClass="mb-1" />
            </div>
            <Episodes episode={episode} status={status} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Character;
