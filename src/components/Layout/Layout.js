import React from "react";
import Aux from "../../HOC/Aux";
import "../Layout/Layout.css";

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="content">{props.children}</main>
  </Aux>
);

export default layout;
