//Property Shorthand

const name = 'Larissa'
const userAge = 20

const user = {
    name,
    age: userAge,
    location: 'Bragança'
}

console.log(user)

//Destructuring

const product = {
    label: 'Blue Pen',
    price: 2,
    stock: 23,
    salesPrice: undefined
}

//const label = product.label
//const price = product.price

const {label: productName, stock, rating = 4.3} = product
console.log('Product: '+productName+' Stock: '+stock+' Rating: '+rating)

const transaction = (type, {label, price}) => {
    console.log(type, label, price)
}

transaction('Order', product)