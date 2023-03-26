let form1 =document.getElementById("form1");
let table = document.getElementById("table");

form1.addEventListener("submit",(e)=>{
  e.preventDefault();
  let fName = e.target.fName.value;
  let date = e.target.birthday.value;
  let gender = e.target.gender.value;
  let grade = e.target.grade.value;
  let phone = e.target.phoneNumber.value;
  

  info(fName,date,gender,phone,grade);
});
 function info(fName,date,gender,phone,grade) {
  let row = document.createElement("tr");
  let tName = document.createElement("td");
  let tdate = document.createElement("td");
  let tgender = document.createElement("td");
  let tgrade = document.createElement("td");
  let tphone = document.createElement("td");

  tName.textContent=fName;
  tdate.textContent=date ;
  tgender.textContent=gender;
  tgrade.textContent=grade ;
  tphone.textContent=phone;

  table.appendChild(row);
  row.appendChild(tName);
  row.appendChild(tdate);
  row.appendChild(tgender);
  row.appendChild(tgrade);
  row.appendChild(tphone);

  // form.reset();
 }


// let form = document.getElementById("form");
// let table = document.getElementById("table");
// form.addEventlistener("submit",(e)=>{
// e.preventDefault();
// let fName = e.target.fName.value;
// let date = e.target.birthday.value;
// let gender = e.target.gender.value;
// let phone = e.target.phone.value;
// let grade = e.target.grade.value;

// info (fName,date,gender,phone,grade)
// });

// function info (fName,date,gender,phone,grade){

// let row = document.createElement("tr");
// let tName = document.createElement("td");
// let tdate = document.createElement("td");
// let tgender = document.createElement("td");
// let tphone = document.createElement("td");
// let tgrade = document.createElement("td");

// tName.textContent=fName; 
// tdate.textContent=date ;
// tgender.textContent=gender; 
// tphone.textContent=phone; 
// tgrade.textContent=grade ;

// row.appendChild(tName);
// row.appendChild(tdate);
// row.appendChild(tgender);
// row.appendChild(tphone);
// row.appendChild(tgrade);

// table.appenedChild(row);
// form.reset();
// }