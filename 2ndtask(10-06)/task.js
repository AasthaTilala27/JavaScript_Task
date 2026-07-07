//To check greatest number from 4


var n1 = Number(prompt("Enter Value for N1 : "));
var n2 = Number(prompt("Enter Value for N2 : "));
var n3 = Number(prompt("Enter Value for N3 : "));
var n4 = Number(prompt("Enter Value for N4 : "));

document.querySelectorAll("h2")[0].innerHTML = "Value for N1 : " + n1;
document.querySelectorAll("h2")[1].innerHTML = "Value for N2 : " + n2;
document.querySelectorAll("h2")[2].innerHTML = "Value for N3 : " + n3;
document.querySelectorAll("h2")[3].innerHTML = "Value for N4 : " + n4;

if(n1 > n2)
{
    if(n1 > n3)
    {
        if(n1 > n4)
        {
            document.querySelector('h1').innerHTML = "N1 is Greater";
        }
        else if(n1 == n4)
        {
            document.querySelector('h1').innerHTML = "N1 and N4 are Equal and Greater";
        }
        else
        {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }
    }
    else if(n1 == n3)
    {
        if(n1 > n4)
        {
            document.querySelector('h1').innerHTML = "N1 and N3 are Equal and Greater";
        }
        else if(n1 == n4)
        {
            document.querySelector('h1').innerHTML = "N1, N3 and N4 are Equal and Greater";
        }
        else
        {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }
    }
    else
    {
        if(n3 > n4)
        {
            document.querySelector('h1').innerHTML = "N3 is Greater";
        }
        else if(n3 == n4)
        {
            document.querySelector('h1').innerHTML = "N3 and N4 are Equal and Greater";
        }
        else
        {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }
    }
}
else if(n1 == n2)
{
    if(n1 > n3)
    {
        if(n1 > n4)
        {
            document.querySelector('h1').innerHTML = "N1 and N2 are Equal and Greater";
        }
        else if(n1 == n4)
        {
            document.querySelector('h1').innerHTML = "N1, N2 and N4 are Equal and Greater";
        }
        else
        {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }
    }
    else if(n1 == n3)
    {
        if(n1 == n4)
        {
            document.querySelector('h1').innerHTML = "All Are Equal";
        }
        else
        {
            document.querySelector('h1').innerHTML = "N1, N2 and N3 are Equal and Greater";
        }
    }
    else
    {
        if(n3 > n4)
        {
            document.querySelector('h1').innerHTML = "N3 is Greater";
        }
        else if(n3 == n4)
        {
            document.querySelector('h1').innerHTML = "N3 and N4 are Equal and Greater";
        }
        else
        {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }
    }
}
else
{
    if(n2 > n3)
    {
        if(n2 > n4)
        {
            document.querySelector('h1').innerHTML = "N2 is Greater";
        }
        else if(n2 == n4)
        {
            document.querySelector('h1').innerHTML = "N2 and N4 are Equal and Greater";
        }
        else
        {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }
    }
    else if(n2 == n3)
    {
        if(n2 > n4)
        {
            document.querySelector('h1').innerHTML = "N2 and N3 are Equal and Greater";
        }
        else if(n2 == n4)
        {
            document.querySelector('h1').innerHTML = "N2, N3 and N4 are Equal and Greater";
        }
        else
        {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }
    }
    else
    {
        if(n3 > n4)
        {
            document.querySelector('h1').innerHTML = "N3 is Greater";
        }
        else if(n3 == n4)
        {
            document.querySelector('h1').innerHTML = "N3 and N4 are Equal and Greater";
        }
        else
        {
            document.querySelector('h1').innerHTML = "N4 is Greater";
        }
    }
}