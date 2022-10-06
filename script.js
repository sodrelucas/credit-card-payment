document.querySelector(".cardNumberBox").oninput = () => {
  document.querySelector(".cardNumber").innerText =
    document.querySelector(".cardNumberBox").value;
};

document.querySelector(".cardName").oninput = () => {
  document.querySelector(".cardHolderName").innerText =
    document.querySelector(".cardName").value;
};

document.querySelector(".monthInput").oninput = () => {
  document.querySelector(".expMonth").innerText =
    document.querySelector(".monthInput").value;
};

document.querySelector(".yearInput").oninput = () => {
  document.querySelector(".expYear").innerText =
    document.querySelector(".yearInput").value;
};

document.querySelector(".cvvInput").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cvvInput").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvvInput").oninput = () => {
  document.querySelector(".cvvBox").innerText =
    document.querySelector(".cvvInput").value;
};
