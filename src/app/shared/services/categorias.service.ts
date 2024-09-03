import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private readonly _categorias: string[];
  constructor() {
    this._categorias = ['Chá', 'Folhas', 'Acessórios', 'Feminino'];
  }

  listar(): string[] {
    return this._categorias;
  }
}
