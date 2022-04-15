

import Page from './page';
var assert = require ("assert")
class LoginPage extends Page {
  
    
    get inputUsername () {
      return $('#txtUsername');
    }

    get inputPassword () {
        return $('#txtPassword');
    }

    get btnSubmit () {
        return $('#btnLogin');
    }

    async checkLinks(){
        const links = await $$('//div[@id="social-icons"]//img')
        console.log("count of links",links.length);
        // await links.scrollIntoView();
        assert.strictEqual(links.length,4,"count is mismactch");
        for(let i=0;i<links.length;i++){
            console.log("count of links with title", await links[i].getAttribute("alt"));
            if(await links[i].getAttribute("alt")==="OrangeHRM on twitter"){
                await links[i].click();
                await browser.pause(4000);
                break;
                //  await browser.closeWindow();
            }
            
            //  await browser.switchWindow("OrangeHRM")
        }
        // await browser.closeWindow();
        // await browser.pause(3000);
        await browser.switchWindow("OrangeHRM")
    }
    async enterUsername(username) {
        // browser.maximizeWindow();
        await this.inputUsername.setValue(username);
    }
 
        async enterPasswordName(password){
        await this.inputPassword.setValue(password);
    }
       async clickOnLoginButton(){
           await (await this.btnSubmit).click();
       }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
      
    }
}

export default new LoginPage();
