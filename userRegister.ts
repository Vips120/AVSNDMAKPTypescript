export interface IuserRegister {
    firstname:string;
    lastname:string;
    price:number;
    address?(area:string):string;
    userLogin?:Ilogin
};

// let a:Ilogin

export interface Ilogin {
  userId?:string;
  emailId?:string
};
export interface Icourses {
    title:string;
    priceTag:number;
};

export interface Ialldata extends IuserRegister,Icourses {}


let currentUser: Ialldata= {
    firstname: 'manish',
    lastname: 'unknown',
    price:800,
    address(area) {
        console.log(area);
        return area;
    },
    userLogin: {
           userId: 'vs120',
           emailId: 'vs@gmail.com'
    },
    title: 'master in typescript',
    priceTag:400
}

console.log(currentUser.firstname);
console.log(currentUser.userLogin.userId);
currentUser.address('thane');

function RegisterUser(user: IuserRegister){
    console.log(`firstname: ${user.firstname} and lastname: ${user.lastname}`);
};
RegisterUser(currentUser);