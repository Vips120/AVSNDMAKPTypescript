"use strict";
exports.__esModule = true;
//start class statement
var Courses = /** @class */ (function () {
    function Courses(author) {
        this.author = author;
        console.log('Hello world!');
        // this.author = auth;
    }
    ;
    Courses.prototype.courseTitle = function () {
        var data = this.title;
        if (this.title) {
            console.log(data);
        }
        return this.title;
    };
    ;
    Courses.prototype.courseAuthor = function () {
        if (this.author) {
            console.log(this.author);
        }
        ;
        if (this.price && Courses.email) {
            //template string writing
            console.log("price : " + this.price + " and email: " + Courses.email);
        }
        else {
            console.log("email: " + Courses.email);
        }
    };
    ;
    Courses.AuthorAddress = function () {
        if (Courses.area) {
            console.log("AUthor area: " + Courses.area);
        }
    };
    Object.defineProperty(Courses.prototype, "coursePrice", {
        //get 
        get: function () {
            return this.price;
        },
        //set 
        set: function (coursePrice) {
            this.price = coursePrice;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Courses.prototype, "Author", {
        //using getter for private method courseAuthor
        get: function () {
            return this.courseAuthor();
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Courses;
}());
exports.Courses = Courses;
; //end class statement
///////////////////////////////////////////create a new instance//////////////////////
var course = new Courses('Manish');
// course.title = 'Zero to one';
// course.coursePrice = 400;
// Courses.email = 'manyabhai@gmail.com';
// Courses.area = "THane";
// // course.author = '';
// course.courseTitle();
// // course.courseAuthor();
// course.Author;
// Courses.AuthorAddress();
