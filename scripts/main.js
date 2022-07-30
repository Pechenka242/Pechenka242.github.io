var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/heggg.jpg') {
      myImage.setAttribute ('src','images/149279909715037159.jpg');
    } else {
      myImage.setAttribute ('src','images/heggg.jpg');
    }
}

// Personalized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Что мы продаем для ежиков, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Что мы продаем для ежиков, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}