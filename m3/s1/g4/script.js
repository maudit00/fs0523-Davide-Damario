"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCapi_js_1 = require("./Modules/getCapi.js");
class Capo {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldocapo() {
        return this.prezzoivainclusa * (this.saldo / 100);
    }
    getAcquistocapo() {
        return this.prezzoivaesclusa - this.getSaldocapo();
    }
}
// let capoProva:Capo = new Capo(4, 1111, "estate", "maglione", 1221, 2, "rosso", 20, 24.40, "negozio", 50)
// console.log(capoProva.getSaldocapo());
// capoProva.getSaldocapo();
// console.log(capoProva.getAcquistocapo());
// capoProva.getAcquistocapo();
function makeCapi() {
    return __awaiter(this, void 0, void 0, function* () {
        let capi = yield (0, getCapi_js_1.getCapi)();
        capi.forEach(capo => {
            let capoDaScontare = new Capo(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoivaesclusa, capo.prezzoivainclusa, capo.disponibile, capo.saldo);
            console.log(capoDaScontare.getSaldocapo());
            console.log(capoDaScontare.getAcquistocapo());
        });
    });
}
makeCapi();
//# sourceMappingURL=script.js.map