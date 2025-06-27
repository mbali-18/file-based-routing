import { Fragment } from "react";
import Mainheader from "./main-header";

function Layout(props) {
  return (
    <Fragment>
      <Mainheader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
