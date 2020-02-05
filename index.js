// Add your functions here

function map(array, fn) {
    let newArray = []
    for ( let i = 0; i < array.length; i++ ) {
        newArray.push(fn(array[i]))
    }
    return newArray
}

function reduce(en, es, zh) {
    let abc = (!!zh) ? zh : en[0]
    let i = (!!zh) ? 0 : 1

    for ( ; i < en.length; i++ ) {
        abc = es(en[i], abc)
    }
    return abc
}