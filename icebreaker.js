// b=document.getElementById("backbutton");
// b.addEventListener("click", function(){
//   alert("Great now make that other page");
// })



nameinput = document.getElementById ("namesearch")
nameinput.addEventListener("change",function(){
  name = this.value;
  console.log(name);
  studentID = getStudentByName(name);
  if (studentID !== false) {
    //populatePage(studentn);
    location.replace("bios.html?id="+studentID);
  } else {
    console.log('not found');
  }
})



function getStudentByName(name) {
  // i indicates ignore case
  let searchRegularExpression = new RegExp(name, 'i');
  for (let n=0;n<students.length; n++) {
    if (students[n].name.match(searchRegularExpression) ||
        students[n].nickname.match(searchRegularExpression)) {
      return students[n].id;
    }
  }
  return false;
}

function getStudentByID(id){
  id=parseInt(id)
  for (let i=0;i<students.length; i++){
    if (id === students[i].id) {
      return i;
    }
  }
}

function getStudentByGrade(grade){
  studentsInGrade = [];
  for (let i=0;i<students.length; i++){
    if (grade == students[i].grade){
      studentsInGrade.push(students[i]);
    }
   }
   return studentsInGrade;
}
function gradeSearch(grade){
  sInGrade = getStudentByGrade(grade);
  console.log (sInGrade)
  resultdiv = document.getElementById("searchresults");
  resultdiv.innerHTML = ""
  for (const student of sInGrade){
    let element = document.createElement("div");
    // element.innerHTML = student.name;
    let link = document.createElement("a");
    element.appendChild(link)
    link.setAttribute("href",`bios.html?id=${student.id}`)
    link.innerHTML = student.name
    console.log (element)
    resultdiv.appendChild(element)
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

  var tagDiv = document.getElementById("tags");
  tagDiv.innerHTML = students[i].tags;

  var bioDiv = document.getElementById("studentbio");
  bioDiv.innerHTML = students[i].bio;
}
// studentn = getStudentByName("Holden Appell");
//studenti = getStudentByID(1);
// console.log (studentn);
//console.log (studenti);
//populatePage(studenti);
let urlParams = new URLSearchParams(window.location.search);
id = urlParams.get("id");
console.log (id);
sid = getStudentByID(id);
console.log (sid)
populatePage(sid);
