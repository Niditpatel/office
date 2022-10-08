// class helloworld{
//     constructor(public message:string){}
// }
// var hello = new helloworld('hello typescript');
// console.log(hello.message);

// let mystring = "hello this is string";
// // mystring = 12; error 
// function returnnumber(): number{
//     return 34 ;
// }

// let anotherstring = "this is another string ";
// // anotherstring = returnnumber(); error


function getallbooks(){
    let books =[
        {name:'abc',author : 'abcd',available : true},
        {name:'bcd',author : 'bcdd',available : true},
        {name:'cde',author : 'cdef',available : true}
    ];
    return books;
}

function getfirstavailbook(books){
    let numberofbooks = books.length ;
    let firstavail = '';
    for (const availbook of books) {
       
        if(availbook.available){
            firstavail = availbook.name;
            break;
        }
    }
    console.log('total books :' + numberofbooks);
    console.log('first availbook :' + firstavail);
}

const allbooks = getallbooks();
getfirstavailbook(allbooks);