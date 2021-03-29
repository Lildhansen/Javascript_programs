exports.sumFunction = (num1,num2) =>
{
    //result = num1+num2
    //return "The result is: "+ result;
    return num1+num2;
}

exports.productOfSumNums = (num1,num2,num3,num4) =>
{
    return this.sumFunction(num1,num2) * this.sumFunction(num3,num4);
}