import { chromium, type FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    //Launching Browser 
  const browser = await chromium.launch();
  const page = await browser.newPage();

  //notLoggedInState
  await page.goto('https://accounts.icc-cricket.com/4ba9f276-2497-440e-a6ba-d05d4831b967/b2c_1a_signinsignup/oauth2/v2.0/authorize?client_id=36da6054-8552-4015-a6b2-b7b6906fd4ab&scope=profile%20openid%20offline_access%20https%3A%2F%2Ficcprdlogin.onmicrosoft.com%2Fapi%2Fcatalogue.read%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fwww.icc-cricket.com%2Fsignin&client-request-id=9ea61172-9fb3-4bef-be15-b885c0d826bb&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.38.1&client_info=1&code_challenge=_DuTXmiO2jFBruPE58jp4HseDMuvoCJDdUWua6PAWXc&code_challenge_method=S256&nonce=b9237ef4-07cf-4363-b838-1c60eafb4207&state=eyJpZCI6ImI4MTc3NTBhLTY3MjgtNDg0Mi04YzVkLTJiM2ZmNjkyNTU0NyIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D');
  await page.context().storageState({ path: 'notLoggedInState.json' });

  //Log in
  await page.getByPlaceholder('Email Address').fill('james.stpatrick1723@icloud.com')
  await page.getByPlaceholder('Password').fill('Patrick1723')
  await page.getByLabel('Sign in').click()

  //Saved In State loggedInState
  await page.context().storageState({ path: 'loggedInState.json' });
  await browser.close();
}

export default globalSetup;