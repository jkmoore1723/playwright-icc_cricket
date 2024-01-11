import { expect, Locator, Page } from '@playwright/test';

class ContactPage {
    page: Page;
    contactOptions: Locator;
    contactTitle: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.contactOptions = page.getByText('Contact usPostal')
        this.contactTitle = page.getByRole('heading', { name: 'Contact us', exact: true })
    }
    async navigate() {
        await this.page.goto('https://www.icc-cricket.com/about/contact-us/icc-contact-details');
    }
}

export default ContactPage;