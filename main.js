var btn = document.getElementById("btn");
var toastDiv = document.getElementById("toast")
let closeIcon = document.createElement("i");

btn.addEventListener("click", function (event) {

    let containDiv = document.createElement("div");
    containDiv.setAttribute("class", "toast");
    toastDiv.appendChild(containDiv);

    let headDiv = document.createElement("div");
    headDiv.setAttribute("class", "headdiv");
    containDiv.appendChild(headDiv);

    let bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class", "bodydiv");
    containDiv.appendChild(bodyDiv);

    let footDiv = document.createElement("div");
    footDiv.setAttribute("class", "footdiv");
    containDiv.appendChild(footDiv);

    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "innerdiv");
    headDiv.appendChild(innerDiv);

    let paragraph = document.createElement("h3");
    bodyDiv.appendChild(paragraph);
    paragraph.setAttribute("class", "p-mge");
    paragraph.innerText = "This is a New Message";

    let iconDiv = document.createElement("i");
    iconDiv.setAttribute("class", "fa-question");
    bodyDiv.appendChild(iconDiv);

    let headingDiv = document.createElement("h1");
    headingDiv.setAttribute("class", "headingDiv");
    headingDiv.innerText = "Hiii...."
    footDiv.appendChild(headingDiv);

    let para = document.createElement("p");
    innerDiv.appendChild(para);
    para.setAttribute("class", "p-tag");
    para.innerText = "JavaScript";

    // let closeIcon = document.createElement("i");
    innerDiv.appendChild(closeIcon);
    closeIcon.setAttribute("class", "fa-solid fa-xmark");

    
});

closeIcon.addEventListener("click", function (e) {
    let close = e.target.parentNode.parentNode.parentNode;
    console.log(close);
    close.remove();
});


