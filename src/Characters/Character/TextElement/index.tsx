import React from 'react';

interface ITextElementProps {
  name: string,
  extraClass?: string
}

const Index = (props: ITextElementProps) => {
  const { name, extraClass = '' } = props

  return (
    name
      ? <span className={`link-light d-block ${extraClass}`}>{name}</span>
      : null
  );
};

export default Index
