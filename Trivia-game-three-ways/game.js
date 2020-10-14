import { getClueFromCallback } from "./callbackVersion.js";

function setInnerHTML(id, object) {
  let element = document.getElementById(id);
  element.innerHTML = object[id];
}
const cbBtn = document.getElementById("use-callback");
cbBtn.addEventListener("click", (event) => {
  getClueFromCallback((err, clueObj) => {
    console.log(clueObj);
    if (err !== null) {
      console.error(err);
    } else {
      let idArr = ["question", "answer", "value", "catagoryTitle"];
      idArr.forEach((ele) => {
        setInnerHTML(ele, clueObj);
      });
    }
  });
});
