let body = document.querySelector("body");

let display = document.createElement("div");
let wrapper = document.createElement("div");
body.appendChild(display);
let currentPage = 0;
let changeData = (e) => {
    switch (e.target.id) {
        case "previous": {
            currentPage = currentPage > 0 ? currentPage - 1 : currentPage;
            break;
        }
        case "first": {
            currentPage = 0;
            break;
        }
        case "next": {
            currentPage = jsonData.length - 1 > currentPage ? currentPage + 1 : currentPage;
            break;
        }
        case "last": {
            currentPage = jsonData.length - 1;
            break;
        }
        default: {
            currentPage = Number(e.target.id.split("_")[1]) - 1;
        }
    }

    let displayName = document.createElement("div");
    displayName.innerHTML = `<div>name: ${jsonData[currentPage].name} <div><div> page: ${currentPage + 1}</div>`;
    display.innerHTML = "";
    display.appendChild(displayName);
    console.log(display);
};
wrapper.classList.add("flex");
let previous = document.createElement("div");
previous.textContent = "Previous";
previous.id = "previous";
previous.classList.add("pagination_button");
previous.addEventListener("click", changeData);

let first = document.createElement("div");
first.textContent = "First";
first.id = "first";
first.classList.add("pagination_button");
first.addEventListener("click", changeData);

let next = document.createElement("div");
next.textContent = "Next";
next.classList.add("pagination_button");
next.id = "next";
next.addEventListener("click", changeData);

let last = document.createElement("div");
last.textContent = "Last";
last.classList.add("pagination_button");
last.id = "last";
last.addEventListener("click", changeData);

wrapper.appendChild(first);
wrapper.appendChild(previous);

jsonData.forEach((value, idx) => {
    let page = document.createElement("div");
    page.textContent = idx + 1;
    page.classList.add("pagination_button");
    page.id = "page_" + (idx + 1);
    wrapper.appendChild(page);
    page.addEventListener("click", changeData);
});

wrapper.appendChild(next);
wrapper.appendChild(last);
console.log("wrapper", wrapper);

let displayName = document.createElement("div");
displayName.innerHTML = `<div>name: ${jsonData[0].name} <div><div> page: 1</div>`;
display.appendChild(displayName);
let pagination = document.createElement("div");
pagination.appendChild(wrapper);

body.appendChild(pagination);
