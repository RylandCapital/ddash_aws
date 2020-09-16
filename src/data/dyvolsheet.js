function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

var dyvolsheet = JSON.parse(Get('http://18.216.242.3/dyvolmaster'));
const product_keys = Object.keys(dyvolsheet[0]).filter(function(number){
  return number !== 'index'
});

product_keys.forEach((key) => {
  dyvolsheet.forEach((item) => {
    item.index = new Date(item.index)
    item[key] = Number(Number(item[key]).toFixed(3))
    item.time = item.index.getTime()/1000
  })
});

export {
  dyvolsheet,
}