{
    class Employee {
        public readonly name: string;
        protected salary: number;
        private password: string

        constructor(name: string, salary: number, password: string) {
            this.name = name;
            this.salary = salary
            this.password = password
        }
        getSalary(): number {
            return this.salary
        }
        setPassword(password: any): void {
            this.password = password
        }
    }
    class Manager extends Employee {
        constructor(name: string, salary: number, password: string) {
            super(name, salary, password)
        }
        getEmployeeSalary(): number {
            return this.salary
        }
    }

    class Person {
        protected name: string;
        private age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age
        }
        getName(): string {
            return this.name
        }
        setName(newName: string): void {
            this.name = newName
        }
        protected getAge(): number {
            return this.age
        }
    }
    class Student extends Person {
        grade: number;
        constructor(name: string, age: number, grade: number) {
            super(name, age)
            this.grade = grade
        }
        getStudentInfo(): string {
            return `Student ${this.name} is ${this.getAge()} years old and has a grade of ${this.grade}.`
        }
    }
    let s = new Student("Alex", 23, 2)
    console.log(s.getStudentInfo());


    class BankAccount {
        private balance: number;
        protected accountNumber: string;
        public owner: string;

        constructor(owner: string, accountName: string, balance: number,) {
            this.balance = balance;
            this.accountNumber = accountName;
            this.owner = owner
        }

        public deposit(amount: number): void {
            this.balance += amount
        }
        public withdraw(amount: number): void {
            if (amount > this.balance) {
                throw new Error("Not enough money");
            }
            this.balance -= amount;
        }
        public getBalance(): number {
            return this.balance
        }

    }

    class SavingsAccount extends BankAccount {
        protected interestRate: number;

        constructor(owner: string, accountNumber: string, balance: number, interestRate: number) {
            super(owner, accountNumber, balance)
            this.interestRate = interestRate
        }
        
        /* метод який змінює баланс.... */
        public addInterest(): void {
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