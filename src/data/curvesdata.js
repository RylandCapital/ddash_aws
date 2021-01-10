function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
  }
  
  var curves = JSON.parse(Get('http://18.216.242.3/curves'));
  const product_keys_curves = Object.keys(curves[0]).filter(function(number){
    return number !== 'index'
  });
  
  product_keys_curves.forEach((key) => {
    curves.forEach((item) => {
      item.index = new Date(item.index)
      //item[key] = Number(Number(item[key]).toFixed(3))
      item.time = item.index.getTime()/1000
    })
  });
  
  export {
    curves,
  }