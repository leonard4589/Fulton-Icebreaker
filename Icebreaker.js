b=document.getElementById("backbutton");
b.addEventListener("click", function(){
  alert("Great now make that other page");
})

var students = [
{
  id: 1,
  name: 'Holden "Holdie" Appell',
  grade: 9,
  age: 95,
  bio: "I like breathing."
},
{
  id: 2,
  name: 'Ruthie "Ru" Parham',
  grade: 10,
  age: 16,
  bio: "I like food."
},
]
i=0
var nameDiv = document.getElementById("studentname");
nameDiv.innerHTML = students[i].name;

var gradeDiv = document.getElementById("studentgrade");
gradeDiv.innerHTML = "Grade: " + students[i].grade;

var ageDiv = document.getElementById("studentage");
ageDiv.innerHTML = "Age: " + students[i].age;

var bioDiv = document.getElementById("studentbio");
bioDiv.innerHTML = students[i].bio;
