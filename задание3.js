function sum(x) {
    return function(y) {
        return x + y;
    };
}

let sumNum = sum(7);

console.log( sumNum(0), sumNum(1), sumNum(2) );

console.log( sum(1)(2), sum(2)(2), sum(23)(2) );
