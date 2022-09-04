import React, { useMemo } from "react";
import { Pagination } from "react-bootstrap";
import { IInfo } from "../Interfaces";

interface IProps {
  info: IInfo;
  page: number;
  setPage(page: number): void;
}

const Paging = (props: IProps) => {
  const { info: { pages = 0 } = {}, page, setPage } = props

  const data = useMemo(() => Array.from({ length: pages }, (_v, i) => i+1), [pages])

  return (
    <Pagination className="d-block" size="sm">
      {
        data.map((number) => {
          return <Pagination.Item
            active={number === page}
            activeLabel=""
            className="d-inline-block"
            key={number}
            onClick={() => setPage(number)}
          >
            {number}
          </Pagination.Item>
        })
      }
    </Pagination>
  );
};

export default Paging;
