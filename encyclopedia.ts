import {Courses} from './class';
class EncycloPedia extends Courses {
constructor(public price1:number, private auth:string){
    super(auth);
};
  public CourseUser() {
      if(this.title){console.log(`Title : ${this.title}`)}
      if(this.price) {console.log(`price: ${this.price}`)}
  };
public publishedDate(){
    console.log('published on feb');
};

  public coursePublishDetails(){
      super.publishedDate();
  }
}

let Pedia = new EncycloPedia(200,'jackma');
Courses.email = 'jack@gmail.com';
Pedia.emailId = 'vs@gmail.com';
Pedia.userId = 'vs@123';
Pedia.coursePrice = 500;
Pedia.title = 'Something Strange';
Pedia.day = "Monday";
Pedia.publishedDate();
Pedia.Author;
Pedia.CourseUser();
Pedia.coursePublishDetails();
Pedia.CreateJournal();
Pedia.J;
