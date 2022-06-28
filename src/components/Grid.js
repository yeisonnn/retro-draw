import React from 'react';
import Cell from './Cell';

const Grid = ({ activeColor, cellList, setCellList }) => {
  const cellListCopy = [...cellList];
  return (
    <div className="grid">
      {cellList.map((color, idx) => (
        <Cell
          key={`grid-${idx}`}
          color={color.color}
          handleClick={() => {
            cellListCopy[idx].color = activeColor;
            setCellList(cellListCopy);
          }}
        />
      ))}
    </div>
  );
};

export default Grid;
