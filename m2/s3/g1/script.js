/**** esercizio 1  */


class User {
    constructor(fn, ln, a, l) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = a;
        this.location = l;
    }
    ageCheck(user2) {
        if (this.age > user2.age) {
            console.log(`${this.firstName} ${this.lastName} è più grande di ${user2.firstName} ${user2.lastName}`);
        } else if (this.age == user2.age) {
            console.log(`${this.firstName} ${this.lastName} ha la stessa età di ${user2.firstName} ${user2.lastName}`);
        } else {
            console.log(`${user2.firstName} ${user2.lastName} è più grande di ${this.firstName} ${this.lastName}`);
        }
    }

}

let p1 = new User("Davide", `D'Amario`, 30, "Milano");
let p2 = new User("Mario", `Rossi`, 18, "Milano");
let p3 = new User("Mario", `Bianchi`, 18, "Milano");
let p4 = new User("Antonio", `Verdi`, 24, "Milano");

p1.ageCheck(p2);
p2.ageCheck(p3);
p3.ageCheck(p4);
console.log(p1, p2);


/**** esercizio 2 */


class Pet {
    constructor(pn, on, sp, br) {
        this.petName = pn;
        this.ownerName = on;
        this.species = sp;
        this.breed = br
    }

    ownerNameCheck(pet2) {
        if (this.ownerName == pet2.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}