import "../components/food-list.js";
import "../components/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const foodListElement = document.querySelector('food-list');

  const onButtonSearchClicked = () => {
    DataSource.searchFood(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = results => {
    foodListElement.foods = results;
  };

  const fallbackResult = message =>  {
    foodListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;