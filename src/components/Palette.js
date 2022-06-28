import React from 'react';
import Cell from './Cell';
import { COLORS } from '../utils';

const Palette = (props) => {
  const activeColor = props.activeColor;
  const setActiveColor = props.setActiveColor;

  return (
    <div className="palette">
      {COLORS.map((color) => (
        <Cell
          key={`pallete-${color}`}
          color={color}
          handleClick={() => {
            setActiveColor(color);
          }}
          isActive={color === activeColor}
        />
      ))}
    </div>
  );
};

export default Palette;
