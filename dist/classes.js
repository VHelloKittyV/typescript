"use strict";
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
        constructor(name, age, grades) {
            super(name, age);
            this.grades = grades;
        }
        greet() {
            super.greet();
            console.log(`I am a student.`);
        }
        getAverageGrade() {
            return ((this.grades.reduce((acc, grade) => acc + grade, 0)) / this.grades.length);
        }
    }
    const student1 = new Student("Ian", 20, [20, 27, 60, 90, 50]);
    student1.greet();
    console.log("My average grade is", student1.getAverageGrade());
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
            this.teachers.forEach((teacher) => console.log(teacher.name));
        }
        findTeacherByName(name) {
            return this.teachers.find((teacher) => teacher.name === name);
        }
    }
    const principal = new Principal("Dr. Johnson", 50, "Greenwood High");
    const teacher1 = new Teacher("Mr. Smith", 40, "Math");
    const teacher2 = new Teacher("Ms. Davis", 35, "Science");
    const school = new School("Greenwood High", principal);
    school.addTeacher(teacher1);
    school.addTeacher(teacher2);
    console.log();
    class Car {
        constructor(make, model, year, price) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.price = price;
        }
        getInfo() {
            return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}`;
        }
        applyDiscount(discount) {
            if (discount < 0 || discount > 100) {
                throw new Error("Discount must be between 0 and 100");
            }
            return this.price - (this.price * discount) / 100;
        }
    }
    const myCar = new Car("Toyota", "Corolla", 2020, 20000);
    console.log(myCar.getInfo());
    console.log("Price after 10% discount: " + myCar.applyDiscount(10));
}
//# sourceMappingURL=classes.js.map