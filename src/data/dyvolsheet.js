function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

var dyvolsheet = JSON.parse(Get('http://18.216.242.3/dyvolmaster'));
console.log(dyvolsheet)
const product_keys = Object.keys(dyvolsheet[0]).filter(function(number){
  return number !== 'index'
});


product_keys.forEach((key) => {
  dyvolsheet.forEach((item) => {
    item.index = new Date(item.index)
    /*item.index.setMinutes(0)
    item.index.setHours(4)
    item.index.setSeconds(0)*/
    item[key] = Number(Number(item[key]).toFixed(3))
    
  })
});

export {
  dyvolsheet,
}



console.log(dyvolsheet)