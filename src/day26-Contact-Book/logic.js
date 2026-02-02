class ContactBook {
    constructor() {
        this.contacts = new Map();
    }
    // Add contact
    addContact(name, phone, email) {
        let contact = {
            phone: phone,
            email: email
        }
        this.contacts.set(name, contact)

    }

    // Get contact
    getContact(name) {
        if (this.contacts.has(name)) {
            return this.contacts.get(name)
        }
        return null
    }

    // Update phone
    updatePhone(name, newPhone) {
        if (this.contacts.has(name)) {
            let contact = this.contacts.get(name);
            contact.phone = newPhone;
            // No need to set back - it's already updated!
        }
        else {
            throw new Error("Please Enter a Valid Name");
        }
    }

    deleteContact(name) {
        if (this.contacts.has(name)) {
            this.contacts.delete(name)
        }
        else {
            throw new Error("Please Enter a Valid Name")
        }
    }

    // Search by partial name
    searchByName(query) {

        let result = [];
        query = query.toLowerCase();

        for (let [name, contacts] of this.contacts) {
            if (name.toLowerCase().includes(query)) {
                result.push({
                    name: name,
                    email: contacts.email
                })
            }
        }
        return result
    }

    // Get all contacts
    getAllContacts() {
        let allContacts = [];

        for (let [name, contact] of this.contacts) {
            allContacts.push({
                name: name,
                phone: contact.phone,
                email: contact.email
            });
        }

        return allContacts;  // AFTER loop!
    }

    // Get total count
    getTotalContacts() {
        return this.contacts.size
    }

    // Check if contact exists
    hasContact(name) {
        return this.contacts.has(name)
    }
}

// Test
let book = new ContactBook();
book.addContact("Rahul", "9876543210", "rahul@email.com");
book.addContact("Priya", "8765432109", "priya@email.com");

console.log(book.getContact("Rahul"));
console.log(book.searchByName("Ra"));  // Find all with "Ra"
console.log(book.getTotalContacts());  // 2

