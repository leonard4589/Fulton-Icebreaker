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
<<<<<<< HEAD
  nicknameDiv.innerHTML = students[i].nickname;
=======
  nameDiv.innerHTML = "Nickname: " + students[i].nickname;
>>>>>>> 4f008b08d8e7fe69cc63cb864573fceb93065f9d

  var gradeDiv = document.getElementById("studentgrade");
  gradeDiv.innerHTML = "Grade: " + students[i].grade;

  var ageDiv = document.getElementById("studentage");
  ageDiv.innerHTML = "Age: " + students[i].age;

  var birthdayDiv = document.getElementById("birthday");
<<<<<<< HEAD
  birthdayDiv.innerHTML = students[i].birthday;
=======
  nameDiv.innerHTML = "Birthday: " + students[i].birthday;
>>>>>>> 4f008b08d8e7fe69cc63cb864573fceb93065f9d

  var bioDiv = document.getElementById("studentbio");
  bioDiv.innerHTML = students[i].bio;
}
populatePage(0)
