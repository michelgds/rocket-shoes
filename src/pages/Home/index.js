import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-attract/20/D22-1787-120/D22-1787-120_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis de corrida</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-blend-masculino/88/D22-2924-788/D22-2924-788_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis de corrida</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-kromus-masculino/26/AXB-1745-026/AXB-1745-026_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis de corrida</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-extra-olympikus/00/D22-3125-300/D22-3125-300_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis de corrida</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-todos-flyleather-masculino/26/HZM-1730-026/HZM-1730-026_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis de corrida</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-ivan-running-technology-masculino/06/NKK-0003-006/NKK-0003-006_detalhe2.jpg?ims=326x"
          alt="Tenis"
        />
        <strong>Tênis de corrida</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
