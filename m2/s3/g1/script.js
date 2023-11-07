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

class PetApp {
    constructor(appAreaSelector) {
        this.appArea = document.querySelector(appAreaSelector);
        this.petNameInput = null;
        this.ownerNameInput = null;
        this.speciesInput = null;
        this.breedInput = null;
        this.saveButton = null;
        this.petListsArea = null;
        this.HTMLinit();
        this.placeHolderSet();
        this.formClassSet();

    }

    HTMLinit() {
        this.petNameInput = document.createElement("input");
        this.ownerNameInput = document.createElement("input");
        this.speciesInput = document.createElement("input");
        this.breedInput = document.createElement("input");
        this.saveButton = document.createElement("button");  
        this.petListsArea = document.createElement("div");
        this.appArea.append(this.petNameInput, this.ownerNameInput, this.speciesInput, this.breedInput, this.saveButton, this.petListsArea);
        }
        
    placeHolderSet(){
        this.petNameInput.placeholder = "Nome dell'Animale";
        this.ownerNameInput.placeholder = "Nome del Proprietario";
        this.speciesInput.placeholder = "Nome della Specie";
        this.breedInput.placeholder = "Nome della Razza";
        this.saveButton.innerText = "Salva"; 
    }

    formClassSet() {
        this.petNameInput.classList.add("pet-name-input");
        this.ownerNameInput.classList.add("owner-name-input");
        this.speciesInput.classList.add("species-input");
        this.breedInput.classList.add("breed-input");
        this.saveButton.classList.add("save-button");
        this.petListsArea.classList.add("pet-lists-area");
    }

    createList() {
        let inputs = document.querySelectorAll("input");
        
    }
        
        
    }

    new PetApp('#app')
    

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

