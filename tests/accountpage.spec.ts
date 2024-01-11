import {test, expect} from '@playwright/test'
import AccountPage from '../pages/components/account.page'
import {faker} from '@faker-js/faker'
import {allure} from 'allure-playwright'


test.describe('Account Page', () => {
    let accountPage: AccountPage;
    test.beforeEach(async ({ page }) => {
        accountPage = new AccountPage(page);
    })
     test.use({ storageState: 'notLoggedInState.json'})
    test('Verify Login And Create Acct Button', async ({ page }) => {
        await allure.severity('P1')
        await allure.feature('Verify Login And Create Acct Button')
       
        //Go To Url
        await allure.step('Go To Website', async () => {
        await accountPage.navigate();
        });
       

        //Click On The Search Button
        await allure.step('Click On Search Button',async () => {
        await accountPage.searchBtn.click();  
        });
        

        //(Assertion) - Verify The Login Button 
        await allure.step('Verify Log In Button',async () => {
        await expect(accountPage.logInBtn).toBeVisible();
        });
        

        //(Assertion) - Verify The Sign Up Button 
        await allure.step('Verify Sign Up Button', async () => {
        await expect(accountPage.signUpBtn).toBeVisible(); 
        });
       
    })
    test.skip('Sign Up For Account', async ({ page }) => {
        //Go To URL
        await accountPage.navigate();

         //Click On The Search Button
        await accountPage.searchBtn.click();

        //Click On Sign Up Button
        await accountPage.signUpBtn.click();

        //Fill Out Sign Up Info
        await accountPage.signUpForm(faker.person.firstName(), faker.internet.email(), faker.phone.number(), faker.location.country(), faker.lorem.word(8));
        
        //(Assertion) - Verify My Account
        await expect(page.getByRole('heading', { name: 'Welcome Back'})).toBeVisible();
    })
})
test.describe('My Account', () => {
    let accountPage: AccountPage;
    test.beforeEach(async ({ page }) => {
        accountPage = new AccountPage(page);
    })
     test('Login Into Account', async ({ page }) => {
        await allure.severity('P1')
        await allure.feature('Logging Into Account')
        
        // Go To URL
        await allure.step('Going To Log In page',async () => {
        await accountPage.navigate();   
        });
      
        //Click On The Sign Up Btn
        await allure.step('Click On The Search Button', async () => {
        await accountPage.searchBtn.click(); 
        })
        
        //(Assertion) - Verify Account Page
        await allure.step('Verify My Account Page',async () => {
        await expect(accountPage.myAccountPageIcon).toBeVisible();
        });
        
        
   })
})

