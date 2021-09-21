const voteUp = document.querySelectorAll(".voteup");
const voteDown = document.querySelectorAll(".votedown");
const reportIcon = document.querySelectorAll(".report");


voteUp.forEach((item) => {
  const el = createElem(item);
  let counter = 0;
  
  item.addEventListener("click", () => {
    item.style.color = "green";
    el.innerText = `${++counter}`;
  });
});

voteDown.forEach((item) => {
  const el = createElem(item);
  let counter = 0;

  item.addEventListener("click", () => {
    item.style.color = "red";
    el.innerText = `${++counter}`;
  });
});

reportIcon.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Report this comment!");
  });
});

function createElem (item) {
  const el = document.createElement("div");
  el.classList.add("result");
  const newContent = document.createTextNode("");
  el.appendChild(newContent);
  item.appendChild(el);
  return el;
}