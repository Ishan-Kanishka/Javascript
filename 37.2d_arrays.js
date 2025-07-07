//2D arrays = An array of arrays
//So in this example, we'll create a grocery shoppping list and that grocery shopping list will
//be made up  of seperate individual lists

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =["eggs", "chicken", "fish"];
//This will be our two dimensional array (2d array)
let groceryList = [fruits, vegetables, meats];

groceryList[2][2] = "steak";

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
    
}
