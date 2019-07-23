// let course = function(author:string,price:number):string {
//     if(author){console.log(author)}
//     if(price){console.log(price)}
//     return author;
// };
// course('manish', 2000);

let course =(author:string,price?:number):string => {
    if(author){console.log(author)}
    if(price){console.log(price)}
    return author;
};
course('manish');
//without parameter
let title = () => console.log('hello');
let email = (mail:string) => console.log(mail);