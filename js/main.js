import _ from "lodash"
const collapsibles = document.querySelectorAll(".collapsible");
_.forEach(collapsibles, (item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);