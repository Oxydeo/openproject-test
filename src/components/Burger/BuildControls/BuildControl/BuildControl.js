import React from 'react';
import classes from './BuildControl.css';

const buildControls = (props) => (
  <div className={classes.buildControl}>
    <div className={classes.Label}>{props.label}</div>
    <div className={classes.Buttons}>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
    </div>
  </div>
);

export default buildControls;