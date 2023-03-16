/* eslint-disable no-console */
import Giphy from "./giphy-searcher";
import "./css/styles.css";

window.addEventListener("load", runapp);
let newGif;

function runapp() {
  const gif = Giphy.trending();

  gif.then(
    function (response) {
      const result = JSON.parse(response);

      console.log(result);
      timeCapsule(result);
    },
    function (error) {
      console.log(`There was an error processing your request: ${error}`);
    }
  );
}

function timeCapsule(result) {
  newGif = result;
  const currentTrend = document.getElementById("gifOne");
  console.log(newGif.data.images.original.url);
  currentTrend.src = newGif.data.images.original.url;
}

//https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVlNWJjYWI5MDYzYjUwNTE2MGUzMjk5MGNmNTVkNzQ0NDAwMGNmYSZjdD1n/3oEjI8R05ekZC9I3Kw/giphy.gif
