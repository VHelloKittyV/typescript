"use strict";
{
    class BookImpl {
        constructor(title, author, year, description, isAvailable) {
            this.title = title;
            this.author = author;
            this.year = year;
            this.description = description;
            this.isAvailable = isAvailable;
        }
    }
    class LibraryImpl {
        constructor(libraryName) {
            this.libraryName = libraryName;
            this.books = [];
        }
        addBook(book) {
            this.books.push(book);
        }
        findBooksByAuthor(author) {
            return this.books.filter(book => book.author.toLowerCase() === author.toLowerCase());
        }
        isBookAvailable(title) {
            const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
            return book ? book.isAvailable : false;
        }
    }
    const myLibrary = new LibraryImpl('City Library');
    const book1 = new BookImpl('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'A novel about the American dream.', true);
    const book2 = new BookImpl('Moby Dick', 'Herman Melville', 1851, 'A story about the obsession of Captain Ahab.', false);
    myLibrary.addBook(book1);
    myLibrary.addBook(book2);
    console.log(myLibrary.findBooksByAuthor('F. Scott Fitzgerald'));
    console.log(myLibrary.isBookAvailable('Moby Dick'));
}
{
    class ContactImpl {
        constructor(name, phone, email) {
            this.name = name;
            this.phone = phone;
            this.email = email;
        }
        getContactInfo() {
            return `Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`;
        }
    }
    class PhonebookImpl {
        constructor() {
            this.allContacts = [];
        }
        addContact(contact) {
            this.allContacts.push(contact);
        }
        removeContact(name) {
            this.allContacts = this.allContacts.filter(contact => contact.name.toLocaleLowerCase() !== name.toLocaleLowerCase());
        }
        findContactByName(name) {
            return this.allContacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        }
        listAllContacts() {
            return this.allContacts.map(contact => contact.getContactInfo());
        }
    }
    const phonebook = new PhonebookImpl();
    const contact1 = new ContactImpl("John Doe", "123-456-789", "johndoe@example.com");
    const contact2 = new ContactImpl("Jane Smith", "987-654-321", "janesmith@example.com");
    phonebook.addContact(contact1);
    phonebook.addContact(contact2);
    console.log(phonebook.listAllContacts());
    phonebook.removeContact("John Doe");
    console.log(phonebook.listAllContacts());
}
//# sourceMappingURL=interface.js.map