let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Using .map() to iterate and filter developers
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  // Using .forEach() to iterate and filter developers
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  // Adding a new employee to the array
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  // Removing employees with the profession 'admin'
  const filteredArr = arr.filter(employee => employee.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  // Creating a new array with 3 new objects
  const newArr = [
    { id: 5, name: "alice", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "23", profession: "manager" },
    { id: 7, name: "charlie", age: "24", profession: "developer" }
  ];
  const concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);
}
