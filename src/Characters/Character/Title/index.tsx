import React from "react";

interface ITitleProps {
  name: string;
  species: string;
}

const Index = ({ name = "", species = "" }: ITitleProps) => {
  if (!name || !species) {
    return null
  }
  return <h5 className="card-title">{name} - {species}</h5>
};

export default Index;
