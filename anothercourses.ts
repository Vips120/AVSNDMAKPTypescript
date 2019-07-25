import {Courses} from './class';
class AnotherCourses {
    constructor(){};
    public CurrentuserAuthorInfo(){
        Courses.area = 'Kalyan';
        Courses.AuthorAddress();
    };
}

let anotherMember = new AnotherCourses();
anotherMember.CurrentuserAuthorInfo();
