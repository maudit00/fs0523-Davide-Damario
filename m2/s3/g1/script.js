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
      console.log(
        `${this.firstName} ${this.lastName} è più grande di ${user2.firstName} ${user2.lastName}`
      );
    } else if (this.age == user2.age) {
      console.log(
        `${this.firstName} ${this.lastName} ha la stessa età di ${user2.firstName} ${user2.lastName}`
      );
    } else {
      console.log(
        `${user2.firstName} ${user2.lastName} è più grande di ${this.firstName} ${this.lastName}`
      );
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
    this.compareButton = null;
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
    this.compareButton = document.createElement("button");
    this.petListsArea = document.createElement("div");
    this.appArea.append(
      this.petNameInput,
      this.ownerNameInput,
      this.speciesInput,
      this.breedInput,
      this.saveButton,
      this.petListsArea
    );
  }

  placeHolderSet() {
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
}

class Pet {
  constructor(id, pn, on, sp, br) {
    this.id = id;
    this.petName = pn;
    this.ownerName = on;
    this.species = sp;
    this.breed = br;
  }

  ownerNameCheck(pet2) {
    if (this.ownerName == pet2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

class Alert {
    constructor(position, icon, title) {
        this.position = position;
        this.icon = icon;
        this.title = title;
        this.showConfirmButton = false
        this.timer = 5000;
    }

    alertMaker() {
        Swal.fire({
            position: this.position,
            icon: this.icon,
            title: this.title,
            showConfirmButton: this.showConfirmButton,
            timer: this.timer
        })
    }
}

new PetApp("#app");

let petsArray = [];

let petNameInput = document.querySelector(".pet-name-input");
let ownerNameInput = document.querySelector(".owner-name-input");
let speciesInput = document.querySelector(".species-input");
let breedInput = document.querySelector(".breed-input");
let petListsArea = document.querySelector(".pet-lists-area");
let saveBtn = document.querySelector(".save-button");
let counter = 0;

saveBtn.addEventListener("click", () => {
  if (inputChecker()) {
    counter++;
    petsArray.push(
      new Pet(
        counter,
        petNameInput.value,
        ownerNameInput.value,
        speciesInput.value,
        breedInput.value
      )
    );
    petListMaker2(petsArray, counter);
    inputClearer();
  } else {
    new Alert("top-left", "error", "Non hai inserito tutti i campi!").alertMaker();
  }
});

function inputClearer() {
  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
}
function inputChecker() {
  if (
    petNameInput.value != "" &&
    ownerNameInput.value != "" &&
    speciesInput.value != "" &&
    breedInput.value != ""
  ) {
    return true;
  } else {
    return false;
  }
}

function compareButtonChecker(button) {
  let idOfThebutton = button.parentElement.firstChild.lastChild.innerText;
  console.log(idOfThebutton);
  let idToCompare = prompt("Inserisci l'ID del Proprietario da confrontare");
  if (idToCompare && idToCompare > 0 && idToCompare <= petsArray.length) {
    let result = petsArray[idOfThebutton - 1].ownerNameCheck(
      petsArray[parseInt(idToCompare) - 1]
    );
    if (result) {
    new Alert("top-left", "success", "E`lo stesso proprietario!").alertMaker();
    } else {
    new Alert("top-left", "error", "I proprietari sono diversi!").alertMaker();
    }
  } else {
    new Alert("top-left", "error", "Inserisci un ID valido!").alertMaker();
    };
  }

function petListMaker2() {
  let list = document.createElement("ul");
  list.classList.add("pet-list");
  for (let prop in petsArray[petsArray.length - 1]) {
    let li = document.createElement("li");
    li.innerHTML = `<span class="prop-name">${prop}:</span> <span class="prop-value">${
      petsArray[petsArray.length - 1][prop]
    }</span>`;
    list.append(li);
  }
  let compareButton = document.createElement("button");
  compareButton.classList.add("compare-button");
  compareButton.innerText = "Confronta Proprietario";
  compareButton.addEventListener("click", () => {
    compareButtonChecker(compareButton);
  });
  list.append(compareButton);
  petListsArea.append(list);
}
