import { Injectable } from '@angular/core';
import * as AWSCognito from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  private pool_data = {
    UserPoolId: "us-east-2_ROayxLoZV",
    ClientId: "5a6c7b05cf65ommo4jcmsalis7"
    }


  public userPool = new AWSCognito.CognitoUserPool(this.pool_data);
  
  
  constructor() { }


  signUp(email,password){
    return new Promise((resolved, reject) => {
      let userAttribute = []; // an array
      
      // now we push a cognito attribute into our userAttribute array
      userAttribute.push(...
            [new AWSCognito.CognitoUserAttribute({Name: "email", Value: email})]
      
      );
      // we can push more attributes if we have them in AWS
      // for instance, if I had nickname, I would also push:
      // [new AWSCognito.CognitoUserAttribute({Name: "nickname", Value:
      // nickname})] // the value part would have to be in the function’s
      // parameters
      
      // now for the real signup using our userPool property
      this.userPool.signUp(email, password, userAttribute, null,
      function(err, result) {
      if (err) {
      reject(err);
      } else {
      resolved(result);
      }
      });
      });
  }

  confirmUser(verificationCode, userName) {
   return new Promise((resolved, reject) => {
// get the user using the userName and userPool
const cognitoUser = new AWSCognito.CognitoUser({
Username: userName,
Pool: this.userPool
});

// then confirm the user registration with the verification code
cognitoUser.confirmRegistration(verificationCode, true,
function(err, result) {
if (err) {
reject(err);
} else {
resolved(result);
}
});
});
}
// authed:boolean = false;
authenticate(email, password) {
  return new Promise((resolved, reject) => {

    const authDetails = new AWSCognito.AuthenticationDetails({
    Username: email,
    Password: password
    });
    const cognitoUser = new AWSCognito.CognitoUser({
    
    Username: email,
    Pool: this.userPool
    });
    
    cognitoUser.authenticateUser(authDetails, {
    onSuccess: result => {
    console.log('user was authenticated!');
    // this.authed = true;
    // console.log(this.authed)
    resolved(result);
    },
    onFailure: err => {
    console.log(`user was not authenticated!`);
    reject(err);
    },
    newPasswordRequired: userAttributes => {
    // User was signed up by an admin and must provide new
    // password and required attributes, if any, to complete
    // authentication.
    
    // the api doesn't accept this field back
    userAttributes.email = email;
    delete userAttributes.email_verified;
    
    cognitoUser.completeNewPasswordChallenge(password,
    
    userAttributes, {
    
    onSuccess: function(result) {},
    onFailure: function(error) {
    reject(error);
    }
    });
    }
    });
    });
  }

  getAuthenticatedUser() {
    return this.userPool.getCurrentUser();
    }

}