let personArray = [];
console.log(personArray);

const insertedIndex = personArray.push({
  name: "Revanth",
  dob: "10-12-2001",
});

personArray.push(
  {
    name: "Navanth",
    dob: "17-09-2003",
  },
  {
    name: "Rajesh",
    dob: "04-11-2003",
  }
);

console.log(insertedIndex, personArray);
console.log("Length of array :", personArray.length);

const arrayJoinString = personArray.join(",");
console.log(arrayJoinString);

const slicedArray = personArray.slice(0, 2); //returns a new array
console.log(slicedArray, personArray);

personArray.map((item, _) => console.log(`item ${_ + 1} :`, item));

const filteredArray = personArray.filter((item) => item.name !== "Revanth");
console.log(filteredArray, personArray);

console.log(
  personArray.includes({
    name: "Revanth",
    dob: "10-12-2001",
  })
);
