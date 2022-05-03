var firstBox = document.getElementById("firstBox");
var secondBox = document.getElementById('secondBox');
var thirdBox = document.getElementById('thirdBox');
var firstArray = [];
var secondArray = [];
var thirdArray = [];
var checkArray;


function Init()
{
    firstArray.length = 0;
    secondArray.length = 0;
    thirdArray.length = 0;

    firstArray.push(document.createTextNode("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"));
    firstArray.push(document.createTextNode("🟨🟨🟨🟨🟨🟨🟨🟨🟨"));
    firstArray.push(document.createTextNode("🟩🟩🟩🟩🟩🟩🟩"));
    firstArray.push(document.createTextNode("🟦🟦🟦🟦🟦"));
    firstArray.push(document.createTextNode("🟪🟪🟪"));
    firstArray.push(document.createTextNode("⬛"));
    
    console.log(firstArray.lenth);
    console.log(secondArray.lenth);
    Draw();
}
function Draw()
{
    while(firstBox.firstChild)
        firstBox.removeChild(firstBox.firstChild);

    while(secondBox.firstChild)
        secondBox.removeChild(secondBox.firstChild);

    while(thirdBox.firstChild)
        thirdBox.removeChild(thirdBox.firstChild);

    for(var i = 0; i < firstArray.length; i++)
    {
        firstBox.appendChild(firstArray[i]);
        firstBox.appendChild(document.createElement('br'));
    }

    for(var i = 0; i < secondArray.length; i++)
    {
        secondBox.appendChild(secondArray[i]);
        secondBox.appendChild(document.createElement('br'));
    }

    for(var i = 0; i < thirdArray.length; i++)
    {
        thirdBox.appendChild(thirdArray[i]);
        thirdBox.appendChild(document.createElement('br'));
    }
}
function ClickFirstBox()
{
 
    if(checkArray != null)
    {
        if(checkArray == firstArray)
        {
            alert("x")
        }
        else
        {
            if(firstArray.length == 0 || firstArray[firstArray.length - 1].length >
                 checkArray[checkArray.length - 1].length)
            {
                firstArray.push(checkArray.pop());
                checkArray = null;
                Draw();
            }
            else
            {
                alert("x")
                checkArray = null;
            }
        }
    }
    else
    {
        if(firstArray.length > 0)
        {
            checkArray = firstArray;
        }
        else
            alert("x")
    } 
}
function ClickSecondBox()
{
 
    if(checkArray != null)
    {
        if(checkArray == secondArray)
        {
            alert("x")
        }
        else
        {
            if(secondArray.length == 0 || secondArray[secondArray.length - 1].length >
                 checkArray[checkArray.length - 1].length)
            {
                secondArray.push(checkArray.pop());
                checkArray = null;
                Draw();
            }
            else
            {
                alert("x")
                checkArray = null;
            }
        }
    }
    else
    {
        if(sceondArray.length > 0)
        {
            checkArray = secondArray;
        }
        else
            alert("x")
    }
}
function ClickThirdBox()
{
 
    if(checkArray != null)
    {
        if(checkArray == thridArray)
        {
            alert("x")
        }
        else
        {
            if(thirdArray.length == 0 || thirdArray[thirdArray.length - 1].length >
                 checkArray[checkArray.length - 1].length)
            {
                thirdArray.push(checkArray.pop());
                checkArray = null;
                Draw();
            }
            else
            {
                alert("x")
                checkArray = null;
            }
        }
    }
    else
    {
        if(thirdArray.length > 0)
        {
            checkArray = thirdArray;
        }
        else
            alert("x")
    }
            
}