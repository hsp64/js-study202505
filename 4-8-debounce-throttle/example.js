

function foo(callback) {
    return (greet) => {
        callback(greet);
    };
}

function sayHello(greet) {
    console.log(greet);
}

const bar = foo(sayHello);
bar('안녕?');