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
var class_1 = require("./class");
var EncycloPedia = /** @class */ (function (_super) {
    __extends(EncycloPedia, _super);
    function EncycloPedia(price1, auth) {
        var _this = _super.call(this, auth) || this;
        _this.price1 = price1;
        _this.auth = auth;
        return _this;
    }
    ;
    EncycloPedia.prototype.CourseUser = function () {
        if (this.title) {
            console.log("Title : " + this.title);
        }
        if (this.price) {
            console.log("price: " + this.price);
        }
    };
    ;
    EncycloPedia.prototype.publishedDate = function () {
        console.log('published on feb');
    };
    ;
    EncycloPedia.prototype.coursePublishDetails = function () {
        _super.prototype.publishedDate.call(this);
    };
    return EncycloPedia;
}(class_1.Courses));
var Pedia = new EncycloPedia(200, 'jackma');
class_1.Courses.email = 'jack@gmail.com';
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
