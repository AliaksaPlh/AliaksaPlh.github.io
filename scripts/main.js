var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/porche2.jpg') {
      myImage.setAttribute ('src','images/porche.jpg');
    } else {
      myImage.setAttribute ('src','images/porche2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, Welcome to Porche, ' + myName;
  } //просим пользователя ввести его имя

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Porche, ' + storedName;
  } //проверить, существуют ли данные в пункте name

  myButton.onclick = function() {
    setUserName();
  } // позволяет пользователю установить новое имя, всякий раз, когда он захочет, нажатием кнопки: