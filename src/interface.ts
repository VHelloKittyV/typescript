// Interface 
{
    interface Book {
        title: string;
        author: string;
        year: number;
        description: string;
        isAvailable: boolean;
    }
    
    interface Library {
        libraryName: string;
        books: Book[];
        addBook(book: Book): void;
        findBooksByAuthor(author: string): Book[];
        isBookAvailable(title: string): boolean;
    }
    
    class BookImpl implements Book {
        constructor(
            public title: string,
            public author: string,
            public year: number,
            public description: string,
            public isAvailable: boolean
        ) {}
    }
    
    class LibraryImpl implements Library {
        books: Book[] = [];
        
        constructor(public libraryName: string) {}
    
        addBook(book: Book): void {
            this.books.push(book);
        }
    
        findBooksByAuthor(author: string): Book[] {
            return this.books.filter(book => book.author.toLowerCase() === author.toLowerCase());
        }
    
        isBookAvailable(title: string): boolean {
            const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
            return book ? book.isAvailable : false;
        }
    }
    
    // Тестування
    const myLibrary = new LibraryImpl('City Library');
    
    const book1 = new BookImpl('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'A novel about the American dream.', true);
    const book2 = new BookImpl('Moby Dick', 'Herman Melville', 1851, 'A story about the obsession of Captain Ahab.', false);
    
    myLibrary.addBook(book1);
    myLibrary.addBook(book2);
    
    console.log(myLibrary.findBooksByAuthor('F. Scott Fitzgerald')); // Пошук книг автора
    console.log(myLibrary.isBookAvailable('Moby Dick')); // Перевірка наявності книги
    
}
{
    interface Contact {
        name: string;
        phone: string;
        email: string;
        getContactInfo(): string;
    }
    
    class ContactImpl implements Contact {
        name: string;
        phone: string;
        email: string;
    
        constructor(name: string, phone: string, email: string) {
            this.name = name;
            this.phone = phone;
            this.email = email;
        }
    
        getContactInfo(): string {
            return `Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`;
        }
    }
    
    interface Phonebook {
        addContact(contact: Contact): void;
        removeContact(name: string): void;
        findContactByName(name: string): Contact | undefined;
        listAllContacts(): string[];
    }
    
    class PhonebookImpl implements Phonebook {
        allContacts: Contact[];
    
        constructor() {
            this.allContacts = [];
        }
    
        addContact(contact: Contact): void {
            this.allContacts.push(contact);
        }
    
        removeContact(name: string): void {
            this.allContacts = this.allContacts.filter(contact => contact.name.toLocaleLowerCase() !== name.toLocaleLowerCase());
        }
    
        findContactByName(name: string): Contact | undefined {
            return this.allContacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        }
    
        listAllContacts(): string[] {
            return this.allContacts.map(contact => contact.getContactInfo());
        }
    }
    
    // **Приклад використання:**
    const phonebook = new PhonebookImpl();
    
    const contact1 = new ContactImpl("John Doe", "123-456-789", "johndoe@example.com");
    const contact2 = new ContactImpl("Jane Smith", "987-654-321", "janesmith@example.com");
    
    phonebook.addContact(contact1);
    phonebook.addContact(contact2);
    
    console.log(phonebook.listAllContacts()); // Виведе список контактів
    
    phonebook.removeContact("John Doe");
    
    console.log(phonebook.listAllContacts()); // Тепер залишиться лише один контакт
}