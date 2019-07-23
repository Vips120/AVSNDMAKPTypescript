function Users(){
    let users = [{
        id:1,
        name:'varsha',
        password: 'v@123',
        emailId:'v@gmail.com',
        avl:true
    },
    {    id:2,
        name:'krish',
        password: 'krish@123',
        emailId:'kr@gmail.com',
        avl:true
    },
    {  id:3,
        name:'manish',
        password: 'manish@123',
        emailId:'manish@yahoo.com',
        avl:true
    },
    {   id:4,
        name:'darsh',
        password: 'd@123',
        emailId:'d@gmail.com',
        avl:false
    }
];
return users;
};
 function UserId(id:number){
     let users = Users();
     return users.filter(item => item.id === id )[0]
 };


function CreateCustomerId(...userId:number[]):string[]{
let storeCustomerdetails:string[] = [];
for(let id of userId){
    let custId = UserId(id);
    if(custId.avl){
        storeCustomerdetails.push(custId.name, custId.emailId);
    }
}
console.log(storeCustomerdetails);
return storeCustomerdetails;
}

CreateCustomerId(1,2,3);