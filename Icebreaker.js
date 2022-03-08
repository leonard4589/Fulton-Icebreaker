b=document.getElementById("backbutton");
b.addEventListener("click", function(){
  alert("Great now make that other page");
})

function populatePage (i){

  var nameDiv = document.getElementById("studentname");
  nameDiv.innerHTML = students[i].name;

  var gradeDiv = document.getElementById("studentgrade");
  gradeDiv.innerHTML = "Grade: " + students[i].grade;

  var ageDiv = document.getElementById("studentage");
  ageDiv.innerHTML = "Age: " + students[i].age;

  var bioDiv = document.getElementById("studentbio");
  bioDiv.innerHTML = students[i].bio;
}
populatePage(0)
