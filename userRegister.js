;
var currentUser = {
    firstname: 'manish',
    lastname: 'unknown',
    price: 800,
    address: function (area) {
        console.log(area);
        return area;
    }
};
console.log(currentUser.firstname);
currentUser.address('thane');
