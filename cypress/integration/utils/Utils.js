import {JSDOM} from "jsdom"
class Util {
    serverId = 'zw6ahich'; 


    generatePasscode(testEmail,verificationcodeText)  {
        let number;
        cy.mailosaurGetMessage(this.serverId, {
            sentTo: testEmail
        }).then(email => {
          // expect(email.subject).to.equal('POC');
          //  passwordResetLink = email.text.links[0].href;
          expect(email.subject).to.equal('KidsLoop B2C - POC account email verification code');
          const dom = new JSDOM(email.html.body);
          const el = dom.window.document.querySelector('#BodyPlaceholder_UserVerificationEmailBodySentence2');
          const matches = /([0-9]{6})$/.exec(el.textContent);
          number = matches[0]; 
          cy.log(number);  
          cy.get(verificationcodeText)
          .should('be.visible')
          .type(number);            
        });
     };

     generatePasscodeFromSMS(phoneNumber,verificationcodeText)  {
        cy.wait(10000);
        cy.mailosaurGetMessage(this.serverId, {
            sentTo: "12692304118"
        }, {
             receivedAfter: new Date('2021-12-12T00:00:00Z')
         }).then(phone => {
          cy.log("body " , phone.text.body);
          const regEx = new RegExp('([0-9]{6})')
          const matches = regEx.exec(phone.text.body)
          //const matches = /([0-9]{6})$/.exec(phone.text.body);
         // number = ; 
          cy.log(matches[0]);  
          cy.get(verificationcodeText)
          .should('be.visible')
          .type(matches[0]);            
        });
     };

}

export const util = new Util();