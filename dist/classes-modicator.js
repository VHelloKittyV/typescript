"use strict";
{
    class Employee {
        constructor(name, salary, password) {
            this.name = name;
            this.salary = salary;
            this.password = password;
        }
        getSalary() {
            return this.salary;
        }
        setPassword(password) {
            this.password = password;
        }
    }
    class Manager extends Employee {
        constructor(name, salary, password) {
            super(name, salary, password);
        }
        getEmployeeSalary() {
            return this.salary;
        }
    }
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getName() {
            return this.name;
        }
        setName(newName) {
            this.name = newName;
        }
        getAge() {
            return this.age;
        }
    }
    class Student extends Person {
        constructor(name, age, grade) {
            super(name, age);
            this.grade = grade;
        }
        getStudentInfo() {
            return `Student ${this.name} is ${this.getAge()} years old and has a grade of ${this.grade}.`;
        }
    }
    let s = new Student("Alex", 23, 2);
    console.log(s.getStudentInfo());
    class BankAccount {
        constructor(owner, accountName, balance) {
            this.balance = balance;
            this.accountNumber = accountName;
            this.owner = owner;
        }
        deposit(amount) {
            this.balance += amount;
        }
        withdraw(amount) {
            if (amount > this.balance) {
                throw new Error("Not enough money");
            }
            this.balance -= amount;
        }
        getBalance() {
            return this.balance;
        }
    }
    class SavingsAccount extends BankAccount {
        constructor(owner, accountNumber, balance, interestRate) {
            super(owner, accountNumber, balance);
            this.interestRate = interestRate;
        }
        addInterest() {
            const interest = this.getBalance() * this.interestRate / 100;
            this.deposit(interest);
        }
    }
    const myAccount = new SavingsAccount("Alex", "UA12345", 1000, 5);
    myAccount.deposit(500);
    myAccount.withdraw(200);
    myAccount.addInterest();
    console.log(myAccount.getBalance());
}
//# sourceMappingURL=classes-modicator.js.map