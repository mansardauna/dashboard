function myFunction() {
  var x = document.getElementById("sidebar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}


function myProfile() {
  var x = document.getElementById("profile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeSlide() {
  var x = document.getElementById("sidebar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


const myTimeout = setTimeout(loadPage, 5000);

function loadPage() {
  var l = document.getElementById("preview");
  if (l.style.display === "block") {
    l.style.display = "block";
  } else {
    l.style.display = "none";
  }
}
const myloaded = setTimeout(loaded, 5000);


function loaded() {
  var r = document.getElementById("page");
  if (r.style.display === "none") {
    r.style.display = "block";
  } else {
    r.style.display = "block";
  }
}


