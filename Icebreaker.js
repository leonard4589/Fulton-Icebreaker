b=document.getElementById("backbutton");
b.addEventListener("click", function(){
  alert("Great now make that other page");
})

function getStudentByID(id){
  for (let i=0;i<students.length; i++){}
}


function populatePage (i){

  var nameDiv = document.getElementById("studentname");
  nameDiv.innerHTML = students[i].name;

  var nicknameDiv = document.getElementById("nickname");
  nameDiv.innerHTML = students[i].nickname;

  var gradeDiv = document.getElementById("studentgrade");
  gradeDiv.innerHTML = "Grade: " + students[i].grade;

  var ageDiv = document.getElementById("studentage");
  ageDiv.innerHTML = "Age: " + students[i].age;

  var birthdayDiv = document.getElementById("birthday");
  nameDiv.innerHTML = students[i].birthday;

  var bioDiv = document.getElementById("studentbio");
  bioDiv.innerHTML = students[i].bio;
}
populatePage(0)
