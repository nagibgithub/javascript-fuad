const phones = [
    {brand: "iPhone", camera: "32mp", price: 30000},
    {brand: "Redmi", camera: "32mp", price: 40000},
    {brand: "Oppo", camera: "32mp", price: 20000},
    {brand: "Nokia", camera: "32mp", price: 25000},
    {brand: "Walton", camera: "32mp", price: 35000}
];

function chipeastPhone(phones) {
    let chipBrand = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (chipBrand.price > phone.price) {
            chipBrand = phone;
        }
    }
    return chipBrand;
}

let myPhone = chipeastPhone(phones);
console.log(myPhone);