import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salade', type: 'salade' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Fromage', type: 'fromage' },
    { label: 'Steak', type: 'steak' },
];

const buildControls = (props) => (
  <MuiThemeProvider>
    <div className={classes.BuildControls}>
        <p>Prix actuel: <strong>{props.price.toFixed(2)} €</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>COMMANDER</button>
    </div>
    </MuiThemeProvider>
);

export default buildControls;