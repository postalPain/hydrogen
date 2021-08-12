const fs = require('fs');
const path = require('path')

const initAppJson = (src)=>{

    const appJson = require(src);
    appJson.name = process.env.PROJECT_NAME;
    appJson.displayName = process.env.PROJECT_DISPLAY_NAME;
    console.log(process.env.PROJECT_NAME, process.env.PROJECT_DISPLAY_NAME,appJson)
    fs.writeFile(path.resolve(__dirname,src), JSON.stringify(appJson), (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('\x1b[36m', `Successfuly generated ${src}`);
        }
    });
}

initAppJson('./../app.json');



