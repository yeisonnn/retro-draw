import React from 'react';
import { buildCellList } from '../utils';

const ActionPanel = ({ activeColor, cellList, setCellList }) => {
  return (
    <div className="action-panel">
      <button
        onClick={() => {
          setCellList(buildCellList());
        }}
      >
        clear all
      </button>

      <button
        onClick={() => {
          const newCellList = buildCellList();
          newCellList.forEach((cell) => (cell.color = activeColor));
          setCellList(newCellList);
        }}
      >
        fill all
      </button>

      <button
        onClick={() => {
          const newCellList = buildCellList();
          cellList.forEach((cell, idx) => {
            if (cell.color === null) {
              newCellList[idx].color = activeColor;
            } else {
              newCellList[idx].color = cell.color;
            }
          });

          setCellList(newCellList);
        }}
      >
        fill empty
      </button>
    </div>
  );
};

export default ActionPanel;
