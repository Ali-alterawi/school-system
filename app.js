// let form1 =document.getElementById("form1");
// let table = document.getElementById("table");

// form1.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   let fName = e.target.fName.value;
//   let date = e.target.birthday.value;
//   let gender = e.target.gender.value;
//   let grade = e.target.grade.value;
//   let phone = e.target.phoneNumber.value;
  

//   info(fName,date,gender,phone,grade);
// });
//  function info(fName,date,gender,phone,grade) {
//   let row = document.createElement("tr");
//   let tName = document.createElement("td");
//   let tdate = document.createElement("td");
//   let tgender = document.createElement("td");
//   let tgrade = document.createElement("td");
//   let tphone = document.createElement("td");

//   tName.textContent=fName;
//   tdate.textContent=date ;
//   tgender.textContent=gender;
//   tgrade.textContent=grade ;
//   tphone.textContent=phone;

//   table.appendChild(row);
//   row.appendChild(tName);
//   row.appendChild(tdate);
//   row.appendChild(tgender);
//   row.appendChild(tgrade);
//   row.appendChild(tphone);

//   // form.reset();
//  }


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

let arrr =[];

if(localStorage.arrr != null){
  arrr=JSON.parse(localStorage.arrr);
  render();
}
let form1 = document.getElementById("form1");

let fName;
let date;

let gender;

let major;

let photo;

let phone;


form1.addEventListener("submit", function(e){
  // e.preventDefault();
  fName = e.target.fName.value;
  date = e.target.birthday.value;
  gender = e.target.gender.value;
  major = e.target.major.value;
  photo = e.target.userimg.value;
  phone = e.target.phoneNumber.value;
  // console.log(date, gender, major, photo);

  let student = new Info(fName,date,gender,major,photo,phone);
  arrr.push(student);
  localStorage.setItem("arrr",JSON.stringify(arrr));
  render()
} );

function Info(fName,date,gender,major,photo,phone) {
  this.fName = fName;
  this.date = date;
  this.gender = gender; 
  this.major = major;
  this.photo = photo;
  this.phone = phone;
}

function render() {
  for (let i =0 ; i < arrr.length ; i++) {
    let cards= document.getElementById("cards")
    let card = document.createElement("div");
    let img = document.createElement("img");
    img.src=`${arrr[i].photo}`;

    //ul
    //li
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.textContent=`Name: ${arrr[i].fName}`;

    let li2 = document.createElement("li");
    li2.textContent=`Date: ${arrr[i].date}`;
    let li3 = document.createElement("li");
    li3.textContent=`Gender: ${arrr[i].gender}`;
    let li4 = document.createElement("li");
    li4.textContent=`Major: ${arrr[i].major}`;
    let li5 = document.createElement("li");
    li5.textContent=`Phone: ${arrr[i].phone}`;


        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        
        card.appendChild(img);
        card.appendChild(ul);
        cards.appendChild(card);

}}