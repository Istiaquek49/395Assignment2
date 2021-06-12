//forEach()
Array.prototype.myEach = function (callback)
{
    for (let i = 0; i < this.length; i++)
    {
        callback(this[i], i, this);
    }
    return;  
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
