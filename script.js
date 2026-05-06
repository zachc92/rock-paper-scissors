const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here

for (const person of people){
    if(person == "Phil" || person == "Lola"){
        refused.textContent += `${person}, `;
    } else {
        admitted.textContent += `${person}, `;
    }
}

let finalRefusedList = refused.textContent.slice(0, refused.textContent.length-2);
let finalAdmittedList = admitted.textContent.slice(0, admitted.textContent.length-2);

refused.textContent = finalRefusedList;
admitted.textContent = finalAdmittedList;