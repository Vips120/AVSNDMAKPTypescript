import {Journal} from './journal';
import * as allRefer from './userRegister';
//start class statement
export class Courses extends Journal implements allRefer.Ilogin {
    public title:string;
    protected price:number;
    static email:string;
    static area:string;
    public day:string;
    public userId:string;
    public emailId:string;
    public userLogin
    constructor(private author:string){
        super();
        console.log('Hello world!');
        // this.author = auth;
    };
 public publishedDate(){
     console.log('published on jan');
     if(this.userId){console.log(this.userId)}
     if(this.emailId) {console.log(this.emailId)}
 };

 public CreateJournal(){
  if(this.day){console.log(this.day)}
 };
 protected JK(){
if(this.title){
    console.log(this.title);
};
 };

 get J(){
     return this.JK();
 };

    public courseTitle():string{
        let data = this.title;
        if(this.title){console.log(data)}
        return this.title;
    };

    private courseAuthor(){
        if(this.author){
            console.log(this.author);
        };
        if(this.price && Courses.email){
            //template string writing
            console.log(`price : ${this.price} and email: ${Courses.email}`);
        }
         else {
            console.log(`email: ${Courses.email}`);
        }
    };

      static AuthorAddress(){
          if(Courses.area){
            console.log(`AUthor area: ${Courses.area}`);
          }
      }

//get 
get coursePrice(){
    return this.price;
};

//set 
set coursePrice(coursePrice:number){
this.price = coursePrice;
};

//using getter for private method courseAuthor
get Author(){
    return this.courseAuthor();
};

}; //end class statement
///////////////////////////////////////////create a new instance//////////////////////
// let course:Courses = new Courses('Manish');
// course.title = 'Zero to one';
// course.coursePrice = 400;
// Courses.email = 'manyabhai@gmail.com';
// Courses.area = "THane";
// // course.author = '';
// course.courseTitle();
// // course.courseAuthor();
// course.Author;
// Courses.AuthorAddress();