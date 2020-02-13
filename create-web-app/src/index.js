import { html } from "./app";

const root = document.getElementById("root");

const ouputTitle = dom => {
  root.innerHTML = dom;
};

ouputTitle(html);
