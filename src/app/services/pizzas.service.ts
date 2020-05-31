import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import pizzas from '../models/pizzas';

@Injectable({
    providedIn: 'root'
})
export class PizzasService {

    datatest = new Subject<boolean>();

    constructor(private http: HttpClient) {
    }

    loadData(url: string) {
        return this.http.get('https://api.ynov.jcatania.io/' + url)
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
        return this.http.delete('https://api.ynov.jcatania.io/' + url)
            .subscribe(() => {
                this.datatest.next(true)},
                err => console.log(err)
            );
    }


    addData(url: string, zpizza: any) {

        return this.http.post('https://api.ynov.jcatania.io/' + url, zpizza,
            {
                headers:{
                    'content':"application/json"
                }
            })
            .subscribe(() => {
                    this.datatest.next(true)},
                err => console.log(err)
            );
    }


    patchData(url: string, zpizza: any) {

        return this.http.patch('https://api.ynov.jcatania.io/' + url, zpizza,
            {
                headers:{
                    'content':"application/json"
                }
            })
            .subscribe(() => {
                    this.datatest.next(true)},
                err => console.log(err)
            );
    }


}
