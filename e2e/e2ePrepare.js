const fs = require('fs');

fs.readFile('.env.production', 'utf-8', (err, data) => {
  if (err) throw err;

  const newValue = data.replace(/E2E=''/gim, 'E2E=true');

  fs.writeFile('.env.production', newValue, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Done!');
  });
});
