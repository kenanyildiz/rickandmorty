import React, {useEffect} from 'react';
import { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { IInfo } from "../Interfaces";

interface IProps {
  info: IInfo;
  active: number,
  clearCharacters(): void;
  onCharactersFetchRequested(page: number): void;
}

const Paging = (props: IProps) => {
  const [active, setActive] = useState<number>(props.active);

  useEffect(() => {
    setActive(props.active)
  }, [props.active])

  const onCharactersFetchRequested = (page: number) => {
    setActive(page)
    props.clearCharacters();
    props.onCharactersFetchRequested(page);
  }

  const getPaginationTmp = (pages: number) => {
    const items = [];
    for (let number = 1; number <= pages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          activeLabel=''
          className='d-inline-block'
          title={String(number)}
          active={number === active}
          onClick={() => onCharactersFetchRequested(number)}>
          {number}
        </Pagination.Item>
      )
    }

    return items
  }

  const {
    info: {
      pages = 0
    } = {}
  } = props

  return <Pagination className='d-block' size='sm'>{getPaginationTmp(pages)}</Pagination>
}



export default Paging
