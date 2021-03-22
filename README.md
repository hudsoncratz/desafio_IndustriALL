## Visão Geral - O que é esperado?

Essa etapa servirá para que você possa mostrar todos os seus conhecimentos em desenvolvimento WEB! Como desafio, é esperado que você desenvolva uma página WEB para cadastrar um formulário que chamaremos de Ocorrência (seguir o exemplo da imagem abaixo) e uma API REST para receber os dados do formulário via JSON. Os dados não precisam ser persistidos em um banco de dados. A API deve receber os dados através de uma requisição POST e validar os campos (conforme as regras abaixo). Se houver campos inválidos, deve ser retornado um JSON contendo os erros (conforme o exemplo abaixo). Se os campos forem válidos, deve ser retornado um JSON contendo o id fake gerado para a Ocorrência (conforme o exemplo abaixo). No frontend, após o retorno da requisição, deve ser exibido a(s) mensagem(ns) de sucesso ou erro.

**Observações:**
- Fique à vontade para utilizar quaisquer técnicas, bibliotecas e frameworks para o backend e frontend. Se você utilizar o .NET Core e/ou o React, será um diferencial.
- Não esperamos um sistema completo com persistência de dados. Porém, se fizer, será um diferencial!
- O esboço da tela abaixo é apenas ilustrativo. Você não precisa fazer a estilização igual. Apenas deve conter os campos presentes na imagem e seguir mais ou menos o layout.
- A API deve possuir apenas um endpoint pra receber a requisição do tipo POST.

![Foto](https://lh3.googleusercontent.com/pw/ACtC-3euYg0P_gzc7EQ8zSGHel2Bue2FjvGTVw5yA9VdLIGbEWI_g8cCIUm6shnUu86pHs10xdxvGe90Z7u5lyVjL_zSXytLNQm0G7HdFBZKxdfeOYPKfHwwLDdM3b3FZuTYzdFz2c7LM_ploowjE7B_0a8-=w1605-h903-no?authuser=0)

---
|Campo|Regra  |
|--|--|
|Título  | É obrigatório e deve possuir no máximo 45 caracteres. |
|Início | É obrigatório e deve ser uma data válida no formato *dd/MM/yyyy* menor que a data de fim.|
|Fim | É obrigatório e deve ser uma data válida no formato *dd/MM/yyyy* maior que a data de início.|
| Acontecimentos | É obrigatório e deve ser um array de strings no qual cada string representa o relato de um acontecimento.|
---
```JavaScript
// JSON de erro
{
  sucesso: false,
  errorMessages: [
    "A data de início é menor que a data final",
    "O título possui mais de 45 caracteres",
  ]
}
```

---
```JavaScript
// JSON de sucesso com id fake
{
  sucesso: true,
  id: 5
}
```

## Como serei avaliado?
Você poderá:

- efetuar um pull request da sua implementação diretamente no Github até a data limite de 21/03/2021
ou
- encaminhar para o e-mail henan.ferreira@industriall.ai com rh@industriall.ai em cópia, um arquivo .zip ou link com o código fonte até a data limite de 21/03/2021.

Qualquer problema ou dificuldade, você pode entrar em contato conosco pelos e-mails, henan.ferreira@industriall.ai ou rh@industriall.ai para que possamos sanar todas as dúvidas!
