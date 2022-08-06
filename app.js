// https://calculator.swiftutors.com/vector-magnitude-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const vectormagnitude2DRadio = document.getElementById('vectormagnitude2DRadio');
const valueofxRadio = document.getElementById('valueofxRadio');
const valueofyRadio = document.getElementById('valueofyRadio');

let vectormagnitude2D;
let valueofx = v1;
let valueofy = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

vectormagnitude2DRadio.addEventListener('click', function() {
  variable1.textContent = 'Value of x';
  variable2.textContent = 'Value of y';
  valueofx = v1;
  valueofy = v2;
  result.textContent = '';
});

valueofxRadio.addEventListener('click', function() {
  variable1.textContent = '2D vector magnitude';
  variable2.textContent = 'Value of y';
  vectormagnitude2D = v1;
  valueofy = v2;
  result.textContent = '';
});

valueofyRadio.addEventListener('click', function() {
  variable1.textContent = '2D vector magnitude';
  variable2.textContent = 'Value of x';
  vectormagnitude2D = v1;
  valueofx = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(vectormagnitude2DRadio.checked)
    result.textContent = `2D vector magnitude = ${compute2Dvectormagnitude().toFixed(2)}`;

  else if(valueofxRadio.checked)
    result.textContent = `Value of x = ${computeValueofx().toFixed(2)}`;

  else if(valueofyRadio.checked)
    result.textContent = `Value of y = ${computeValueofy().toFixed(2)}`;
})

// calculation

function compute2Dvectormagnitude() {
  return Math.sqrt(Math.pow(Number(valueofx.value), 2) + Math.pow(Number(valueofy.value), 2));
}

function computeValueofx() {
  return Math.sqrt(Math.pow(Number(vectormagnitude2D.value), 2) - Math.pow(Number(valueofy.value), 2));
}

function computeValueofy() {
  return Math.sqrt(Math.pow(Number(vectormagnitude2D.value), 2) - Math.pow(Number(valueofx.value), 2));
}