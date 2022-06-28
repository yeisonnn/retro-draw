import React from 'react';

const Cell = (props) => {
  const color = props.color;

  const isActive = props.isActive;
  const handleClick = props.handleClick;

  const cellClass = isActive ? 'cell active' : 'cell';

  return (
    <div
      className={cellClass}
      onClick={handleClick}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Cell;
