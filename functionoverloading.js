function Allusers() {
    var users = [{
            name: 'varsha',
            password: 'v@123',
            emailId: 'v@gmail.com',
            avl: true
        },
        {
            name: 'krish',
            password: 'krish@123',
            emailId: 'kr@gmail.com',
            avl: true
        },
        {
            name: 'manish',
            password: 'manish@123',
            emailId: 'manish@yahoo.com',
            avl: true
        },
        {
            name: 'darsh',
            password: 'd@123',
            emailId: 'd@gmail.com',
            avl: false
        }
    ];
    return users;
}
;
function GetTitles(bookproperty) {
    var users = Allusers();
    var storeuser = [];
    if (typeof bookproperty == 'string') {
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            if (user.avl) {
                storeuser.push(user.name, user.emailId);
                break;
            }
        }
    }
    else if (typeof bookproperty == 'boolean') {
        for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
            var user = users_2[_a];
            if (user.avl) {
                storeuser.push(user.password);
                break;
            }
        }
    }
    else {
        console.log('not found such kind of data');
    }
    console.log(storeuser);
    return storeuser;
}
GetTitles(true);
