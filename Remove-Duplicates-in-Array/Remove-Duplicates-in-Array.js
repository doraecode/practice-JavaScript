const names = [
    'John',
    'Jane',
    'John',
    'Jimmy',
    'Jane',
];
const uniqueNamesOption1 = [...new Set(names)]; // option1

const uniqueNamesOption2 = names.reduce((result, element) => { //option2
    return result.includes(element) ? result : [...result, element];
}, []);

const uniqueNamesOption3 = names.filter((element, index) => { //option3
    return names.indexOf(element) === index;
});
console.log(uniqueNamesOption1)
console.log(uniqueNamesOption2)
console.log(uniqueNamesOption3)

