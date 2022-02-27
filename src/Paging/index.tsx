import React, { FC, useEffect } from "react";
import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { IInfo } from "../Interfaces";

interface IProps {
  info: IInfo;
  active: number;
  clearCharacters(): void;
  onCharactersFetchRequested(page: number): void;
}

const Paging: FC<IProps> = (props) => {
  const { info: { pages = 0 } = {} } = props;

  const [active, setActive] = useState<number>(props.active);

  useEffect(() => setActive(props.active), [props.active]);

  function onCharactersFetchRequested(page: number): void {
    setActive(page);
    props.clearCharacters();
    props.onCharactersFetchRequested(page);
  }

  function getPaginationTmp(pages: number) {
    const items = [];
    for (let number = 1; number <= pages; number++) {
      items.push(
        <Pagination.Item
          active={number === active}
          activeLabel=""
          className="d-inline-block"
          key={number}
          onClick={() => onCharactersFetchRequested(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return items;
  }

  return (
    <Pagination className="d-block" size="sm">
      {getPaginationTmp(pages)}
    </Pagination>
  );
};

export default Paging;
