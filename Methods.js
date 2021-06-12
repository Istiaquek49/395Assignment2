//forEach()
Array.prototype.myEach = function (callbackFn)
{
    for (let i = 0; i < this.length; i++)
    {
        callbackFn(this[i], i, this);
    }
    return;
};

//Map()
Array.prototype.myMap = function (callbackFn) {
    let newArray = [];
    for (let i = 0; i < this.length; i++)//callback on each element
    {
        let counter = callbackFn(this[i], i, this);
        newArray.push(counter);//pushes the element to the newArray
    }
    return newArray;
};

//every()
Array.prototype.myEvery = function (callbackFn)
{
    for (i = 0; i < this.length; i++)//goes through all elements
    {
        if (callbackFn(this[i]) == false)//if equal to false 
        {
            return false;//return false
        }
    }
    return true;//otherwise is true
};

//push()
Array.prototype.myPush = function (ArrElement, plusElements)
{
    ArrElement[ArrElement.length] = plusElements;
    return ArrElement.length;
};

//Object.keys()
function grabKeys(object)
{
    let arr = []; //empty array
    for (element in obj)
    {
        arr.push(element); 
    }
    return arr;//returns the keys of the key value pairs
};

//object.values()
function grabValues(callbackFn)
{
    let newArray = []//empty arry
    for (let items in callback)
    {
      newArray.push(callbackFn[items]);
    }
    return newArray;//returns the values of the key value pairs 
};
