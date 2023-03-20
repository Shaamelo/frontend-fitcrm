export class Customer {
    id: number;
    name: string;
    documentType: string;
    document: string;
    age: number;
    email: string;
    cellphone: string;

    constructor(id: number, name: string, documentType: string, document: string, age: number, email: string, cellphone: string) {
        this.id = id;
        this.name = name;
        this.documentType = documentType;
        this.document = document;
        this.age = age;
        this.email = email;
        this.cellphone = cellphone;
    }
}