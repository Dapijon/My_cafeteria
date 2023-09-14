//question 2

const farenheit = 74;
const celsius = (farenheit - 32) / 1.8;
console.log(farenheit + celsius)
//question 1
function getCountry(obj) {
    return obj.country;
  }
  const location = {
    country: 'USA',
    continent :'NorthAmerica'
  };
  console.log(location)

 //question 3
function calculatePower(current,voltage){
  return power = current * voltage
}
  const voltage = 24
  const current = 5
  const power =(voltage * current)

  console.log(power)

//question 5
function getProperty (obj){
  return obj.property;
}
const property ={
  property1: 'prop-1',
  property2: 'prop-1'
}
console.log(property['property2'])

//question 4
 function mauricePlanworking() {
  const steveSnails = { s: 1, m: 2, f: 3 };
  const mauriceSnails = { s: 1, m: 2, f: 3 };
  
  let mauriceWin = 0;

  if (mauriceSnails.s > steveSnails.f) {
    mauriceWin++;
  }

  if (mauriceSnails.m > steveSnails.s) {
    mauriceWin++;
  }

  if (mauriceSnails.f > steveSnails.m) {
    mauriceWin++;
  }

  return mauriceWin >=2;
 }

 const result = mauricePlanworking();
 console.log(result)

