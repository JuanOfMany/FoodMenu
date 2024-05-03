"use strict"

function handleDropChange(event){
    let options = document.getElementById('options');
    options.options.length = 0;
    let value = event.target.value;
    for (let i = 0; i < menu[value].length; i++) {
        let newOption = new Option(menu[value][i]);
        options.appendChild(newOption);
    }
}

window.addEventListener("load", () => {
    console.log('hello world')
    let select = document.getElementById('s');
    let keys = Object.keys(menu);
    for (let i  = 0; i < keys.length; i++){
        let newOption = new Option(keys[i]);
        select.appendChild(newOption);
    }
    select.addEventListener("change", handleDropChange)
})

let menu = {
    drinks : [
    "Water", "Tea", "Sweet Tea",
    "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees : [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate"
    ],
    desserts: [
    "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
    };

