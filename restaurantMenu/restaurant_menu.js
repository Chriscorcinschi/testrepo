const CURRENCY = '€'

const breakfastMenu = [
    {name: 'Pancakes', price: 12 },
    {name: 'Eggs Benedict', price: 22.99 },
    {name: 'Oatmeal', price: 21.99 }, 
    {name: 'Frittata', price: 5 }
    ];

const mainCourseMenu = [
    { name: 'Steak', price: 25 },
    { name: 'Pasta', price: 18 },
    { name: 'Burger', price: 15 },
    { name: 'Salmon', price: 22 }
];

//ex: const dessertMenu = ['Cake- €7.00', 'Ice Cream- €6.00', 'Pudding- €5.50', 'Fruit Salad- €8.00'];
const dessertMenu = [
    { name: 'Cake', price: 7.40 },
    { name: 'Ice Cream', price: 6 },
    { name: 'Pudding', price: 5.50 },
    { name: 'Fruit Salad', price: 8 }
];



// map array method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => 
    `<p>Item ${index + 1}: ${item.name} - ${CURRENCY}${item.price.toFixed(2)}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// forEach array method
    let mainCourseItem = '';
    mainCourseMenu.forEach((item, index) => { 
    mainCourseItem += `<p>Item ${index + 1}: ${item.name} - ${CURRENCY}${item.price.toFixed(2)}</p>`;
    });
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// for loop array method
    let dessertItem = '';
    for (let i = 0; i < dessertMenu.length; i++) {
        dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i].name} - ${CURRENCY}${dessertMenu[i].price.toFixed(2)} </p>`;
    };
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;
