import React from "react";
import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";

export default class BurgerBuilder extends React.Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}
