import React from "react";
import { screen, render } from "@testing-library/react";
import Characters from "./index";

it("renders characters", async () => {
  const fakeCharacters = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: ["https://rickandmortyapi.com/api/episode/1"],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
  ];

  render(<Characters characters={fakeCharacters} />);

  const characters = await screen.findByTestId("characters");

  expect(characters.classList).toContain("row");
});
