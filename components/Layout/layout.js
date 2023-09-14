import { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import MainHeader from "./main-header";
import TopHeader from "./top-header";

function Layout (props) {
    return (
        <Fragment>
            <title>Skill-Arbitrage : Home</title>
            <link rel="icon" type="image/png" sizes="16x16" href="https://skillarbitra.ge//assets/frontend/images/favicon.png"></link>
            <TopHeader />
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;