import React, { FC } from "react";
import Character from "./Character/index";
import { ICharacter } from "../Interfaces";

interface ICharacters {
  characters: ICharacter[];
}

const Characters: FC<ICharacters> = (props) => {
  const { characters = [] } = props;

  return (
    <div
      className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"
      data-testid="characters"
    >
      {characters.map((character: ICharacter) => (
        <Character data={character} key={character.id} />
      ))}
    </div>
  );
};

export default Characters;
