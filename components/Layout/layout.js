import { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import MainHeader from "./main-header";
import TopHeader from "./top-header";

function Layout (props) {
    return (
        <Fragment>
            <TopHeader />
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;