import schools from "../data/schools.js"
//import icon from "../images/dot_PNG40.png"

function initializeSchoolMap(){

    let schoolMap = L.map('school-map').setView([39.9526, -75.1652], 12); 

    let tile = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(schoolMap);

    schoolMap.addLayer(tile);

    //schoolIcon = L.icon(icon)

    //let marker = L.marker([39.9526, -75.1652]).addTo(schoolMap);

    L.geoJSON(schools, {
        style: { fill: null, color: '#000' },
    }).addTo(schoolMap);

    return schoolMap;
}
  let schoolMap = initializeSchoolMap();

//initializeSchoolMap();

 function makeSchoolFeature(school) {
    return {
      "type": "Feature",
      "id": school['sdp_id'],
      "properties": {
        "school_name": school['sort_name'],
        "school_id": school['sdp_id'],
        },
      "geometry": school['geom'],
    };
  }



  function showSchoolsOnMap(schoolsToShow, schoolMap) {

    if (schoolMap.Layers !== undefined) {
      schoolMap.removeLayer(schoolMap.Layers);
    }
  
    const schoolFeatureCollection = {
      "type": "FeatureCollection",
      "features": schoolsToShow.map(makeSchoolFeature),
    };

      
    L.geoJSON(schoolFeatureCollection, {
      pointToLayer: (geoJsonPoint, latlng) => L.circleMarker(latlng),
      style: {
        stroke: null,
        fillOpacity: 0.9,
        radius: 3,
      },
    })
    .addTo(schoolMap);
  }

  showSchoolsOnMap(schools, schoolMap);

  let list = document.querySelector('#school-list');

  function writeList(schools){

    for( let i=0 ; i<schools.length; i++){

      let item = document.createElement('li');

      item.appendChild(document.createTextNode(schools[i]['name']));

      list.appendChild(item);

    }

    return list;

  }

  writeList(schools);

  
  export{
    initializeSchoolMap,
    showSchoolsOnMap,
    writeList
  };

  
window.schools = schools;
window.schoolMap = schoolMap;
window.makeSchoolFeature = makeSchoolFeature;
window.writeList = writeList;

//c = (schools[4]['geom']['coordinates']);

