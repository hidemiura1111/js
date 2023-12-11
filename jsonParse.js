console.log('test start')

// Sample variable containing JSON data
var jsonString = '{"name": "John Doe", "age": 30, "city": "New York"}';
var string = 'string';

// Function to check if a string is valid JSON
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}

// Check if the variable is valid JSON
if (isValidJSON(jsonString)) {
    var jsonData = JSON.parse(jsonString);
    console.log('Variable is valid JSON:', jsonData);
    console.log('Name:', jsonData.name);
    console.log('Age:', jsonData.age);
    console.log('City:', jsonData.city);
} else {
    console.error('Variable is not valid JSON');
}

if (isValidJSON(string)) {
    console.log('string is valid JSON');
} else {
    console.error('string is not valid JSON');
}

console.log('test end')