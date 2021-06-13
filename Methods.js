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

//filter()
Array.prototype.myFilter = function (callbackFn)
{
    let newArray = [];
    for (let i = 0; i < this.length; i++)
    {
        if (callbackFn(this[i]))
        {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

//some() aka any()
Array.prototype.mySome = function (callback)//callbackFn not listed in parameters
{
    for (let i = 0; i < this.length; i++)
    {
        if (callback(this[i]))
        {
            return true;
        }
    }
    return false;
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

//reduce()
Array.prototype.myReduce = function (callbackFn, accumlator)
{
    if (accumlator == undefined)
    {
        accumlator = 0;
    } 
    for (let i =0; i < this.length; i++)
    {
        accumlator = callbackFn(accumlator,this[i],i,this);    
    }
    return accumlator;
};

//includes()
Array.prototype.myIncludes = function (markElement, findElement = 0)
{
    for (let i = findElement; i < this.length; i++)
    {
        if (this[i] === markElement)//if the exact same
        {
            return true;//yes it's in the array
        }
    }
    return false;
};

//indexOf()
Array.prototype.myIndexOf = function (markElement, findElement = 0)
{
    for (let i = findElement; i < this.length; i++)
    {
        if(this[i] === markElement)//if the exact same
        {
            return i;//return index when found 
        }
    }
    return -1;//return -1 DNE
}

//push()
Array.prototype.myPush = function (ArrElement, plusElements)
{
    ArrElement[ArrElement.length] = plusElements;
    return ArrElement.length;
};

//lastIndexOf()
Array.prototype.myLastIndexOf = function (markElement, findElement) 
{
    for (let i = markElement.length-1 ; i >= 0; i--)//starts from the back to the front
    {
        if(markElement[i] === findElement)
        {
            return i;
        }
    }
    return -1;
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
