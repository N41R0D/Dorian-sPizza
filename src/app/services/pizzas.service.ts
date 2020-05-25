import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import pizzas from '../models/pizzas';

@Injectable({
    providedIn: 'root'
})
export class PizzasService {

    constructor(private http: HttpClient) {
    }

    loadData(url: string) {
        return this.http.get<pizzas[]>('https://api.ynov.jcatania.io/' + url)
            .pipe(
                map(value => {
                    if (value.length > 0) {
                        return value;
                    } else {
                        throw new Error ('Pas de données trouvées');
                    }
                }),
            );
    }

    deleteData(url: string) {
        return this.http.delete<pizzas[]>('https://api.ynov.jcatania.io/' + url);
    }


    // addPizza(url: string, zpizza: string) {
    //     return this.http.post<pizzas[]>('https://api.ynov.jcatania.io/' + url)
    //         .pipe(
    //             map(value => {
    //                 if (value.length > 0) {
    //                     return value;
    //                 } else {
    //                     throw new Error ('Pas de données trouvées');
    //                 }
    //             }),
    //         );
    // }


}
