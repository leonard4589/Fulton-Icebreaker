// b=document.getElementById("backbutton");
// b.addEventListener("click", function(){
//   alert("Great now make that other page");
// })

function getStudentByName(name){
  for (let n=0;n<students.length; n++){
    if (name === students[n].name) {
      return n;
    }
  }
}

function getStudentByID(id){
  for (let i=0;i<students.length; i++){
    if (id === students[i].id) {
      return i;
    }
  }
}


function populatePage (i){

  var nameDiv = document.getElementById("studentname");
  nameDiv.innerHTML = students[i].name;

  var nicknameDiv = document.getElementById("nickname");
  nicknameDiv.innerHTML = "Nickname: " + students[i].nickname;

  var gradeDiv = document.getElementById("studentgrade");
  gradeDiv.innerHTML = "Grade: " + students[i].grade;

  var ageDiv = document.getElementById("studentage");
  ageDiv.innerHTML = "Age: " + students[i].age;

  var birthdayDiv = document.getElementById("birthday");
  birthdayDiv.innerHTML = "Birthday: " + students[i].birthday;

  var bioDiv = document.getElementById("studentbio");
  bioDiv.innerHTML = students[i].bio;
}
studentn = getStudentByName("Holden Appell");
//studenti = getStudentByID(1);
console.log (studentn);
//console.log (studenti);
//populatePage(studenti);
populatePage(studentn);
