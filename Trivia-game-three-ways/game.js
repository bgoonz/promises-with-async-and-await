import { getClueFromCallback } from "./callbackVersion.js";

document.addEventListener("DOMContentLoaded", () => {
  const responseButton = document.getElementById("check-response");
  const playerInput = document.getElementById("player-response");
  const cbBtn = document.getElementById("use-callback");
  const idArr = [
    "question",
    "answer",
    "value",
    "category-title",
    "invalidCount",
  ];
  const checkValid = document.getElementById("invalid-count");

  const setInnerHTML = (id, object) => {
    let element = document.getElementById(id);

    if (object[id] !== null) {
      if (id === "invalidCount") {
        object.invalidCount > 0 && object.invalidCount !== undefined
          ? (checkValid.innerHTML = "invalid")
          : (checkValid.innerHTML = "valid");
      } else if (id === "category-title") {
        element.innerHTML = object.category.title;
      } else {
        element.innerHTML = object[id];
      }
    }
  };

  cbBtn.addEventListener("click", (event) => {
    getClueFromCallback((err, clueObj) => {
      console.log(clueObj);
      err !== null
        ? console.error(err)
        : idArr.forEach((ele) => {
            setInnerHTML(ele, clueObj);
          });
    });

    responseButton.addEventListener("click", (event) => {
      if (playerInput === clueObj.answer) {
      }
    });
  });
});
