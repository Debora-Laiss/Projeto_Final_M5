<img  width=100% src="https://capsule-render.vercel.app/api?type=waving&color=1E90FF&height=120&section=header"/>

## Projeto Elo-Vivo 🧩 

Este projeto full-stack crud que tem como objetivo melhorar a comunidade autista trazendo implementações para a mesma.

### Estrutura de Arquivos 📄


```
PROJETO-Final-M5
│
├── backend
│   ├── node_modules
│   ├── src
│   │   ├── config
│   │   │   └── corsConfig.js
│   │   ├── Controllers
│   │   │   ├── feedback.controllers.js
│   │   │   ├── goals.controller.js
│   │   │   └── user.controllers.js
│   │   ├── DataBase
│   │   │   ├── database-sqlite.db
│   │   │   ├── database.feedback.js
│   │   │   ├── database.js
│   │   │   └── goals.database.js
│   │   ├── docs
│   │   │   ├── swaggerConfig.js
│   │   │   └── user.yaml
│   │   ├── Models
│   │   │   ├── feedbackmodels.js
│   │   │   ├── goals.model.js
│   │   │   └── user.models.js
│   │   ├── Routers
│   │   │   ├── feedback.router.js
│   │   │   ├── goals.router.js
│   │   │   └── user.router.js
│   │   ├── test
│   │   │   └── user.spec.js
│   │   ├── app.js
│   ├── .babelrc
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│
├── frontend
│   ├── node_modules
│   ├── public
│   └── src
│       ├── assets
│       ├── components
│       │   ├── about
│       │   ├── contact
│       │   ├── feedback
│       │   ├── footer
│       │   ├── header
│       │   ├── home
│       │   └── Metas
│       ├── services
│       │   └── apiService.jsx
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vite.config.js
│
└── README.md

```


## Tecnologias 🔧

- ⚛️ React.js
- 📦 Node.js
- 🐬 Sequelize
- 🌐 Cors
- 🏗️ Babel
- 📧 Nodemailer
- 🚀 Express

## Instalação 🛠

1. Clone o repositório:

   ```
   git clone https://github.com/Debora-Laiss/Projeto_Final_M5
   ```

2. Navegue até o diretório do projeto:

   ```
   cd Projeto_Final_M5
   ```
   
   ```
   cd frontend
   ```

   ```
   cd backend
   ```

3. Instale as dependências:

   ```
   npm install
   ```


## Executando a Aplicação *BACK-END* &#x27A1;

- npm run dev

## Executando a Aplicação *FRONT-END* &#x27A1;

- npm run dev

## Endpoints  

## Usuários ( Users )

## *Mostras usuários*

- Rota: GET /
- Descrição: Mostra os usários ja cadastrados.
- Corpo da Requisição: json

   ```
   {
     "name": "valor",
     "age": valor,
   }
   ```

- Resposta: 

   ```
   [
     {
       "id_user": 1,
       "name": "João Silva",
       "age": "25",
     },
     {
       "id_user": 2,
       "name": "Maria Souza",
       "age": "63",
     }
   ]
   
   ```

## *Adicionar usuário*

- Rota: POST /user
- Descrição: Adiciona um novo usuário
- Corpo da Requisição:
   ```
   {
     "name": "Nome do Usuário",
     "age": "Idade do Usuário",
   }
   
   ```
- Resposta:

   ```
   {
  "affectedRows": 1,
  "insertId": valor,
  "message": "Usuário adicionado com sucesso!"
   }
   ```

## *Buscar usuário por id*

- Rota: GET /read/:id
- Descrição: Retorna as um usuário com o id.
- Resposta:
   ```
   {
     "id_user": 1,
     "name": "João Silva",
     "age": "25",
   }
   
   ```

## *Atualizar usuário*

- Rota: PUT /update/:id
- Descrição: Atualiza usuário com base no id.
- Corpo da requisição:
   ```
   {
     "name": "Nome Atualizado",
     "age": "Idade Atualizada",
   }
   
   ```
- Resposta:
   ```
   {
     "affectedRows": 1,
     "message": "Usuário atualizado com sucesso!"
   }

   
   ```


## *Excluir usuário*

- Rota: DELETE /delete/:id
- Descrição: Exclui um usuário pelo ID.
- Resposta:
   ```
   {
     "id_user": 1,
     "nome": "João Silva",
     "age": "25",
   }
   
   ```

## Feedbacks 

## *Ver Feedbacks*

- Rota: GET /feedbacks

- Descrição: Retorna todos os feedbacks cadastrados.

- Resposta:

```
[
  {
    "id": 1,
    "user": "João Silva",
    "message": "Ótimo atendimento!"
  },
  {
    "id": 2,
    "user": "Maria Souza",
    "message": "Amei o serviço!"
  }
]

```
## *Adicionar Feebacks*

- Rota: POST /feedbacks

- Descrição: Adiciona um novo feedback.

- Corpo da Requisição:

````
{
  "user": "Nome do Usuário",
  "message": "Mensagem do Feedback"
}
````

- Resposta:

````
{
  "message": "Feedback criado com sucesso",
  "novoFeedback": {
    "id": 3,
    "user": "Nome do Usuário",
    "message": "Mensagem do Feedback"
  }
}

````

## *Buscar Feedbacks*

- Rota: GET /feedbacks/

- Descrição: Retorna um feedback específico pelo ID.

- Resposta:

````
{
  "id": 1,
  "user": "João Silva",
  "message": "Ótimo atendimento!"
}

`````
- Rota: PUT /feedbacks/

- Descrição: Atualiza um feedback existente com base no ID.

- Corpo da Requisição:

````
{
  "user": "Nome Atualizado",
  "message": "Mensagem Atualizada"
}
````

- Resposta: 

````
{
  "message": "Feedback atualizado com sucesso",
  "feedbackAtualizado": {
    "id": 1,
    "user": "Nome Atualizado",
    "message": "Mensagem Atualizada"
  }
}
````

## *Excluir Feedbacks*

- Resposta: 

````
{
  "message": "Feedback excluído com sucesso"
}
````

## Metas

## *Listar Metas*

- Rota: GET /goals

- Descrição: Retorna todas as metas cadastradas.

- Resposta:

````
[
  {
    "id": 1,
    "title": "Concluir projeto",
    "description": "Finalizar todas as etapas do projeto até o prazo",
    "completed": false
  },
  {
    "id": 2,
    "title": "Estudar JavaScript",
    "description": "Aprofundar conhecimento em funções e promessas",
    "completed": true
  }
]

````

## *Adicionar Metas* 

- Rota: POST /goals

- Descrição: Adiciona uma nova meta.

- Corpo da Requisição:

````
{
  "title": "Título da Meta",
  "description": "Descrição da Meta",
  "completed": false
}
````
- Resposta:

````
{
  "message": "Meta criada com sucesso",
  "novaMeta": {
    "id": 3,
    "title": "Título da Meta",
    "description": "Descrição da Meta",
    "completed": false
  }
}

````

## *Buscar Meta por id*

- Rota: GET /goals/

- Descrição: Retorna uma meta específica pelo ID.

- Resposta:

````
{
  "id": 1,
  "title": "Concluir projeto",
  "description": "Finalizar todas as etapas do projeto até o prazo",
  "completed": false
}
````

## *Atualizar Metas*

- Rota: PUT /goals/

- Descrição: Atualiza uma meta existente com base no ID.

- Corpo da Requisição:

````
{
  "title": "Título Atualizado",
  "description": "Descrição Atualizada",
  "completed": true
}

````

- Resposta: 

````
{
  "message": "Meta atualizada com sucesso",
  "metaAtualizada": {
    "id": 1,
    "title": "Título Atualizado",
    "description": "Descrição Atualizada",
    "completed": true
  }
}

````
## *Excluir Meta*

- Rota: DELETE /goals/

- Descrição: Exclui uma meta pelo ID.

- Resposta:

````
{
  "message": "Meta excluída com sucesso"
}

````


## Contribuindo

Se desejar contribuir com o projeto, siga os passos abaixo:

1. Fork o projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

© *Squad 3*. 
<img  width=100% src="https://capsule-render.vercel.app/api?type=waving&color=1E90FF&height=120&section=footer"/>
