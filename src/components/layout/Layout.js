import { Fragment } from 'react';
import MainNavigation from './MainNavigation';

import classes from './Layout.module.css';

const Layout = props => {
    return  (
        <Fragment>
            <MainNavigation >
                <main className={classes.main}>{props.children}</main>
            </MainNavigation>
            {props.children}
        </Fragment>
    );
};

export default Layout;