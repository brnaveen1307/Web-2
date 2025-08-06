function calculateArithmetic(a, b, arithmeticFinalFunction)
{
    const ans = arithmeticFinalFunction(a, b);
    return ans;
}

function sum(a, b)
{
    return a + b;
}

const value = calculateArithmetic(3, 4, sum);
console.log(value);