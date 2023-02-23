import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';

import { User, Usuario } from '@app/_interfaces/user';
import { Categoria, Categorias } from '../_interfaces/categoria';
import { Observable } from 'rxjs';
import { Productos } from '@app/_interfaces/producto.interface';

@Injectable({ providedIn: 'root' })
export class AccountService {
    apiUrl : string = 'http://localhost:8080'
    constructor(
        private router: Router,
        private http: HttpClient
    ) {}


    public get token(): string {
        const user = localStorage.getItem('user');
        if (user){
            let parsedUser = JSON.parse(user);
            return parsedUser.token
        }
        return ''
        
    }
    public get userValue(): Usuario|null {
        const user = localStorage.getItem('user');
        if (user){
            let parsedUser = JSON.parse(user);
            return parsedUser.usuario
        }
        return null
    }

    login(correo: string, password: string) {
        return this.http.post<User>(`${environment.apiUrl}/api/auth/login`, { correo, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', user.token)
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.router.navigate(['/account/login']);
    }

    register(nombre:string, correo:string, password:string, rol:string) {
        return this.http.post(`${environment.apiUrl}/api/users`, {"nombre":nombre, "correo":correo, "password": password, "rol":rol});
    }

    getCategorias():Observable<Categorias>{
        return this.http.get<Categorias>(this.apiUrl+"/api/categories")
    }

    getCategoriaId(id:string):Observable<Categoria>{
        return this.http.get<Categoria>(this.apiUrl+"/api/categories/"+id)
    }

    getProductoByCategoria(idCategoria:string):Observable<Productos>{
        return this.http.get<Productos>(this.apiUrl+"/api/products?categoria="+idCategoria)
    }

    addCategoria(nombre:string){
        return this.http.post(this.apiUrl+"/api/categories", {"nombre":nombre})
    }

    getAll() {
        return this.http.get<Usuario[]>(`${environment.apiUrl}/api/users`);
    }

    getById(id: string) {
        return this.http.get<Usuario>(`${environment.apiUrl}/api/users/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/api/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue?.uid) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/api/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue?.uid) {
                    this.logout();
                }
                return x;
            }));
    }
}