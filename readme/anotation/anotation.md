# Next Level Week #5 - Node.js

> Maratona ministrada pela [Daniele Leao Evangelista](https://www.youtube.com/c/DanieleLeaoEvangelista/featured) da [Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg/videos).

Para ajuda, acesse a [comunidade](https://discord.com/channels/327861810768117763/799718637728170004) da maratona.

# Aula 01 - Liftoff

*Fundamentos do Node.js*

- **Qual o projeto dessa NLW?**

    O projeto dessa versão da NLW é uma aplicação de chat utilizando websocket e protocolo HTTP.

    A trilha de Node.js é focado no desenvolvimento do back-end desta aplicação.

- **Quais os requisitos utilizados para o projeto?**
    - Cadastro de configurações do usuário, como habilitar o chat, mensagem inicial padrão, etc., além do próprio usuário;
    - Armazenar histórico da conversa;
- **Quais as ferramentas utilizadas para desenvolver este projeto?**
    - Node.js + NPM, utilizando o [nvm](https://github.com/nvm-sh/nvm);
    - Yarn;
    - [VSCode](https://code.visualstudio.com/) + confgurações.
    - API REST Client, alguns exemplos são o [Insomnia](https://insomnia.rest/download), [Postman](https://www.postman.com/), etc.

        Para aqueles que são a favor das ferramentas online quando possível (como eu), há alguns que podem ser utilizadas no browser também como, [REST Ape](https://chrome.google.com/webstore/detail/rest-ape-advanced-api-tes/ohalacbnhbfllngjcgnejjdgmhbkcnld/related?hl=en-US), [Reqbin](https://reqbin.com/) e [Talent API Tester](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm).

    - Database manager como, [SQLite Extension VSCode](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) e [Beekeeper Studio](https://www.beekeeperstudio.io/).
- **Por que estudar Node.js?**

    Node.js é um motor orientado a eventos e assincrono. Seu processamento de requisições no-blocking IO (Input e Output) o torna leve e eficiente, ideal para aplicações que necessita de troca de dados intesa e em tempo real.

    Para mais informações acesse o blog do [GeekHunter](https://blog.geekhunter.com.br/por-que-diabos-eu-usaria-o-node-js-uma-justificativa-passo-a-passo/).

- **O que é uma API?**

    Application Programming Interface, é basicamente um conjunto de que possibilita a comunicação entre plataformas através de um série de padrões e protocolos.
    É por meio das APIs que outras aplicações podem consumir seus serviços sem necessariamente conhecer sua implementação.

    Desta forma, podemos concluir que as APIs permitem a comunicação entre aplicações e entre os usuários.

- **O que é Typescript?**

    É um superconjunto de JavaScript que adiciona tipagem e outros recursos a linguagem, por exemplo, a utilização de interfaces.

    A utilização de tipagem estática também permite aplicar outros conceitos do paradigma orientado a objeto como a interface.

    Para mais informações acesse o [blog da Trybe](https://blog.betrybe.com/desenvolvimento-web/typescript/).

# Aula 02 - Maximum Speed

*Iniciando com o Banco de Dados*

- **O que é o Express?**

    É basicamente um micro-framework para aplicações web que otimização as ferramentas básicas do Node.js. Ele foi feito para facilitar a construções de aplicações e APIs.

- **O que é um banco de dados?**

    Basicamente, é uma tecnologia que serve para gerenciar informações, seja, armazená-las até recuperá-las.

- **Como escolher um banco de dados para utilizar?**

    Primeiramente, deve-se conhecer seu negócio e conhecer as atuais necessidades dele.

    Atualmente no mercado temos dois tipos de banco de dados, os relacionais e os não-relacionais.

    Resumidamente, os bancos relacionais são uma boa opção para sistemas que têm a necessidade de uma grande consistência de dados. Alguns casos são sistemas financeiros, CRMs, etc.

    Já os não-relacionais, buscam consistência nas informações armazenadas, na disponibilidade do banco de dados e tolerância ao particionamento das informações. Geralmente são utilizados para tratamento de grandes volumes de dados, com alto desempenho. Um exemplo são as aplicações que armazenam dados mistos como, imagens, mapas, tabelas, etc.

    Ou seja, a escolha do banco de dados depende exclusivamente da aplicação.

- **Quais as principais formas de utilizar um banco de dados?**

    Podemos utilizar os bancos de dados basicamente de três formas:

    - através dos drivers dos SGBDs (Sistemas de Gerenciamente de Bancos de Dados). Para utilizar os drivers é necessário utilizar as queries nativas de cada driver.
    - através dos Queries Builders que já trazem algumas funcionalidades prontas para serem utilizadas dos SGBDs. Um exemplo é o [KNEX.JS](http://knexjs.org/).
    - através dos frameworks de ORM (Object Relational Mapper), que conecta objetos contidos na aplicação com uma estrutura/tabela no banco de dados. Essa tecnologia também possibilita a utilização de funcionalidades prontas. Dois exemplos são, [TypeORM](https://typeorm.io/) e [Sequelize](https://sequelize.org/).

- **O que são Migrations?**

    De forma resumida, é um tipo de histórico de tudo que é feito relacionado ao banco de dados, permitindo assim versionar o schema da aplicação. 

    Esse versionamento trabalha com a manipulação da base de dados: criando, alterando ou removendo. Sendo esta uma forma de controlar as alterações do seu banco juntamente com o versionamento de sua aplicação e compartilhar-la.

- **Qual o relacionamento dos dados definido para a aplicação?**

    ![Next%20Level%20Week%20#5%20-%20Node%20js%20117b46aff1dd4ad78238af20610e4f63/Untitled.png](Next%20Level%20Week%20#5%20-%20Node%20js%20117b46aff1dd4ad78238af20610e4f63/Untitled.png)

- **O que é Primary Key e Foreing Key?**
    - **Primary Key**: é um campo/coluna do banco de dados que contém um valor único. Este valor é utilizado para identificação do registro. É importante sempre conter pelo menos um Primary Key na tabela.
    - ´
- **Como criar uma migration?**

    Neste projeto, como foi utilizado o TypeORM, obviamente para criar uma migration já deve possui a o TypeORM e suas dependencias instaladas.

    Após isto execute o seguinte comando.

    ```bash
    yarn typeorm migration:create -n CreateSetting
    ```

- **Como executar uma migration?**

    Para fazer uma migration, ou seja, exeutar tudo o que está contido no método `up()` da migration, execute o seguinte comando.

    ```bash
    yarn typeorm migration:run
    ```

- **Como reverter uma migration?**

    Para desfazer uma migration, ou seja, exeutar tudo o que está contido no método `down()` da migration, execute o seguinte comando.

    ```bash
    yarn typeorm migration:revert
    ```

- **O que é UUID?**

    É um identificador único universal. Ou melhor, é um número de 128 bits usado para identificar informações. O significado de cada bit é definido por qualquer uma das diversas variantes.

    ![Next%20Level%20Week%20#5%20-%20Node%20js%20117b46aff1dd4ad78238af20610e4f63/Untitled%201.png](Next%20Level%20Week%20#5%20-%20Node%20js%20117b46aff1dd4ad78238af20610e4f63/Untitled%201.png)

- **O que é Entities?**

    De forma simples, são as entidades definidas na modelagem de banco de dados.

- **O que é Repository?**

    Basicamente é, uma estrutura de uma classe que é responsável por fazer determinadas manipulações de dados na aplicação. Ou seja, está a responsável por intermediar a comunicação entre a entidade da aplicação e a tabela do banco de dados.

    Dessa forma, é mantida as responsabilidades das partes da aplicação mais separadas e organizadas.

- **O que são e quais são os tipos de parâmetros?**

    São formas de passar informações do cliente para o servidor através de uma requisição REST.

    São basicamente três tipos de parâmtros:

    - **Routes Params** (`/users/1`): são parâmetros passados através das rotas. Em determinadas casos está é a melhor maneira de buscar, deletar ou atualizar algo pelo ID.

        ```bash
        http://minhaapi.com/movies?name=transformes&duration=2&actor=octimusprime
        ```

    - **Query Params** (`?teste=1`): são parâmetros passados pela URL e têm a finalidade de filtros e buscas.

        ```bash
        GET http://minhaapi.com/movies/1
        ```

    - **Body Params** (`{ "name": "Fulano" }`): são os dados passados no corpo da requisição, geralmente utilizando um objeto JSON. ⚠️ Sempre utilizando no método POST da requisição.

        ```bash
        POST
        {
         "name": "fulano",
         "age": 18,
         "email": "fulano@mail.com"
        }
        ```

# Aula 03 - In Orbit

*Continuando a nossa aplicação*

- **O que são relacionamentos em banco de dados?**

    Existem três tipos de relacionamentos em banco de dados, e cada um deles tem o seu nome de acordo com os registros dos relacionamentos que estão acontecendo:

    - **One-to-One**: ocorre quando um registro de uma tabela tem uma, e apenas uma contraparte em uma outra tabela.
    - **One-to-Many**: ocorre quando um registro de uma tabela se relaciona com vários registros de uma outra tabela, mas que cada registro da segunda tabela só corresponde com um registro da primeira tabela.
    - **Many-to-Many**: ocorre quando um registro de uma tabela corresponde a um ou mais registros da segunda tabela e cada registro da segunda tabela corresponde a um ou mais registros da primera.

    Há também um caso especial que é conhecido como **Self-Relationship**. Este relacionamento ocorre quando utilizamos uma tabela para expor a relação de duas ou mais tabelas. Dessa forma ela irá se relacionar com ela mesma. Como ilustra o exemplo abaixo.

    ```
    id_empresa; (PK)
    empresa_nome;
    empresa_id_pai; (FK)
    ```

    Neste caso, sempre que inserir um registro numa tabela que tem uma FK, a FK só é validada caso todos os elementos que compõem a FK (se for composta) tenham valores diferentes de nulo. No caso acima, caso não insira o `"empresa_id_pai"` a FK não vai ser validada.

    Na prática, só podem ser cadastradas empresas filhas caso a pai esteja cadastrada.

# Aula 04 - Landing

*Trabalhando com websocket*

- **Como é a comuicação com o protocolo HTTP?**

    Basicamente, quando é realizado um requisição do cliente a requisição é enviada e o cliente permanece aguardando a resposta do servidor. Quando o servidor recebe a requisição ele responde de acordo com os parâmetros recebidos. Ou seja, a comunicação utilizando o protocolo HTTP, têm como base o fluxo de requisição e resposta, sendo que para cada ciclo de requesição e resposta é aberta uma nova conexão, o que, dependendo da aplicação, pode ser muito custoso para a conexão.

    ![Next%20Level%20Week%20#5%20-%20Node%20js%20117b46aff1dd4ad78238af20610e4f63/Untitled%202.png](Next%20Level%20Week%20#5%20-%20Node%20js%20117b46aff1dd4ad78238af20610e4f63/Untitled%202.png)

- **Como é a comunicação com o WebSocket?**

    Nesse tipo de comunicação, o cliente requisita a conexão, e quando é estabelecida a conexão entre cliente e servidor só é fechada quando um dos dois agente se desconecta. Ou seja, esse tipo de comunicação não é perdida a cada ciclo de requisição e resposta. Outra vantagem do websocket é que o servidor também pode mandar dados para o cliente sem a necessidade de uma requisição do cliente.

    ![Next%20Level%20Week%20#5%20-%20Node%20js%20117b46aff1dd4ad78238af20610e4f63/Untitled%203.png](Next%20Level%20Week%20#5%20-%20Node%20js%20117b46aff1dd4ad78238af20610e4f63/Untitled%203.png)

    Quando a comunicação é estabelecidade entre o cliente e o servidor, é gerado um id, e é esse id que garante a veracidade da conexão. Além disso o id, auxilia o servidor a gerenciar os eventos entre os clientes conectados a ele.

    Uma das bibliotecas mais famosas para trabalhar com websocket é a [Socket.iO](https://socket.io/).

- **O que é Template Client-Side?**

    É um modelo aplicado diretamente na marcação do site que é utilizado para renderizar a interface do cliente em tempo de execução. Algumas vantagens de utilizar este modelo é:

    - o aplicativo carregue mais rápido;
    - gere menos solicitação do servidor, e;
    - miniza o tráfego do servidor.

    Alguns exemplos famosos são:

    - Mustache, que é um dos mais famosos por ser simples, leve e logic-less (ou, sem lógica).

        [{{ mustache }}](https://mustache.github.io/)

    - Jade, sendo este específico para Node.js.

        [Jade - Template Engine](https://jade-lang.com/)

    - Handlebars, que é um minimal template, ou seja, simples e leve.

        [Handlebars](https://handlebarsjs.com/)

# Aula 05 - Surface Exploration

*Finalizando o projeto*

- **O que é callback?**

    Simplificando bastante, callback é a passagem de um pedaço de código executável como parâmetro para uma determinada função, sendo esperado que a função execute o código em algum momento de sua própria execução.

    Observe o exemplo abaixo, do que é um callback bem simples (simples mesmo).

    ```jsx
    function greeting(name) {
      alert('Hello ' + name);
    }

    function processUserInput(callback) {
      var name = prompt('Please enter your name.');
      callback(name);
    }

    processUserInput(greeting);
    ```

    Para mais informações sobre callbacks acesse os links abaixo.

    [Tentando simplificar Callbacks](https://medium.com/cwi-software/tentando-simplificar-callbacks-2e9074b304d3)

    [O que é e para que serve a função Callback na programação?](https://www.hostgator.com.br/blog/metodo-de-callback-o-que-e/)

    [Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
