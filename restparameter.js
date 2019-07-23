function Users() {
    var users = [{
            id: 1,
            name: 'varsha',
            password: 'v@123',
            emailId: 'v@gmail.com',
            avl: true
        },
        { id: 2,
            name: 'krish',
            password: 'krish@123',
            emailId: 'kr@gmail.com',
            avl: true
        },
        { id: 3,
            name: 'manish',
            password: 'manish@123',
            emailId: 'manish@yahoo.com',
            avl: true
        },
        { id: 4,
            name: 'darsh',
            password: 'd@123',
            emailId: 'd@gmail.com',
            avl: false
        }
    ];
    return users;
}
;
function UserId(id) {
    var users = Users();
    return users.filter(function (item) { return item.id === id; })[0];
}
function CreateCustomerId() {
    var userId = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        userId[_i] = arguments[_i];
    }
    var storeCustomerdetails = [];
    for (var _a = 0, userId_1 = userId; _a < userId_1.length; _a++) {
        var id = userId_1[_a];
        var custId = UserId(id);
        if (custId.avl) {
            storeCustomerdetails.push(custId.name, custId.emailId);
        }
    }
    console.log(storeCustomerdetails);
    return storeCustomerdetails;
}
CreateCustomerId(1, 2, 3);
