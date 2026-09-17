// import {test as base} from '@playwright/test' // pakage imported in base variable.
// //const LoginPage = require('../page/LoginPage');
// //const logindata = require('../testdata/logindata.json')

//  const test=base.test.extend({ //extend fn(predefined) is used to create custom test 
//     customfixture: async({page},use)=> //use tells customfixture should be used instead of page.
//     { // inside here all the sites where the custom fixture is to be used should be provided
// await page.goto('https://www.demoblaze.com')
// await use(page)
//     }
// })

// export default test

import {test as base} from '@playwright/test'
//import{LoginPage} from '../page/LoginPage'
//import {logindata} from '../testdata/logindata.json'

const test=base.test.extend({
    customfixture : async({page},use)=>
    {
await page.goto('https://www.demoblaze.com')
await use(page)
    }
})
export default test
