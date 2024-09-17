import {test} from '../fixtures/test-config'

test('Should be able to login',async({loginPage})=>{
await loginPage.loadApplication()
})