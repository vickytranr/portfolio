function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  function changeImage() {
    document.getElementById("dog").src = "dog.png";
    document.getElementById("dog").src = "dog_kiss.png";
    
    setTimeout(changeImageBack,600)
    
}

function changeImageBack() {
    document.getElementById("dog").src = "dog_kiss.png";
    document.getElementById("dog").src = "dog.png";
    
}