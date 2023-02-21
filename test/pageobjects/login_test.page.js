const Login_btn = await $('//android.widget.Button[@content-desc="Login"]/android.view.ViewGroup/android.widget.TextView');
const input_email = await $('//android.widget.EditText[@content-desc="input-email"]');
const input_pass = await $('//android.widget.EditText[@content-desc="input-password"]');
const login_confirm_btn = await $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');

class LoginPage { 
        async goToLoginPage(){
            await Login_btn.click();
            await input_email.waitForDisplayed({ timeout: 30000 });
        }

        async setValidData(){
            await input_email.setValue('test@test.com\n');
            await input_pass.setValue('TEst!1pass\n');
        }

        async setInvalidEmail(){
            await input_email.setValue('testtestcom\n');
            await input_pass.setValue('TEst!1pass\n');
        }

        async setInvalidPass(){
            await input_email.setValue('testtestcom\n');
            await input_pass.setValue('@1+#$^\n');
        }

        async clickLoginCongirmBtn(){
            await login_confirm_btn.click();
        }
 }
module.exports = new LoginPage()