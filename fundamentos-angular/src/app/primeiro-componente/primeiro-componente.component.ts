import { Component } from "@angular/core";


@Component({
    //regra, o prefixo sempre tem começar com app
    selector: "app-primeiro-componente",
    template: "<h2>Primeiro Component</h2>",
    styles:["h2 { color: red;}"]
})

export class PrimeiroComponenteComponent{}