# 🚀 Aula 04: API RESTful com Arquitetura de Rotas e Controllers Modulados

Este repositório contém o projeto desenvolvido durante a **Aula 04 de Back-End** na Unicarioca. O grande diferencial desta etapa foi a evolução da arquitetura do código, aplicando conceitos profissionais de separação de responsabilidades (remetendo ao padrão MVC) para criar um CRUD completo de usuários.

---

## 🛠️ Evolução Técnica e Arquitetura

Em vez de centralizar tudo em um único arquivo, a aplicação foi dividida em camadas lógicas:
* **Inicialização**: O servidor é configurado para escutar requisições de forma isolada.
* **Roteamento Dinâmico**: Uso do `express.Router()` para segmentar e organizar as rotas do recurso.
* **Controladores (Controllers)**: Isolamento total da lógica de negócio, validações de dados e manipulação de arquivos com o módulo `FS`.
* **Middlewares**: Integração nativa do `express.json()` para interceptar payloads de dados enviados no corpo das requisições.

---

## 📂 Estrutura de Diretórios do Projeto

A árvore de arquivos e pastas foi criada e organizada da seguinte forma:

```text
├── controllers/
│   └── usuarioController.js  # Lógica de negócio, validações e leitura/escrita do JSON
├── routes/
│   └── usuarioRoutes.js      # Mapeamento dos verbos HTTP e endpoints do recurso
├── app.js                    # Configuração central do Express, middlewares e prefixos de rotas
├── server.js                 # Arquivo de entrada (Entrypoint) que inicializa o servidor HTTP
├── dados.json                # Base de dados local simulada em formato JSON
├── package.json              # Gerenciador de dependências do projeto
└── node_modules/             # Módulos e pacotes instalados pelo npm
