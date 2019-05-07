// Object property shorthand

const name = 'Ahmad'
const userAge = 22

const user = {
    name,
    age: userAge,
    location: 'Banyumas'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {
//     label: productLabel,
//     stock,
//     rating = 5
// } = product
// console.log(productLabel)
// console.log(stock)
// console.log(5)

const transaction = (type, {
    label,
    stock = 0
} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)