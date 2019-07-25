//start class statement
export class Courses {
    public title:string;
    private price:number;
    static email:string;
    static area:string;
    constructor(private author:string){
        console.log('Hello world!');
        // this.author = auth;
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
let course:Courses = new Courses('Manish');
// course.title = 'Zero to one';
// course.coursePrice = 400;
// Courses.email = 'manyabhai@gmail.com';
// Courses.area = "THane";
// // course.author = '';
// course.courseTitle();
// // course.courseAuthor();
// course.Author;
// Courses.AuthorAddress();