'use strict';

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false


function isJSON(str) {
  try {
    const item =  JSON.parse(str);
    return true;
  }
  catch(error) {
    return false;
  }
}