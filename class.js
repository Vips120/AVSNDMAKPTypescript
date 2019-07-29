"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var journal_1 = require("./journal");
//start class statement
var Courses = /** @class */ (function (_super) {
    __extends(Courses, _super);
    function Courses(author) {
        var _this = _super.call(this) || this;
        _this.author = author;
        console.log('Hello world!');
        return _this;
        // this.author = auth;
    }
    ;
    Courses.prototype.publishedDate = function () {
        console.log('published on jan');
    };
    ;
    Courses.prototype.CreateJournal = function () {
        if (this.day) {
            console.log(this.day);
        }
    };
    ;
    Courses.prototype.JK = function () {
        if (this.title) {
            console.log(this.title);
        }
        ;
    };
    ;
    Object.defineProperty(Courses.prototype, "J", {
        get: function () {
            return this.JK();
        },
        enumerable: true,
        configurable: true
    });
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
}(journal_1.Journal));
exports.Courses = Courses;
; //end class statement
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
