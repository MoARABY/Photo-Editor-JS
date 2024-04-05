let saturate = document.querySelector("#saturate");
let contrast = document.querySelector("#contrast");
let brightness = document.querySelector("#brightness");
let sepia = document.querySelector("#sepia");
let grayScale = document.querySelector("#grayScale");
let blurr = document.querySelector("#blur");
let hue = document.querySelector("#hue");
//
let uploadBTN = document.querySelector("#upload");
let downloadBTN = document.querySelector("#download");
let resetBTN = document.querySelector("#reset");
let img = document.querySelector("#img");
let imgBox = document.querySelector(".img-box");
//
let canvas = document.getElementById("canvas");
let CTX = canvas.getContext("2d");

if (!img.getAttribute("src")) {
  console.log("ff");
  resetBTN.style.display = "none";
  downloadBTN.style.display = "none";
} else {
  resetBTN.style.display = "block";
  downloadBTN.style.display = "block";
}
//
const valueReset = () => {
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayScale.value = "0";
  blurr.value = "0";
  hue.value = "0";
};
uploadBTN.onchange = () => {
  valueReset();
  let file = new FileReader();
  file.readAsDataURL(uploadBTN.files[0]);
  file.onload = () => {
    img.setAttribute("src", file.result);
  };
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    CTX.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
  resetBTN.style.display = "block";
  downloadBTN.style.display = "block";
};

resetBTN.onclick = () => {
  valueReset();
};

downloadBTN.onclick = () => {
  //   if (img.getAttribute("src")) {
  downloadBTN.href = canvas.toDataURL();
  //   }
};
// saturate.addEventListener("input", () => {
//   img.style.filter = `saturate(${saturate.value}%)`;
// });
// contrast.addEventListener("input", () => {
//   img.style.filter = `contrast(${contrast.value}%)`;
// });
// hue.addEventListener("input", () => {
//   img.style.filter = `hue(${hue.value}%)`;
// });
// blur.addEventListener("input", () => {
//   img.style.filter = `blur(${blur.value}%)`;
// });
// sepia.addEventListener("input", () => {
//   img.style.filter = `sepia(${sepia.value}%)`;
// });
// brightness.addEventListener("input", () => {
//   img.style.filter = `brightness(${brightness.value}%)`;
// });
// grayScale.addEventListener("input", () => {
//   img.style.filter = `grayScale(${grayScale.value}%)`;
// });

let filters = document.querySelectorAll("ul li input");
filters.forEach((e) => {
  e.addEventListener("input", () => {
    CTX.filter = `
    grayscale(${grayScale.value})
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    blur(${blurr.value}px)
    hue-rotate(${hue.value}deg)
    contrast(${contrast.value}%)
    saturate(${saturate.value}%)
    `;
    CTX.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});
