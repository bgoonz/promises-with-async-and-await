import { getClueFromCallback } from "./callbackVersion.js";
import { getClue as getClueFromPromise } from "./promise-version.js";
import { getClue as getClueFromAsync } from "./async-await-version.js";

document.addEventListener("DOMContentLoaded", () => {
  const responseButton = document.getElementById("check-response");
  const playerInput = document.getElementById("player-response");
  const cbBtn = document.getElementById("use-callback");
  const promBtn = document.getElementById("use-promise");
  const asyncBtn = document.getElementById("use-async-await");
  const answerDiv = document.getElementById("answer");
  const valueDiv = document.getElementById("value");
  const scoreDiv = document.getElementById("score");
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

  //--------------------------with async/await--------------------------------------

  asyncBtn.addEventListener("click", async () => {
    try {
      const get = await getClueFromAsync();
      idArr.forEach((ele) => {
        setInnerHTML(ele, get);
      });
    } catch (err) {
      console.error(err);
    }
  });

  //--------------------------with promise--------------------------------------

  promBtn.addEventListener("click", () => {
    const get = getClueFromPromise();
    get.then((res) => {
      idArr.forEach((ele) => {
        setInnerHTML(ele, res);
      });
    });
  });

  //--------------------------with callback--------------------------------------

  cbBtn.addEventListener("click", () => {
    getClueFromCallback((err, clueObj) => {
      err !== null
        ? console.error(err)
        : idArr.forEach((ele) => {
            setInnerHTML(ele, clueObj);
          });
    });
  });

  //--------------------------user response--------------------------------------

  responseButton.addEventListener("click", () => {
    if (playerInput.value === answerDiv.value) {
      scoreDiv.innerHTML += valueDiv.value;
    }
  });
});

//-------------------------------------------------------------------------------
