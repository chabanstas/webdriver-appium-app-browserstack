const LoginPage = require('../pageobjects/login_test.page.js')

describe('Search Wikipedia Functionality', () => {
  it('isEnabled button Webview', async () => {
    const Webview = await $('//android.widget.Button[@content-desc="Webview"]/android.widget.TextView');
    await Webview.waitForDisplayed({ timeout: 30000 });
    await Webview.isEnabled();
    await expect(Webview).toBeEnabled();
  });

  it('should sign up unregisterd user with valid details', async () => {
    await LoginPage.goToLoginPage();
    await LoginPage.setValidData();
    await LoginPage.clickLoginCongirmBtn;
    
    expect(await $('#android:id/alertTitle')).toHaveTextContaining('Successfull');
  });

  it('should sign up with invalid email', async () => {
    await LoginPage.goToLoginPage();
    await LoginPage.setInvalidEmail();
    await LoginPage.clickLoginCongirmBtn;
    
    expect(await $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]')).toHaveTextContaining('Please enter a valid email address');
  });

  it('should sign up with invalid password', async () => {
    await LoginPage.goToLoginPage();
    await LoginPage.setInvalidPass();
    await LoginPage.clickLoginCongirmBtn;
   
    expect(await $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]')).toHaveTextContaining('Please enter at least 8 characters');
  });

  it('should sign up with empty fields', async () => {
    await LoginPage.goToLoginPage();
    await LoginPage.clickLoginCongirmBtn;
    
    expect(await $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]')).toHaveTextContaining('Please enter a valid email address');
  });
});