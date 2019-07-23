function Courses(author, price) {
    if (author) {
        console.log(author);
    }
    if (price) {
        console.log(price);
    }
    return author;
}
;
var book;
book = Courses;
(function (title, totalPages) {
    if (title) {
        console.log(title);
    }
    if (totalPages) {
        console.log(totalPages);
    }
    return title;
});
book('johnSmith', 400);
book('the Dark Knight', 400);
book('Zero to one', 400);
//required,optional,default
function CreateCustomer(username, emailId, address) {
    if (address === void 0) { address = "Thane"; }
    if (username) {
        console.log(username);
    }
    if (emailId) {
        console.log(emailId);
    }
    if (address) {
        console.log(address);
    }
}
;
CreateCustomer('Manish', 'manish@gmail.com');
