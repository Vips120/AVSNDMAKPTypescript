interface IuserRegister {
    firstname:string;
    lastname:string;
    price:number;
    address?(area:string):string;
};

let currentUser: IuserRegister= {
    firstname: 'manish',
    lastname: 'unknown',
    price:800,
    address(area) {
        console.log(area);
        return area;
    }
}

console.log(currentUser.firstname);
currentUser.address('thane');

function RegisterUser(user: IuserRegister){
    console.log(`firstname: ${user.firstname} and lastname: ${user.lastname}`);
}
RegisterUser(currentUser);