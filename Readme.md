# Script que adiciona códigos de cupom a um evento no Sympla 

Você precisa definir 3 variáveis no seu .env

- `COOKIE`: pode pegar a partir de qualquer curl do sympla
- `DISCOUNT`: percentual de desconto que seu código vai dar
- `EVENT_ID`: id do evento - presente na url da página de gestão do evento no sympla.

Necessário utilizar node v18

## Para rodar

1. `yarn` para instalar as dependências
2. configure o array codes na linha 4, com os códigos que deseja criar.
3. `node index.js` para rodar o script