const person = {
    name : "revanth",
    age : 21
}

const {name,age} = person; //object destructuring
console.log(name,age);


const [item1,item2] = [1,2,3,4];//array destructuring
console.log(item1,item2);

const numberArray = [100,200,300,400];
numberArray.push(500); // const array points to adress only so can be modified.
console.log(numberArray);

const changedPerson = {...person,name : "Fahad"}; //spread op
console.log(persons);





 