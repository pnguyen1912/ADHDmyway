import {
  Injectable
} from '@angular/core';
import * as AWSCognito from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  private pool_data = {
    UserPoolId: "us-east-2_o28qLOgCy",
    ClientId: "5d8q11adkbtlsvofefph5t3esg"
  }
  public userPool = new AWSCognito.CognitoUserPool(this.pool_data);

  constructor() {}

  signUp(email, password) {
    return new Promise((resolved, reject) => {
      let userAttribute = [];
      userAttribute.push(...[new AWSCognito.CognitoUserAttribute({
        Name: "email",
        Value: email
      })]);

      this.userPool.signUp(email, password, userAttribute, null, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolved(result);
        }
      })
    })
  }


  confirmUser(verificationCode, userName) {
    return new Promise((resolved, reject) => {
      const cognitoUser = new AWSCognito.CognitoUser({
        Username: userName,
        Pool: this.userPool
      });

      cognitoUser.confirmRegistration(verificationCode, true, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolved(result);
        }
      });
    });
  }


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
          resolved(result);
        },
        onFailure: err => {
          console.log('user was not authenticated!');
          reject(err);
        },
        newPasswordRequired: userAttributes => {

          userAttributes.email = email;
          delete userAttributes.email_verified;

          cognitoUser.completeNewPasswordChallenge(password,

            userAttributes, {

              onSuccess: function (result) {},
              onFailure: function (error) {
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