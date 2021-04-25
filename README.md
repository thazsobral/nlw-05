# Chat-support


<p align="center">
  <a href="#description">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demonstration">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#folders-structure">Estrutura de pastas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#annotatios">Anotações de desenvolvimento</a>
</p>

## Descrição<a id="description"></a>

Aplicação de chat desenvolvida na Next Level Week 05. O chat desenvolvido nesta NLW têm como objetivo ser utilizado para atendimento entre cliente e suporte.

## Demonstração<a id="demonstration"></a>
- Front-end admin

![site-admin](/readme/images-print/site-admin.png)
- Front-end client

![site-client-01](/readme/images-print/site-client-01.png)
![site-client-02](/readme/images-print/site-client-02.png)

## Instalação<a id="installation"></a>
Segue os passos para o clone e ajuste do projeto para desenvolvimento.
1. Baixe o projeto
```bash
git clone https://github.com/thazsobral/nlw-05
```
2. Acesse o repositório
```bash
cd nlw-05/
```
3. Baixe as dependencias
```bash
npm install
```
4. Rode o projeto
```bash
yarn dev
```

## Estrutura de pastas<a id="folders-structure"></a>

- **public**: arquivos do client-side
    - **css**: arquivos de estilização do html.
    - **html**: arquivos html.
    - **images**: arquivs de imagens.
    - **js**: scripts client-side

- **src**: arquivos do server-side
    - **controller**: arquivos de intermediação entre as rotas e os serviços.
    - **database**: arquivos do banco de dados
        - **migrations**: arquivos de migração de banco de dados.
    - **entities**: arquivos de definição das entidades.
    - **repositories**: arquivos de intermediação entre as entidades e os serviços.
    - **services**: arquivos de serviço (regras de negócio).
    - **websocket**: arquivos de conexão websocket entre o server-side e o client-side.

## Anotações de desenvolvimento<a id="annotatios"></a>
Para acessar minhas anotações desta NLW acesse este [link](/readme/anotation/anotation.md).
