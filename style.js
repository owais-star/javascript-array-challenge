
console.clear();

let a;

function studentsByGroup(students) {
    fetch("https://mocki.io/v1/fcf2152e-707f-43c4-bb50-43c2ff29e697")
        .then((response) => response.json())
        .then((data) => (a = data));
}

studentsByGroup();

setTimeout(() => {
    console.log(a);
    const over18 = a.filter(user => user?.age >= 18);
    const result = over18.reduce((obj, cur) => ({ ...obj, [cur.group]: [cur] }), {})
    console.log(result)
}, "2000");

// let b;

// const result = a.reduce((obj, cur) => ({...obj, [cur.group]: cur}), {})



// console.log(result)

/* expected output: arrToObj(payload) ->

{
  "1a": [
    {
      "group": "1a",
      "age": 22,
      "name": "John"
    }
  ],
  "2b": [
    {
      "group": "2b",
      "age": 18,
      "name": "Alise"
    }
  ],
  "2c": [
    {
      "group": "2c",
      "age": 19,
      "name": "Alex"
    }
  ]
}


*/