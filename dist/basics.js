"use strict";
let firstName = "John";
let age = 30;
function greet(firstName, age) {
    console.log(`Hello, my name is ${firstName} and I am ${age} years old.`);
}
greet("John", 30);
function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sum([1, 2, 3, 4, 5]));
function getLength(ln) {
    return ln.length;
}
console.log(getLength("hello"));
console.log(getLength([1, 2, 3, 4]));
let user = {
    name: "Kitty",
    age: 9,
    isStudent: false,
};
let userId = 1974;
let userInfo;
userInfo = ["Hello Kitty", 9, false];
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["USER"] = "User";
    Role["GUEST"] = "Guest";
})(Role || (Role = {}));
let currentRole = Role.ADMIN;
function printRole(role) {
    console.log(`User role is: ${role}`);
}
printRole(currentRole);
let wrappedString = {
    value: "Hello, World!",
};
function wrap(value) {
    return { value };
}
let wrappedNumber = wrap(42);
let wrappedString1 = wrap("hello");
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
function createUser(id, name, email) {
    return { id, name, email };
}
const newUser = createUser(1, "John Doe", "john@example.com");
console.log(newUser);
const createCar = (make, model, year) => {
    return { make, model, year };
};
const calculateArea = (width, height) => {
    return width * height;
};
const calculatePerimeter = (circle) => {
    const PI = Math.PI;
    return 2 * circle.radius * PI;
};
const myCircle = { radius: 10, color: "red" };
console.log(calculatePerimeter(myCircle));
function discountPrice(product, discount) {
    const discountAmount = (product.price * discount) / 100;
    return product.price - discountAmount;
}
function increaseSalary(employee, increase) {
    const increasedSalary = employee.salary + (employee.salary * increase) / 100;
    return increasedSalary;
}
function addSubject(student, subject) {
    student.subjects.push(subject);
    return student.subjects;
}
const student = {
    name: "Alice",
    age: 20,
    subjects: ["Math", "English"],
};
console.log(addSubject(student, "History"));
function getBookInfo(book) {
    return `${book.title} by ${book.author}, published in ${book.year}.`;
}
function addFriend(person, friend) {
    person.friends.push(friend);
    return person.friends;
}
function distance(loc1, loc2) {
    return Math.sqrt((loc2.x - loc1.x) ** 2 + (loc2.y - loc1.y) ** 2);
}
function discountedCarPrice(car, discount) {
    return car.price - (car.price * discount) / 100;
}
const createProfile = (username, email, age) => {
    return { username, email, age };
};
{
    const scaleRectangle = (rec, scale) => {
        return { width: rec.width * scale, height: rec.height * scale };
    };
}
{
    const getMovieInfo = (movie) => {
        return `Title: ${movie.title}, Year: ${movie.year}, Rating: ${movie.rating !== undefined ? movie.rating : "N/A"}`;
    };
}
{
    const addFriend = (user, friend) => {
        return Object.assign(Object.assign({}, user), { friends: [...user.friends, friend] });
    };
}
{
    const applyDiscount = (product, discount) => {
        let discountRes = product.price - (product.price * discount) / 100;
        return Object.assign(Object.assign({}, product), { price: discountRes });
    };
}
{
    let Status;
    (function (Status) {
        Status["Pending"] = "Pending";
        Status["Shipped"] = "Shipped";
        Status["Delivered"] = "Delivered";
    })(Status || (Status = {}));
    const updateStatus = (order, newStatus) => {
        return Object.assign(Object.assign({}, order), { status: Status.Pending });
    };
    const myOrder = { id: 1, product: "Laptop", status: Status.Pending };
    console.log(updateStatus(myOrder, Status.Shipped));
}
{
    const createResponse = (data) => {
        return { data, status: 200, message: "Success" };
    };
}
{
    function add(a, b) {
        return a + b;
    }
    console.log(add(3, 2));
    console.log(add("abc", "def"));
}
//# sourceMappingURL=basics.js.map