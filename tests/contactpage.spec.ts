import {test, expect} from '@playwright/test'
import ContactPage from '../pages/components/contact.page'
import {allure} from 'allure-playwright'

test.describe('Contact Page', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
    })
    
    test('Contact US', async ({ page }) => {
        await allure.severity('P1')
        await allure.feature('Going To Contact Page And Verifying Contact Details')
        
        //Go To URL
        await allure.step('Navigate To The Contact Us Page', async () => {
        await contactPage.navigate();
        });
        
        //(Assertion) - Verify Contact Options Are Avaialble
        await allure.step('Verifying Contact Page Options', async () => {
        await expect(contactPage.contactOptions).toBeVisible(); 
        });
        
        //(Assertion) - Verify Contact Us Title
        await allure.step('Verifying Contact Us Title', async () => {
        await expect(contactPage.contactTitle).toBeVisible();
        });
        

    })
    
})
