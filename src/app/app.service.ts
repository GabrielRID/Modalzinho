import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getTags(): Observable<string[]> {
        return this.httpClient.get<string[]>('https://cataas.com/api/tags');
    }

    getGOT(): Observable<object[]>{
        return this.httpClient.get<object[]>('https://thronesapi.com/api/v2/Characters');
    }

}

