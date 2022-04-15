import keys from 'webdriverio/build/commands/browser/keys';
import Page from './page';
var assert = require ("assert")

class addTimeSheetPage extends Page{

    get clickOnSystemAdminstratorButton () { return $('#menu_admin_viewAdminModule');
    }
    get clickOnTime(){ return $('#menu_time_viewTimeModule')
    }
    get fillEmpName(){ return $('#employee')
    }
   get clickOnView(){ return $('#btnView')
    }
    get clickAddTimeSheet(){ return $('#btnAddTimesheet')
   }
   get clickOnDate() { return $('//input[@id="time_date"]')
   }
   get addButton(){ return $('#btnAddTimesheet')
  }
  get pickDay(){ return $('//tbody//tr//td[@class=" ui-state-fullday ui-datepicker-current-day"]//a')
  }
    

    async clickOnTimeButton(){
        await(await this.clickOnTime).waitForDisplayed({timeout:2000});
        await(await this.clickOnTime).click();
    }

    async verifyTimeTabAndEnterEmpName(user){
        const text = $('(//div[@class="head"]//h1)[1]');
        if(await(text.isDisplayed())== true){
            await(await this.fillEmpName).setValue(user);

        }
    }

    async clickOnViewButton(){
        await(await this.clickOnView).click();
    }

    async clickOnAddTimeSheetButton(){
        await(await this.clickAddTimeSheet).waitForClickable({timeout:3000});
        await(await this.clickAddTimeSheet).click();
    }

     async getDateFromCalender(){
        const now = new Date();
        console.log("current date"+now);
        const dt = now.getDate();
       const  now1 = new Date(2022, 3, 14);
       console.log("current date"+now1);
        return now1;
    }

    async pickDate(date){
        await(await this.clickOnDate).waitForDisplayed({timeout:2000});
        await(await this.clickOnDate).click();
        // await(await this.pickDay).waitForClickable({timeout:3000});
        // await(await this.pickDay).click();
        await(await this.clickOnDate).setValue(date);
        
    }

    async clickOnAddTimeSheetAfterSelectDate(){
        await(await this.addButton).click();
    }
    
    // async verifyTimeSheetNotification(){
    //     const notification  = await $('//div[@class="message warning"]');
    //     assert.((notification.isDisplayed()),true,"notification is not showed");
    // }
  
       // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

}
export default new addTimeSheetPage();