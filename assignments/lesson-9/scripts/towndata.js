  var frankmotto = towninfo.towns[0].motto;
  document.getElementById("fmotto").innerHTML = frankmotto;
  
  
    var frankyear = towninfo.towns[0].yearFounded;
    document.getElementById("fyear").innerHTML = frankyear;
    
    var frankpop = towninfo.towns[0].currentPopulation;
    document.getElementById("fpopulation").innerHTML = frankpop;
    
    var frankrain = towninfo.towns[0].averageRainfall;
    document.getElementById("frainFall").innerHTML = frankrain;
    
    var frankevents = towninfo.towns[0].events;
    document.getElementById("fevents").innerHTML = frankevents;
    
    
    
    var greenmotto = towninfo.towns[1].motto;
    document.getElementById("gmotto").innerHTML = greenmotto;
    
    var greenyear = towninfo.towns[1].yearFounded;
    document.getElementById("gyear").innerHTML = greenyear;
    
    var greenpop = towninfo.towns[1].currentPopulation;
    document.getElementById("gpopulation").innerHTML = greenpop;
    
    var greenrain = towninfo.towns[1].averageRainfall;
    document.getElementById("grainFall").innerHTML = greenrain;
    
    var greenevents = towninfo.towns[1].events;
    document.getElementById("gevents").innerHTML = greenevents;
    
    
    
    var springmotto = towninfo.towns[3].motto;
    document.getElementById("smotto").innerHTML = springmotto;
    
    var springyear = towninfo.towns[3].yearFounded;
    document.getElementById("syear").innerHTML = springyear;
    
    var springpop = towninfo.towns[3].currentPopulation;
    document.getElementById("spopulation").innerHTML = springpop;
    
    var springrain = towninfo.towns[3].averageRainfall;
    document.getElementById("srainFall").innerHTML = springrain;
    
    var springevents = towninfo.towns[3].events;
    document.getElementById("sevents").innerHTML = springevents;
    
}

for (var i = 0; i < towninfo.towns.length; i++){
myPara1.textContent = 'Secret identity: ' + towninfo.towns[i].name;

}

/*
let townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
     
      
      
                 
     
      
        
      var frankyear = towninfo.towns[0].yearFounded;
      document.getElementById("fyear1").innerhtml = frankyear;
        

      
    
        
}*/
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
      