let firstName: string = "John";
let age: number = 30;

//Functions
function greet(firstName: string, age: number): void {
  console.log(`Hello, my name is ${firstName} and I am ${age} years old.`);
}
greet("John", 30);

function sum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sum([1, 2, 3, 4, 5]));

function getLength(ln: string | any[]): number {
  return ln.length;
}
console.log(getLength("hello"));
console.log(getLength([1, 2, 3, 4]));

//Interface
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

interface Employee extends Person {
  position: string;
  salary: number;
}
let user: Person = {
  name: "Kitty",
  age: 9,
  isStudent: false,
};

//Types
type ID = string | number;
let userId: ID = 1974;

let userInfo: [firstName: string, age: number, isStudent: boolean];
userInfo = ["Hello Kitty", 9, false];

//Enums
enum Role {
  ADMIN = "Admin",
  USER = "User",
  GUEST = "Guest",
}
let currentRole: Role = Role.ADMIN;

function printRole(role: Role): void {
  console.log(`User role is: ${role}`);
}
printRole(currentRole);

//Generic

type Wrapper<T> = {
  value: T;
};

let wrappedString: Wrapper<string> = {
  value: "Hello, World!",
};

function wrap<T>(value: T): Wrapper<T> {
  return { value };
}

let wrappedNumber = wrap(42);
let wrappedString1 = wrap("hello");

function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

type User = {
  id: number;
  name: string;
  email: string;
};

function createUser(id: number, name: string, email: string): User {
  return { id, name, email };
}

const newUser = createUser(1, "John Doe", "john@example.com");
console.log(newUser);

type Car = {
  make: string;
  model: string;
  year: number;
};
const createCar = (make: string, model: string, year: number): Car => {
  return { make, model, year };
};

type Reactangle = {
  width: number;
  height: number;
};
const calculateArea = (width: number, height: number): number => {
  return width * height;
};

type Circle = {
  radius: number;
  color: string;
};

const calculatePerimeter = (circle: Circle): number => {
  const PI = Math.PI;
  return 2 * circle.radius * PI;
};

const myCircle: Circle = { radius: 10, color: "red" };
console.log(calculatePerimeter(myCircle));

type Product = {
  id: number;
  name: string;
  price: number;
};
function discountPrice(product: Product, discount: number): number {
  const discountAmount = (product.price * discount) / 100;
  return product.price - discountAmount;
}

type Employee1 = {
  name: string;
  position: string;
  salary: number;
};
function increaseSalary(employee: Employee1, increase: number): number {
  const increasedSalary = employee.salary + (employee.salary * increase) / 100;
  return increasedSalary;
}

type Student = {
  name: string;
  age: number;
  subjects: string[];
};
function addSubject(student: Student, subject: string): string[] {
  student.subjects.push(subject);
  return student.subjects;
}
const student: Student = {
  name: "Alice",
  age: 20,
  subjects: ["Math", "English"],
};
console.log(addSubject(student, "History"));

type Book = {
  title: string;
  author: string;
  year: number;
};
function getBookInfo(book: Book): string {
  return `${book.title} by ${book.author}, published in ${book.year}.`;
}

type Person1 = {
  name: string;
  age: number;
  friends: Person1[];
};
function addFriend(person: Person1, friend: Person1): Person1[] {
  person.friends.push(friend);
  return person.friends;
}

type Point = {
  x: number;
  y: number;
};
function distance(loc1: Point, loc2: Point): number {
  return Math.sqrt((loc2.x - loc1.x) ** 2 + (loc2.y - loc1.y) ** 2);
}

type Car1 = {
  make: string;
  model: string;
  year: number;
  price: number;
};
function discountedCarPrice(car: Car1, discount: number): number {
  return car.price - (car.price * discount) / 100;
}

type UserProfile = {
  username: string;
  email: string;
  age?: number;
};
const createProfile = (
  username: string,
  email: string,
  age?: number
): UserProfile => {
  return { username, email, age };
};

{
  type Reactangle = {
    width: number;
    height: number;
  };
  const scaleRectangle = (rec: Reactangle, scale: number): Reactangle => {
    return { width: rec.width * scale, height: rec.height * scale };
  };
}
{
  type Movie = {
    title: string;
    year: number;
    rating?: number;
  };

  const getMovieInfo = (movie: Movie): string => {
    return `Title: ${movie.title}, Year: ${movie.year}, Rating: ${
      movie.rating !== undefined ? movie.rating : "N/A"
    }`;
  };
  /*!movie.rating перевіряє, чи значення є falsy 
  (наприклад, undefined, null, 0, NaN, "", false). 
  Але тут є нюанс: Якщо rating === 0, то !movie.rating буде true, 
  і твій код поверне "N/A", що неправильно. Адже 0 — це валідне числове значення. */
}

{
  type User = {
    id: number;
    name: string;
    friends: User[];
  };
  const addFriend = (user: User, friend: User): User => {
    return {
      ...user,
      friends: [...user.friends, friend],
    };
  };
}

{
  type Product = {
    id: number;
    name: string;
    price: number;
  };

  const applyDiscount = (product: Product, discount: number): Product => {
    let discountRes: number = product.price - (product.price * discount) / 100;
    return { ...product, price: discountRes };
  };
}

{
  enum Status {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
  }
  type Order = {
    id: number;
    product: string;
    status: Status;
  };

  const updateStatus = (order: Order, newStatus: Status): Order => {
    return { ...order, status: Status.Pending };
  };

  const myOrder: Order = { id: 1, product: "Laptop", status: Status.Pending };
  console.log(updateStatus(myOrder, Status.Shipped));
}

{
  type Response<T> = {
    data: T;
    status: number;
    message: string;
  };
  const createResponse = <T>(data: T): Response<T> => {
    return { data, status: 200, message: "Success" };
  };
}

{
  function add<T extends number | string>(a: T, b: T): T {
    return (a as any) + (b as any);
  }

  console.log(add(3, 2)); // 5
  console.log(add("abc", "def"));
}

