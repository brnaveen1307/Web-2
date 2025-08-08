function square(n)
{
    return n * n;
}

function cube(n)
{
    return n * n * n;  
}

function sumOfSomething(a, b, callback)
{
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}


console.log(sumOfSomething(1, 3, cube));

console.log(sumOfSomething(1, 3, square));