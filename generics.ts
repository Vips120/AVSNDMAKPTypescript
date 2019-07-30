interface Magzine {
    title:string;
};

interface Ibooks<T> {
   author:T;
   publishedDate:T;
   bookPrice:number;
};

function LogAndReturn<T>(thing:T):T {
    console.log(thing);
    return thing;
};
let a:Ibooks<string>= {
    author: 'Manya Bhai',
    publishedDate:'13 june',
    bookPrice: 400
}

LogAndReturn<string>("loading....");
LogAndReturn<number>(400);
// LogAndReturn<Magzine>(a);
LogAndReturn<Magzine>({title:'hello user'});

interface Ilength {
    length:number;
}
function xyz<T extends Ilength>(a:T):T {
console.log(a);
return a;
};

xyz<string>('VipulSingh');
