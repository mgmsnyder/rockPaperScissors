const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const bluey = document.createElement("h3");
bluey.textContent = "I'm a blue h3";
bluey.style.color = "blue";
container.appendChild(bluey);

const divey = document.createElement("div");
divey.style.borderColor = "black";
divey.style.backgroundColor = "pink";

const header1 = document.createElement("h1");
divey.appendChild(header1);
header1.textContent = "I'm in a div";
const para2 = document.createElement("p");
divey.appendChild(para2);
para2.textContent = "ME TOO!";
container.appendChild(divey);
