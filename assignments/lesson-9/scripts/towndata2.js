      var header = document.querySelector('header');
      var section = document.querySelector('.pueblo');
      
      let town = new XMLHttpRequest();
      let townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

   town.open('GET', townURL, true);  
   town.responseType = 'json';   
   town.send();  
   town.onload = function(){
 var towninfo = town.response;  
  Namingtowns(towninfo)
}
  function Namingtowns(jsonObj) {
      var cities = jsonObj['towns'];
      
      for (var i = 0; i < cities.length; i++) {
      if (i == 0 || i == 1 || i == 3){
      var myArticle = document.getElementById(cities[i].name );
      var myH2 = document.createElement('p2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myPara5 = document.createElement('p');
      var myList = document.createElement('ul');

      myH2.textContent = cities[i].name;
      myPara1.textContent = 'Motto: ' + cities[i].motto;
      myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
      myPara3.textContent = 'Current Population: ' + cities[i].currentPopulation;
      myPara4.textContent = 'Average Rainfall: ' + cities[i].averageRainfall;
      myPara5.textContent = 'Events:';
        
      var tevents = cities[i].events;
      for (var j = 0; j < tevents.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = tevents[j];
      myList.appendChild(listItem);
      }

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

     
      }}}