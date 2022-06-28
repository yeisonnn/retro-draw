import React, { useState } from 'react';
import Header from './Header';
import Palette from './Palette';
import Grid from './Grid';
import ActionPanel from './ActionPanel';
import { COLORS, buildCellList } from '../utils';

const getCellListFromLocal = () => {
  let cellList = JSON.parse(localStorage.getItem('cellList'));

  if (cellList) {
    return cellList;
  }

  return buildCellList();
};

const setCellListOnLocal = (cellList) => {
  localStorage.setItem('cellList', JSON.stringify(cellList));
};

const App = () => {
  const [activeColor, setActiveColor] = useState(COLORS[0]);

  const [cellList, setCellList] = useState(buildCellList());

  return (
    <div className="app">
      <Header />
      <Palette activeColor={activeColor} setActiveColor={setActiveColor} />
      <Grid
        cellList={cellList}
        setCellList={setCellList}
        activeColor={activeColor}
      />
      <ActionPanel
        cellList={cellList}
        setCellList={setCellList}
        activeColor={activeColor}
      />
    </div>
  );
};

export default App;
