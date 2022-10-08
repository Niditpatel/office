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
function getallbooks() {
    var books = [
        { name: 'abc', author: 'abcd', available: true },
        { name: 'bcd', author: 'bcdd', available: true },
        { name: 'cde', author: 'cdef', available: true }
    ];
    return books;
}
function getfirstavailbook(books) {
    var numberofbooks = books.length;
    var firstavail = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var availbook = books_1[_i];
        if (availbook.available) {
            firstavail = availbook.name;
            break;
        }
    }
    console.log('total books :' + numberofbooks);
    console.log('first availbook :' + firstavail);
}
var allbooks = getallbooks();
getfirstavailbook(allbooks);
