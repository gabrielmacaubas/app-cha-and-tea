import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { Produto } from 'src/app/shared/model/produto';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {
  produto!: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.produtoService.localizar(Number(productId)).subscribe(
        produto => this.produto = produto
      );
    }
  }

  addToCart(produto: Produto): void {
    this.shoppingCartService.insertProductsIntoCart(produto);
  }
}
