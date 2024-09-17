import {test} from '../fixtures/config'

test('Should be able to login',async({loginPage})=>{
await loginPage.loadApplication()
})