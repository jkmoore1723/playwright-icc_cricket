import {test, expect, Page, Locator} from '@playwright/test'

class AccountPage {
    page: Page;
    searchBtn: Locator;
    signUpBtn: Locator;
    logInBtn: Locator;
    firstName: Locator;
    lastName: Locator;
    emailAdd: Locator;
    sendVerCode: Locator;
    selectCountry: Locator;
    password: Locator;
    confirmPassword: Locator;
    extentMarketingCheckBox: Locator;
    termsPolicyCheckBox: Locator;
    createAccountBtn: Locator;
    myAccountPageIcon: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.searchBtn = page.getByLabel('Sign in')
        this.signUpBtn = page.getByLabel('Sign Up')
        this.logInBtn = page.getByRole('button', { name: 'Log in'})
        this.firstName = page.getByPlaceholder('First Name')
        this.lastName = page.getByPlaceholder('Last Name')
        this.emailAdd = page.getByPlaceholder('Email Address')
        this.sendVerCode = page.getByLabel('Send Verification code')
        this.selectCountry = page.getByLabel('Country')
        this.password =  page.getByPlaceholder('Password')
        this.confirmPassword = page.getByPlaceholder('Confirm Password')
        this.extentMarketingCheckBox =  page.locator('#extension_marketing_iccContact_true')
        this.termsPolicyCheckBox = page.locator('#extension_termsAndpolicy_true')
        this.createAccountBtn = page.getByLabel('Create Account')
        this.myAccountPageIcon = page.getByText('JP', {exact: true})

    }
    async navigate() {
        await this.page.goto('https://accounts.icc-cricket.com/4ba9f276-2497-440e-a6ba-d05d4831b967/b2c_1a_signinsignup/oauth2/v2.0/authorize?client_id=36da6054-8552-4015-a6b2-b7b6906fd4ab&scope=profile%20openid%20offline_access%20https%3A%2F%2Ficcprdlogin.onmicrosoft.com%2Fapi%2Fcatalogue.read%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fwww.icc-cricket.com%2Fsignin&client-request-id=a91bcb7e-6267-495a-b341-e8e07d32d338&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.38.1&client_info=1&code_challenge=BgwQ8exaqiDVeq-b3a5bSf98kziRG_FJYhR15GKgFuo&code_challenge_method=S256&nonce=343f1858-f63f-4ef2-972d-2a6e4bc26cdb&state=eyJpZCI6IjExOTk0ZTQxLTEyNmQtNDQ1NC1iNzA4LTBjOGY0ZDUzODVkZiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D');

    }
    async signUpForm(name: string, email: string, vercode: string, country: string, password: string) {
        this.firstName.fill(name)
        this.lastName.fill(name)
        this.emailAdd.fill(email)
        this.sendVerCode.click()
        this.selectCountry.selectOption('United States')
        this.password.fill(password)
        this.confirmPassword.fill(password)
        this.extentMarketingCheckBox.check()
        this.termsPolicyCheckBox.check()
        this.createAccountBtn.click()
        
    }
}
export default AccountPage;