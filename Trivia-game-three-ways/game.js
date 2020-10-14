import { getClueFromCallback } from "./callbackVersion.js";

document.addEventListener("DOMContentLoaded", () => {
  const responseButton = document.getElementById("check-response");
  const playerInput = document.getElementById("player-response");
  const cbBtn = document.getElementById("use-callback");
  const idArr = ["question", "answer", "value", "category-title"];
  const ele = document.getElementById("invalid-count");

  const setInnerHTML = (id, object) => {
    if (object[id] !== null) {
      if (id !== "catagory-title") {
        let element = document.getElementById(id);
        element.innerHTML = object[id];
      }
      if (id === "category-title") {
        let element = document.getElementById(id);
        element.innerHTML = object.category.title;
      }
    }
  };

  const setInvalid = (object) => {
    if (object.invalidCount > 0 && object.invalidCount !== undefined) {
      ele.innerHTML = "invalid";
    } else {
      ele.innerHTML = "valid";
    }
  };

  cbBtn.addEventListener("click", (event) => {
    getClueFromCallback((err, clueObj) => {
      console.log(clueObj);
      if (err !== null) {
        console.error(err);
      } else {
        idArr.forEach((ele) => {
          setInnerHTML(ele, clueObj);
        });
        setInvalid(clueObj);
      }
      responseButton.addEventListener("click", (event) => {
        if (playerInput === clueObj.answer) {
        }
      });
    });
  });
});
