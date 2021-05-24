const isEven=function(numb) {
    if (numb === 0)
    {
    return true;
    }
    else if (numb===1)
    {
    return false;
    }
    else {
    return isEven(numb-2);
    }
    }
    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(-1));
  