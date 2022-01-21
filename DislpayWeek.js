//Read Number and display the week day
var readlineSync = require("readline-sync");
var week = readlineSync.question("Enter Week:");
//using if else
if(week == 1)
{
    console.log("Monday");
}
else if(week == 2)
{
    console.log("Tuesday");
}
else if(week == 3)
{
    console.log("Wednesday");
}
else if(week == 4)
{
    console.log("Thursday");
}
else if(week == 5)
{
    console.log("Friday");
}
else if(week == 6)
{
    console.log("Saturday");
}
else if(week == 7)
{
    console.log("Sunday");
}
else
{
    console.log("Invalid Input! Please enter week number between 1-7.");
}

//using switch case
switch(week)
{
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number");
        break;
}