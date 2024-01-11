const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.junaidjamshed.com",
    "waitForAnimation": true,
    "defaultCommandTimeout": 6000,
    "pageLoadTimeout": 60000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env:{
   // URL:"https://www.junaidjamshed.com/select-country"
   // URL:"https://www.junaidjamshed.com/customer/account/create/"
    //URL:"https://www.junaidjamshed.com/"
    
  }
});
