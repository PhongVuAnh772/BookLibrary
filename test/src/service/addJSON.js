const fs = require('fs');

// Delete all the data in the JSON file
fs.writeFile('data.json', '[]', (error) => {
  if (error) {
    console.error('Error deleting data:', error);
  } else {
    console.log('Data deleted');
  }
});