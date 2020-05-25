export default class Pannier {
    idpizza: number;
    nompizza: string;
    prixpizza: number;
    prixtotalpizza: number;
    qty: number;

    constructor(data) {
        this.idpizza = data.id;
        this.nompizza = data.nom;
        this.prixpizza = data.prix;
        this.prixtotalpizza = data.prix;
        this.qty = 1;
    }
}
