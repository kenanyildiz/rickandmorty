import React, { FC } from "react";

interface ITextElementProps {
  name: string;
  extraClass?: string;
}

const Index: FC<ITextElementProps> = (props) => {
  const { name, extraClass = "" } = props;

  return name ? (
    <span className={`link-light d-block ${extraClass}`}>{name}</span>
  ) : null;
};

export default Index;
