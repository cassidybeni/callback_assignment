//Question 1
const caller = (cb) => {
    cb()
}

const sayHello = () => {
    console.log(`Hello!`)
}
caller(sayHello)
