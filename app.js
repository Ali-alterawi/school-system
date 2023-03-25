let studentInfo = document.getElementById("studentInfo");
let submittedInfo = document.getElementById("Submit-Info");

studentInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  let stName = e.target.fName.value;
  let date = e.target.birthday.value;
  let male = e.target.gender.value;
  let phone = e.target.grade.value;
  let grade = e.target.phoneNumber.value;


  

   ali(stName, date, male, phone, grade);
   });

function ali(stName, date, male, phone, grade) {
  let row = document.createElement("tr");
  let pstName = document.createElement("td");
  let pdate = document.createElement("td");
  let pgender = document.createElement("td");
  let pphone = document.createElement("td");
  let pgrade = document.createElement("td");

  pstName.textContent = stName;
  pdate.textContent = date;
  pgender.textContent = male;
  pphone.textContent = phone;
  pgrade.textContent = grade;

  row.appendChild(pstName);
  row.appendChild(pdate);
  row.appendChild(pgender);
  row.appendChild(pphone);
  row.appendChild(pgrade);

  submittedInfo.appendChild(row);
}