import "bootstrap/dist/js/bootstrap.bundle";
import {multiply} from "./utils/multiply";
import {add} from "./utils/add";

import "../styles/style.scss";


const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this.innerHTML);
  console.log(multiply(56, 5));
  console.log(add(56, 5));
});
