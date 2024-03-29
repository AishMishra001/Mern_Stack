const fs = require('fs');

fs.readFile('a.txt', 'utf-8', function (err, data) {
  if (err) {
    console.error('Error reading the file:', err);
    return; // Exiting the function if there's an error
  }

  console.log(data); // Prints the file content to the console
});
