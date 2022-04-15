

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#welcome');
    }
    // get title(){
    //     return $()
    // }
    get verifyAddUserPage(){
        return $('#UserHeading')
    }
    get verifyDeleteButtonAfterAddUser(){
        return $('#btnDelete')
    }
     get verifyNotifiation(){
         return $('#validationMsg')
     }
     get verifyUserHaveNoTimeSheetYet(){
        return $('//div[@class="message warning"]')
    }
    get verifyRecruitmentTab(){
        return $('.head')
    }
}

export default new SecurePage();
