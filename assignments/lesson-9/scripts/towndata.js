      let request = new XMLHttpRequest();     
      var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
     
      request.open('GET', requestURL, true);  
      request.responseType = 'json';
      request.send();  
      request.onload = function() {
      var towninfo = request.response;
      
      var frankname = towninfo.towns[0].name;
      document.getElementById("name0").innerHTML = frankname;
      
      var frankmotto = towninfo.towns[0].motto;
      document.getElementById("fmotto").innerhtml = frankmotto;
        
      var frankyear = towninfo.towns[0].yearFounded;
      document.getElementById("fyear").innerhtml = frankyear;
        

    /*  for (var i = 0;){
    //            var name = towninfo.towns[i].name;  
    //            var motto = towninfo.towns[i].motto; 
    //            var yf = towninfo.towns[i].yearfounded; 
    //            var curpop = towninfo.towns[i].currentpopulation; 
    //            var averain = towninfo.towns[i].averagerainfall;
    //             document.getElementById("name").innerHTML =  }
    //    for (var i = 1;){
    //            var name = towninfo.towns[i].name;  
    //            var motto = towninfo.towns[i].motto; 
    //            var yf = towninfo.towns[i].yearfounded; 
    //            var curpop = towninfo.towns[i].currentpopulation; 
                var averain = towninfo.towns[i].averagerainfall;
      }
         for (var i = 3;){
                var name = towninfo.towns[i].name;  
                var motto = towninfo.towns[i].motto; 
                var yf = towninfo.towns[i].yearfounded; 
                var curpop = towninfo.towns[i].currentpopulation; 
                var averain = towninfo.towns[i].averagerainfall;
         }
            
          
        
      document.getElementById("motto").innerHTML = towns[i].motto;
      document.getElementById("year").innerHTML  = towns[i].yearFounded;
      document.getElementById("curpop").innerHTML  = towns[i].currentPopulation;
      document.getElementById("rainfall").innerHTML = towns[i].averageRainfall;
      
        
      var activities = heroes[i].events;
      document.getElementById("activities").innerHTML = activities;
      
       */
      }