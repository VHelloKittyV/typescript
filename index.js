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
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
    const person1 = new Person("Alice", 25);
    person1.greet();
    class Student extends Person {
        constructor(name, age, grade) {
            super(name, age);
            this.grade = grade;
        }
        greet() {
            super.greet();
            console.log(`I am in grade ${this.grade}.`);
        }
    }
    class Teacher extends Person {
        constructor(name, age, subject) {
            super(name, age);
            this.subject = subject;
        }
        greet() {
            super.greet();
            console.log(`I teach ${this.subject}.`);
        }
        intoduce(experience) {
            console.log(`"My name is ${this.name}, and I have been teaching ${this.subject} for ${experience} years."`);
        }
    }
    class Principal extends Person {
        constructor(name, age, schoolName) {
            super(name, age);
            this.schoolName = schoolName;
        }
        announce() {
            console.log(`I am the principal of ${this.schoolName}.`);
        }
    }
    class School {
        constructor(name, principal, teachers = []) {
            this.name = name;
            this.principal = principal;
            this.teachers = teachers;
        }
        addTeacher(teacher) {
            this.teachers.push(teacher);
        }
        listTeachers() {
            this.teachers.forEach(teacher => console.log(teacher.name));
        }
        findTeacherByName(name) {
            return this.teachers.find(teacher => teacher.name === name);
        }
    }
    const principal = new Principal("Dr. Johnson", 50, "Greenwood High");
    const teacher1 = new Teacher("Mr. Smith", 40, "Math");
    const teacher2 = new Teacher("Ms. Davis", 35, "Science");
    const school = new School("Greenwood High", principal);
    school.addTeacher(teacher1);
    school.addTeacher(teacher2);
    console.log(school);
}
//# sourceMappingURL=index.js.map