import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import addUserPage from '../pageobjects/addUser.page';
import deleteUserPage from '../pageobjects/deleteUser.page';
import securePage from '../pageobjects/secure.page';
import RecruitmentPage from '../pageobjects/recruitMent.page';
import AddTimeSheetPage from '../pageobjects/addTimeSheet.page';



describe('Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        browser.maximizeWindow();
    })
    it('verify the title', async() =>{

        await expect(browser).toHaveTitle('OrangeHRM');
    })
    it('checks the links which is available on login page',async()=>{
        await LoginPage.checkLinks();
    })
    it('user fill the valid userName and password', async()=>{

        await LoginPage.enterUsername('Admin')
        await LoginPage.enterPasswordName('admin123')
    })
    it('click pn save button',async()=>{
        await LoginPage.clickOnLoginButton();
    })
    it('verify the user on welcome page', async()=>{

        await expect(SecurePage.flashAlert).toHaveTextContaining(
             'Welcome');
    });
});

describe('add user in application', () =>{
    it('add user', async () =>{
        await addUserPage.addUser();
    })
    it('verify the user should be on add user page', async() =>{
        await expect(SecurePage.verifyAddUserPage).toHaveText('Add User');

    })
    it('add values in user page', async()=>{
     const value = await addUserPage.addRandomUserName('Aaaa');
        await addUserPage.addEmpName('Jasmine Morgan','admin123','admin123');
    })
    it('click on save button', async()=>{
        await addUserPage.clickOnSavebutton();
        await deleteUserPage.addUserForDelete(value);
    })
    
    });


describe('delete a user', async()=>{
   
    it('click on search for delete', async()=>{
          await deleteUserPage.clickOnSearchButton();
         await deleteUserPage.clickOnCheckBox();
    })
    it('click on delete button', async()=>{
   
    await deleteUserPage.clickOnDeleteButton();
   });


describe('add a time sheet',()=>{
    it('click on time button and fill the emp details',async()=>{
        await AddTimeSheetPage.clickOnTimeButton();
        await AddTimeSheetPage.verifyTimeTabAndEnterEmpName('Orange Test');
    })
    it('click on viwe button',async()=>{
        await AddTimeSheetPage.clickOnViewButton();
    })
    it('verify the user on add time sheet page', async()=>{
        await expect(SecurePage.verifyUserHaveNoTimeSheetYet).toHaveTextContaining('No Timesheets Found');
    })
    it('click on time sheet button', async()=>{
        await AddTimeSheetPage.clickOnAddTimeSheetButton();
    })
    it('add date', async()=>{
        await AddTimeSheetPage.pickDate('2022-04-20');
    })
    it('click on add to submitted the time sheet', async()=>{
        await AddTimeSheetPage.clickOnAddTimeSheetAfterSelectDate();
    })
    it('verify the notification after add button',async()=>{
        await expect(SecurePage.verifyNotifiation).toHaveTextContaining('Failed to Create: Future Timesheets Not Allowed');
    })
});

});


  describe('add recruitment',()=>{
      it('click on recruitment icon',async()=>{
          await RecruitmentPage.clickOnRecuritmentButton();
      })
      it('verify the user on recruitment page', async()=>{
          await expect(SecurePage.verifyRecruitmentTab).toHaveTextContaining('Candidates');
      })
      it('selct jon title from dropdown', async()=>{
          await RecruitmentPage.selectJobTitle();
      })
      it('add random user name',async()=>{
          await RecruitmentPage.addRandomUserName('Aaaa');
      })
      it('select status',async()=>{
          await RecruitmentPage.selectStatus('Shortlisted');
      })
      it('enter value in keyword field',async()=>{
          await RecruitmentPage.enterValueKeywordField('yes');
      })
      it('select method of application', async()=>{
          await RecruitmentPage.selectMethodOfApplication('Manual');
      })

  });
 




