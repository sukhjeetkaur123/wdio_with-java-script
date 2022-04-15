import keys from 'webdriverio/build/commands/browser/keys';
import addUserPage from './addUser.page';
import Page from './page';

class deleteUserPage extends Page{
    get clickOnSystemAdminstratorButton () {return $('#menu_admin_viewAdminModule');
    }

    get clickOnUserField(){ return $('//input[@name="searchSystemUser[userName]"]')
    }
    
    get clickSearchButton(){return $('//input[@id="searchBtn"]')
    }

    get clickDeleteButon(){ return $('#btnDelete')
    }

    get checkbox(){ return $('//input[@id="ohrmList_chkSelectAll"]')
    }
    get okButton(){ return $('#dialogDeleteBtn')
    }

     // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }
      async addUserForDelete(user){
          browser.pause(4000);
        //  await(await this.clickOnUserField).click();
         
         
        // const q = (await $("(//tbody//td[2]/a[contains(text(),'"+user+await addUserPage.getRandomNumber()+"')])[1]")).getText();
        //  console.log("fjfj"+q);
        // await addUserPage.addRandomUserName(user);
        // await q.click();
    //   const value =  await addUserPage.addRandomUserName();
       await (await addUserPage.clickOnSystemAdminstratorButton).click();
    //   await (await this.clickOnUserField).setValue(await addUserPage.addRandomUserName(user))
       await(await this.clickOnUserField).setValue(user);
    }

    async clickOnSearchButton(){
        await(await this.clickSearchButton).click();
    }

    async clickOnCheckBox(){
        await(await this.checkbox).click();
    }

    async clickOnDeleteButton(){
        await(await this.clickDeleteButon).click();
        await(await this.okButton).click();
    }
    

}
export default new deleteUserPage();