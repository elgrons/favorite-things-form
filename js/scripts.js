//User Logic

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault()
    const oneFavorite = document.getElementById("favoriteThingOne").value;
    const twoFavorite = document.getElementById("favoriteThingTwo").value;
    const threeFavorite = document.getElementById("favoriteThingThree").value;
    const tripleFaveArray = ["oneFavorite", "twoFavorite", "threeFavorite"];

  const seeResults = document.createElement("p");
  seeResults.append("Your favorite things are:");
  seeResults.append(tripleFaveArray);
  document.querySelector("body").append(seeResults)
};
};