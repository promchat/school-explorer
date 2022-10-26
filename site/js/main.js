import schools from '../data/schools.js';
import { initializeSchoolMap, showSchoolsOnMap, writeList } from './school-map.js';

console.log("This works")

//let schoolMap = initializeSchoolMap();
showSchoolsOnMap(schools, schoolMap);

const schoolCheckboxes = document.querySelectorAll('.cb');

const textbox = document.getElementById("school-name-input");

const ul = document.getElementById('school-list')
const li = ul.getElementsByTagName('li');

for( let l of li ){

  let store = l.textContent;
  //console.log(store.toLowerCase());
}


textbox.addEventListener('input', (evt) =>{

  console.log('Something Happened')
  let search = textbox.value.toLowerCase();

  const filteredResults = schools.filter((school) =>{

    const schoolName = school['name'].toLowerCase();
    const hasText = schoolName.includes(search);
    return hasText;
    
  });

  console.log(filteredResults)
  showSchoolsOnMap(filteredResults, schoolMap)
  //writeList(filteredResults,schoolList)
});

for(let cb of schoolCheckboxes){
  cb.addEventListener('click', () =>{
    console.log(cb.value)
    const filtered = schools.filter((schools) =>{


      
    });
  });
}




window.schools = schools;
window.showSchoolsOnMap = showSchoolsOnMap;
window.schoolMap = schoolMap;
window.schoolCheckboxes = schoolCheckboxes;


