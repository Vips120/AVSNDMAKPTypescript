"use strict";
exports.__esModule = true;
;
;
var currentUser = {
    firstname: 'manish',
    lastname: 'unknown',
    price: 800,
    address: function (area) {
        console.log(area);
        return area;
    },
    userLogin: {
        userId: 'vs120',
        emailId: 'vs@gmail.com'
    },
    title: 'master in typescript',
    priceTag: 400
};
console.log(currentUser.firstname);
console.log(currentUser.userLogin.userId);
currentUser.address('thane');
function RegisterUser(user) {
    console.log("firstname: " + user.firstname + " and lastname: " + user.lastname);
}
;
RegisterUser(currentUser);
