function Allusers(){
    let users = [{
        name:'varsha',
        password: 'v@123',
        emailId:'v@gmail.com',
        avl:true
    },
    {
        name:'krish',
        password: 'krish@123',
        emailId:'kr@gmail.com',
        avl:true
    },
    {
        name:'manish',
        password: 'manish@123',
        emailId:'manish@yahoo.com',
        avl:true
    },
    {
        name:'darsh',
        password: 'd@123',
        emailId:'d@gmail.com',
        avl:false
    }
];
return users;
};

function GetTitles(author:string):Array<string>;
function GetTitles(avl:boolean):Array<string>;
function GetTitles(bookproperty:any):Array<string> {
    let users = Allusers();
    let storeuser:string[] = [];
  if(typeof bookproperty == 'string'){
  for(let user of users){
   if(user.avl){
       storeuser.push(user.name,user.emailId);
       break;
   }
  }
  } 
  else if(typeof bookproperty == 'boolean'){
         for(let user of users){
             if(user.avl){
                 storeuser.push(user.password);
                 break;
             }
         }
  } else {
      console.log('not found such kind of data');
  }
  console.log(storeuser);
  return storeuser;
}

GetTitles('vipul');