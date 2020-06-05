function topPage() {
  
  const selectLeft = document.getElementById("rank");
  const selectRight = document.getElementById("score");
  const boxA = document.getElementsByClassName("scores__date1");
  const boxB = document.getElementsByClassName("scores__date2");
  const forEach = Array.prototype.forEach;
  const changeBox = function (elem) {
                    elem.style.display="none";
                    selectLeft.style.opacity = 1;
                    selectLeft.style.cursor = 'pointer';
                    selectRight.style.opacity = 0.5;
                  }
  const changeBox2 = function (elem) {
                    elem.style.display="none";
                    selectRight.style.opacity = 1;
                    selectRight.style.cursor = 'pointer';
                    selectLeft.style.opacity = 0.5;
                  }
 
selectLeft.addEventListener("mouseover",  ()=> {
  forEach.call(boxA, function (elem) {
    elem.style.display = "block";
  });
  forEach.call(boxB, changeBox);
});

selectRight.addEventListener("mouseover",  ()=> {
  forEach.call(boxB, function (elem) {
    elem.style.display = "block";
  });
    forEach.call(boxA, changeBox2);
});
}
window.onload = topPage