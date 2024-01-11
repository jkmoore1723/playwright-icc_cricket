import { test, expect } from '@playwright/test';
import HomePage from '../pages/components/home.page'
import {allure} from 'allure-playwright';

test.describe('HomePage', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
    })
    
    test('Navigate To HomePage', async ({ page }) => {
        await allure.severity('P1');
        await allure.feature('Launch Homepage')
        
        //Go To URL
        await allure.step('Navigate To The HomePage', async () => {
        await homePage.navigate();
        });
      
        //(Assertion) - Confirm URL
        await allure.step('Verify The Correct URL',async () => {
        await expect(page).toHaveURL('https://www.icc-cricket.com');
        });
        
    })
    test('Search Website', async ({ page }) => {
        await allure.severity('P1')
        await allure.feature('Going To Search Page')
        
        //Go To URL
        await allure.step('Navigate To Homepage',async () => {
        await homePage.navigate();   
        });
      
        //Click On Search Icon
        await allure.step('Click On The Search Button',async () => {
        await homePage.searchIconBtn.click(); 
        });
        
        //(Assertion) - Confirm URL
        await allure.step('Verify The URL',async () => {
        await expect(page).toHaveURL('https://www.icc-cricket.com/search');  
        })
    
    })
    test.skip('Navigation Links', async ({ page }) => {
        //Go To URL
        await homePage.navigate();

        const expectedLinks = [
            'Rankings',
            'News',
            'Awards',
            'Watch'
        ]

        //Verify Links
        await expect(homePage.getNavLinks).toEqual(expectedLinks);
    })
    
})
