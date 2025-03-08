console.log('In my marketplace action');
console.log('My input i sent was ${{ inputs.input_value }}');
//call code in another js file aka morecode.js
const myModule = require('./morecode');

const result = myModule.printmore(3);
console.log(result); 
console.log(myModule.myVariable); // Output: 10
console.log(process.env);

