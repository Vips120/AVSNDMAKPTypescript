function Courses(author:string,price:number):string{
      if(author){console.log(author)}
      if(price){console.log(price)}
      return author;
};

let book:(auth:string,courserprice:number) => string;
book = Courses;
 (title:string,totalPages:number) => {
              if(title){console.log(title)}
              if(totalPages){console.log(totalPages)}
              return title;
 };

book('johnSmith', 400);
book('the Dark Knight', 400);
book('Zero to one', 400);

//required,optional,default

function CreateCustomer(username:string,emailId?:string,address:string="Thane") {
 if(username){console.log(username)}
 if(emailId){console.log(emailId)}
 if(address){console.log(address)}
};

CreateCustomer('Manish', 'manish@gmail.com');