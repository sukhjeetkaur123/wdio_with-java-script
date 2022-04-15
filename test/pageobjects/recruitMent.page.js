import keys from 'webdriverio/build/commands/browser/keys';
import addUserPage from './addUser.page';
import loginPage from './login.page';
import Page from './page';


class recuritMentPage extends Page{

    get clickOnSystemAdminstratorButton () { return $('#menu_admin_viewAdminModule')
    }
    get recuritmentIcon(){ return $('#menu_recruitment_viewRecruitmentModule')
    }
    get userNameForRecuritment(){ return $('#candidateSearch_candidateName')
    }
    get keyword(){ return $('#candidateSearch_keywords')
    }

    async clickOnRecuritmentButton(){
        await(await this.recuritmentIcon).waitForClickable({timeout:3000});
        await(await this.recuritmentIcon).click();
    }
    async addUser(){
        await (await this.clickOnSystemAdminstratorButton).click();
        await(await this.clickOnAddButton).click();
        
    }

    async selectJobTitle(){
        const selectValue = await $('#candidateSearch_jobTitle');
        await selectValue.selectByVisibleText('Automation Tester');
    }

    async addRandomUserName(user){
        await (await this.userNameForRecuritment).setValue(user+await addUserPage.getRandomNumber());
    }

    async selectStatus(status){
        const selectStatus = await $('#candidateSearch_status');
        await selectStatus.selectByVisibleText(status)
    }

    async enterValueKeywordField(value){
        await(await this.keyword).setValue(value);
    }

    async selectMethodOfApplication(mode){
        const selectMethod = await $('#candidateSearch_modeOfApplication');
        await selectMethod.selectByVisibleText(mode);
    }

}
export default new recuritMentPage();