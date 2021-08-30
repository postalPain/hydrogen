const fs = require('fs');

const changeBaseUrl = async () => new Promise((resolve, reject) => {
  let API_URL = process.argv.find(val => val.includes('API_URL'));
  API_URL = API_URL.replace('API_URL=', '');

  if (API_URL) {
    fs.readFile('.env.production', 'utf-8', (readErr, data) => {
      if (readErr) throw readErr;

      const newValue = data.replace('API_URL=$BITRISE_API_URL', `API_URL=${API_URL}`);

      fs.writeFile('.env.production', newValue, 'utf-8', (writeErr) => {
        if (writeErr) throw writeErr;
        resolve();
      });
    });
  } else reject();
});

const changeEnv = async () => new Promise((resolve, reject) => {
  let BITRISE_TRIGGERED_WORKFLOW_TITLE = process.argv.find(val => val.includes('BITRISE_TRIGGERED_WORKFLOW_TITLE'));
  BITRISE_TRIGGERED_WORKFLOW_TITLE = BITRISE_TRIGGERED_WORKFLOW_TITLE.replace('BITRISE_TRIGGERED_WORKFLOW_TITLE=', '');

  if (BITRISE_TRIGGERED_WORKFLOW_TITLE) {
    fs.readFile('.env.production', 'utf-8', (readErr, data) => {
      if (readErr) throw readErr;
      const env = BITRISE_TRIGGERED_WORKFLOW_TITLE.includes('release')
        ? 'production'
        : BITRISE_TRIGGERED_WORKFLOW_TITLE.includes('staging')
          ? 'staging'
          : 'dev';
      const newValue = data.replace('ENV=$BITRISE_TRIGGERED_WORKFLOW_TITLE', `ENV=${env}`);

      fs.writeFile('.env.production', newValue, 'utf-8', (writeErr) => {
        if (writeErr) throw writeErr;
        resolve();
      });
    });
  } else reject();
});

const changeGooglePlaceApiKey = async () => new Promise((resolve, reject) => {
  let GOOGLE_PLACE_API_KEY = process.argv.find(val => val.includes('GOOGLE_PLACE_API_KEY'));
  GOOGLE_PLACE_API_KEY = GOOGLE_PLACE_API_KEY.replace('GOOGLE_PLACE_API_KEY=', '');

  if (GOOGLE_PLACE_API_KEY) {
    fs.readFile('.env.production', 'utf-8', (readErr, data) => {
      if (readErr) throw readErr;

      const newValue = data.replace('GOOGLE_PLACE_API_KEY=$BITRISE_GOOGLE_PLACE_API_KEY', `GOOGLE_PLACE_API_KEY=${GOOGLE_PLACE_API_KEY}`);

      fs.writeFile('.env.production', newValue, 'utf-8', (writeErr) => {
        if (writeErr) throw writeErr;
        resolve();
      });
    });
  } else reject();
});


(async () => {
  try {
    await changeBaseUrl();
    await changeEnv();
    await changeGooglePlaceApiKey();
  } catch (error) {
    console.log('error', error);
  }
})();
