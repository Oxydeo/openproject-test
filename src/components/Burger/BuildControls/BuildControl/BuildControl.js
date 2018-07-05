import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import classes from './BuildControl.css';
import { MuiThemeProvider } from 'material-ui/styles';

const buildControl = (props) => (
  <MuiThemeProvider>
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <FloatingActionButton 
            mini={true}
            secondary={true}
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}><ContentRemove /></FloatingActionButton>
        <FloatingActionButton
            mini={true} 
            className={classes.More} 
            onClick={props.added}><ContentAdd /></FloatingActionButton>
    </div>
  </MuiThemeProvider>
);

export default buildControl;