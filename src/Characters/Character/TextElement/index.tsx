import React from "react";

interface ITextElementProps {
  name: string;
  extraClass?: string;
}

const Index = ({ name, extraClass = "" }: ITextElementProps) => {
  if (!name) {
    return null
  }
  return <span className={`link-light d-block ${extraClass}`}>{name}</span>
};

export default Index;
