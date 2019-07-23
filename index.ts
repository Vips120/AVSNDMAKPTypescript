function UserDetails(){
    let users = [{
        name:'varsha',
        password: 'v@123',
        emailId:'v@gmail.com',
        location: userlocation.ind,
        avl:true
    },
    {
        name:'krish',
        password: 'krish@123',
        emailId:'kr@gmail.com',
        location:userlocation.eng,
        avl:true
    },
    {
        name:'manish',
        password: 'manish@123',
        emailId:'manish@yahoo.com',
        location: userlocation.aus,
        avl:true
    },
    {
        name:'darsh',
        password: 'd@123',
        emailId:'d@gmail.com',
        location:userlocation.nz,
        avl:false
    }
];
return users;
};

enum userlocation {'ind' , 'eng', 'nz', 'aus'};
  function getUserLocationDetails(userArea:userlocation):Array<string>{
   console.log(`country: ${userlocation[userArea]}`);
   let userData:string[] = [];
   let details = UserDetails();
   for(let d of details){
       if(d.avl){
           userData.push(d.name,d.password);
           break;
       }
   };
   console.log(userData);
   return userData;
  };
  let details = 
  getUserLocationDetails(userlocation.ind);
  details.forEach((val,idx) => console.log(++idx + "-"+val));





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
let first = ['angular', 'typescript', 'javascript'];
let second = ['oracle', 'sql', 'mysql'];
// let third = first.concat(second);
let third = [...first,'a', ...second,'c'];
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

