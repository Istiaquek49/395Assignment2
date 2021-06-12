//forEach()
Array.prototype.myEach = function (callback)
{
    for (let i = 0; i < this.length; i++)
    {
        callback(this[i], i, this);
    }
    return;  
}

//Map()
Array.prototype.myMap = function (callbackFn)
{
    let newArray = [];
    for (let i = 0; i < this.length; i++)//callback on each element
    {
        let counter = callbackFn(this[i], i , this);
        newArray.push(counter);//pushes the element to the newArray
    }
    return newArray;
}

//Object.keys()
function grabKeys(object)
{
    let arr = []; //empty array
    for (element in obj)
    {
        arr.push(element); 
    }
    return arr;//returns the keys of the key value pairs
}

//object.values()
function grabValues(callback)
{
    let newArray = []//empty arry
    for (let items in callback)
    {
      newArray.push(callback[items]);
    }
    return newArray;//returns the values of the key value pairs 
};
