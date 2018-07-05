import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Assembleur de burger</NavigationItem>
        <NavigationItem link="/">Règlement</NavigationItem>
    </ul>
);

export default navigationItems;