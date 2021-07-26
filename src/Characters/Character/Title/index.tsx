import React from 'react';

interface ITitleProps {
  name: string,
  species: string
}

const Index = (props: ITitleProps) => {
  const { name = '', species = '' } = props

  return (
    name && species
      ? <h5 className="card-title">{name} - {species}</h5>
      : null
  );
};

export default Index
