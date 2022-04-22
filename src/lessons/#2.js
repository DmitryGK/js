const students = [
    {
        name: 'Ignat',
        age: 23,
        isMarried: true,
        scores: 33
    },
    {
        name: 'Dmitry',
        age: 33,
        isMarried: false,
        scores: 12
    },
    {
        name: 'Sveta',
        age: 23,
        isMarried: false,
        scores: 77
    },
    {
        name: 'Kirill',
        age: 34,
        isMarried: true,
        scores: 43
    }
]

const names = []

for(let i = 0; i < students.length; i++){
    const result = students[i].name
    names[i] = result
}

const sts = []

for(let i = 0; i < students.length; i++){
    const result = {...students[i], scores: students[i].scores + 10}
    sts[i] = result

}

const myMap = (arraySrc, mapFn) => {
    const arrayRes = []
    for(let i = 0; i < arraySrc.length; i ++){

        const result = mapFn(arraySrc[i])
        arrayRes[i] = result
    }

    return arrayRes
}