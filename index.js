function UserDetails() {
    var users = [{
            name: 'varsha',
            password: 'v@123',
            emailId: 'v@gmail.com',
            location: userlocation.ind,
            avl: true
        },
        {
            name: 'krish',
            password: 'krish@123',
            emailId: 'kr@gmail.com',
            location: userlocation.eng,
            avl: true
        },
        {
            name: 'manish',
            password: 'manish@123',
            emailId: 'manish@yahoo.com',
            location: userlocation.aus,
            avl: true
        },
        {
            name: 'darsh',
            password: 'd@123',
            emailId: 'd@gmail.com',
            location: userlocation.nz,
            avl: false
        }
    ];
    return users;
}
;
var userlocation;
(function (userlocation) {
    userlocation[userlocation["ind"] = 0] = "ind";
    userlocation[userlocation["eng"] = 1] = "eng";
    userlocation[userlocation["nz"] = 2] = "nz";
    userlocation[userlocation["aus"] = 3] = "aus";
})(userlocation || (userlocation = {}));
;
function getUserLocationDetails(userArea) {
    console.log("country: " + userlocation[userArea]);
    var userData = [];
    var details = UserDetails();
    for (var _i = 0, details_1 = details; _i < details_1.length; _i++) {
        var d = details_1[_i];
        if (d.avl) {
            userData.push(d.name, d.password);
            break;
        }
    }
    ;
    console.log(userData);
    return userData;
}
;
var details = getUserLocationDetails(userlocation.ind);
details.forEach(function (val, idx) { return console.log(++idx + "-" + val); });
// function CurrentUserDetails(data:any):string{
//  let storeCurrentUserDetails:string;
//  for(let d of data){
//      if(d.avl){
//          storeCurrentUserDetails = d.name + "-" + d.emailId;
//          break;
//      };
//  };
//   console.log(storeCurrentUserDetails);
//   return storeCurrentUserDetails;
// };
// const details = UserDetails();
// CurrentUserDetails(details);
//spread operators
var first = ['angular', 'typescript', 'javascript'];
var second = ['oracle', 'sql', 'mysql'];
// let third = first.concat(second);
var third = first.concat(['a'], second, ['c']);
console.log(third);
// 
// function AddUser(name){
// console.log(name);
// return name;
// }
// function xyz(){
// let d=AddUser('manish');
// console.log(d);
// }
// xyz();
// class Users{
//     public firstname:string;
//     public lastname:string;
//     userDetails(){
//      if(this.firstname){
//      }
//     };
//     details(){
//         this.userDetails();
//     }
// }
// let user = new Users();
// user.userDetails();
