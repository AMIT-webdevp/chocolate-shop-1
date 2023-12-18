 chocolates = [
    { name: 'Milk Chocolate', price: 100 },
    { name: 'Dark Chocolate', price: 10 },
    { name: 'White Chocolate', price: 20 },
    { name: 'Bournville Chocolate', price: 30 },
    { name: 'Bittersweet Chocolate', price: 50 },
    { name: 'Ghirardelli Chocolate ', price: 10 },
    { name: 'Lindt Chocolate ', price: 5.8 },
    { name: 'Lotus Chocolate', price: 3.5 },
    { name: 'Lotus Chocolate', price: 2.5 },
    { name: 'Mars bar Chocolate', price: 5 },
    { name: 'Ferrero Rocher Chocolate', price: 2 },
    { name: 'Toblerone Chocolate', price: 60 },
    { name: 'KitKat Chocolate', price: 2 },
    // Add more chocolate options as needed
];

let selectedChocolates = [];

function Updatecololate() {
    const orderSummary = document.getElementById('orderSummary');
    const totalPriceitem = document.getElementById('totalPrice');

    orderSummary.innerHTML = '';
    let totalPrice = 0;

    selectedChocolates.forEach(chocolate => {
        const listItem = document.createElement('li');
        listItem.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
        orderSummary.appendChild(listItem);
        totalPrice += chocolate.price;
    });

    totalPriceitem.textContent = totalPrice.toFixed(2);
}


//Selection of chocolate 
function cololateSelection(index) {
    const chocolateItem = document.getElementById(`chocolate_${index}`);
    const chocolate = chocolates[index];

    if (chocolateItem.classList.contains('selected')) {
        
        const selectedIndex = selectedChocolates.findIndex(ch => ch.name === chocolate.name);
        selectedChocolates.splice(selectedIndex, 1);
        chocolateItem.classList.remove('selected');
    } else {
        // Select
        if (selectedChocolates.length < 8) {
            selectedChocolates.push(chocolate);
            chocolateItem.classList.add('selected');
        }
        // Alert when you try to select more than 8 item 
         else {
            alert('You not pick more than 8 chocolates.');
        }
    }

    Updatecololate();
}

function init() {
    const chocolateList = document.getElementById('chocolateList');

    chocolates.forEach((chocolate, index) => {
        const chocolateItem = document.createElement('div');
        chocolateItem.className = 'chocolateItem';
        chocolateItem.id = `chocolate_${index}`;
        chocolateItem.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
        chocolateItem.addEventListener('click', () => cololateSelection(index));

        chocolateList.appendChild(chocolateItem);
    });
}

document.addEventListener('DOMContentLoaded', init);
