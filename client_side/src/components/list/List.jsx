import './list.scss';

import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';

const List = ({ list }) => {

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth/230);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <>
      <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
          <i className="fas fa-angle-left icona left" onClick={() => handleClick("left")} style={{ display: !isMoved && 'none' }} ></i>
          <div className="container" ref={listRef} >
            {list.content.map((item, i) => (
              <ListItem index={i} item={item} />
            ))}
          </div>
          <i className="fas fa-angle-right icona right" onClick={() => handleClick("right")}></i>
        </div>
      </div>
    </>
  )
}

export default List
