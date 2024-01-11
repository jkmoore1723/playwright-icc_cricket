import { expect, Locator, Page } from '@playwright/test';

class HomePage {
    page: Page;
    searchIconBtn: Locator;
    navLinks: Locator;
    
    
    constructor(page: Page) {
        this.page = page;
        this.searchIconBtn = page.getByLabel('Search', { exact: true })
        this.navLinks = page.locator('#nav')
    
    }
    async navigate() {
        await this.page.goto('https://www.icc-cricket.com');
    }
    getNavLinks() {
        return this.navLinks.allTextContents()
    }
}

export default HomePage;