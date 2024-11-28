const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
  },
  env: {
   // environment variables for the application
     url: 'https://demowebshop.tricentis.com/'
  },
  // env:{
  //     url: 'https://uat.reveleer.com/login'
  // }
});
