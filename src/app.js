/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const subject = [
    "My cat",
    "My coworker",
    "The delivery guy",
    "My friend",
    "The teacher",
    "My sister"
  ];

  const place = [
    "in the garden",
    "at the office",
    "in the classroom",
    "on the road",
    "at the store",
    "in the living room"
  ];

  const time = [
    "this afternoon",
    "earlier today",
    "last week",
    "just before lunch",
    "two days ago",
    "right after the meeting"
  ];

  const reason = [
    "broke the vase and I had to clean it up.",
    "lost my files and I needed to find them.",
    "forgot my keys and I was locked out.",
    "spilled coffee on my laptop.",
    "came late because of traffic.",
    "needed help with my project."
  ];
  function getElememt(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function generateExcuse() {
    const excuse = `${getElememt(subject)} ${getElememt(place)} ${getElememt(
      time
    )} ${getElememt(reason)}`;
    document.getElementById("result").innerHTML = excuse;
  }
  const button = document.getElementById("excuseButton");
  button.addEventListener("click", generateExcuse);
};
