// let course = function(author:string,price:number):string {
//     if(author){console.log(author)}
//     if(price){console.log(price)}
//     return author;
// };
// course('manish', 2000);
var course = function (author, price) {
    if (author) {
        console.log(author);
    }
    if (price) {
        console.log(price);
    }
    return author;
};
course('manish');
//without parameter
var title = function () { return console.log('hello'); };
var email = function (mail) { return console.log(mail); };
