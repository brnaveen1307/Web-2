//ParseInt
function ParseInt(value)
{
    console.log("Original Value : " + value);
    let result = parseInt(value);
    console.log("After ParseInt : " + result);
}

ParseInt("42");
ParseInt("42px");
ParseInt("3.14");

//PasreFloat
function ParseFloat(value)
{
    console.log("Original value:" + value);
    result = parseFloat(value);
    console.log("After ParseFloat : " + result);
}

ParseFloat("3.14");
ParseFloat("42");
ParseFloat("42px");