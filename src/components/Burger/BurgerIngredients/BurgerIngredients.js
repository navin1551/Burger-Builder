import React from "react";
import PropTypes from "prop-types";
import "../BurgerIngredients/BurgerIngredients.css";

export default class BurgerIngredients extends React.Component {
  render() {
    let ingredients = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredients = <div className="BreadBottom"></div>;
        break;
      case "bread-top":
        ingredients = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        ingredients = <div className="Meat"></div>;
        break;
      case "cheese":
        ingredients = <div className="Cheese"></div>;
        break;
      case "bacon":
        ingredients = <div className="Bacon"></div>;
        break;
      case "salad":
        ingredients = <div className="Salad"></div>;
        break;
      default:
        ingredients = null;
    }
    return ingredients;
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
};
