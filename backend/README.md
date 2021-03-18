# Fake API com json-server

Este arquivo contém os passos necessários para se criar e rodar uma API básica utilizando json-server.
Utilize este tipo de recurso quando precisar testar aplicações clientes, e suas requisições.

## Instalação e configuração

 1. [Nodejs e NPM](#nodejs-e-npm)
 2. [Criar projeto e instalar json-server](#criar-projeto-e-instalar-json-server)
 3. [Iniciar servidor](#iniciar-servidor)



### NodeJs e NPM

Instale as dependências necessárias:

```bash
sudo apt-get install build-essential libssl-dev
```

Baixe o script de instalação nvm (Node Version Manager) para o seu computador:

```bash
curl –sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh
```

Execute o script baixado:

```bash
bash install_nvm.sh
```

Se o script tiver sido executado corretamente, ele solicitará que seu terminal seja reiniciado, reinicie-o.
Agora, com o nvm instalado vamos efetivamente instalar o node. Você pode obter uma lista das versões disponíveis rodando o comando a seguir:

```bash
nvm ls-remote
```

A partir desta lista, escolha qual versão deseja instalar.
Caso não saiba qual escolher, visite o site [https://nodejs.org/en/](https://nodejs.org/en/) para ver qual a última versão LTS disponível e dê preferência para ela.

Feita a escolha, rode o comando abaixo para instalar o node:

```bash
nvm install 12.16.3 # No meu caso a versão LTS era a v12.16.3
```

Com isso, você já possui o node e o npm instalados em sua máquina.

### Criar projeto e instalar json-server

Inicialize seu projeto:

```bash
npm init -y
```

Instale o json-server:

```bash
npm install json-server
```

Crie um arquivo db.json na pasta do seu projeto, este será seu arquivo de banco de dados:

```bash
touch db.json
```

Você deve inicializar seu arquivo com alguns dados, como os objetos que deseja manter, e seus atributos. Segue um exemplo abaixo:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Caneta BIC Preta",
      "price": 2.5
    },
    {
      "id": 2,
      "name": "Marca Texto BIC Verde",
      "price": 4
    },
    {
      "id": 3,
      "name": "Borracha Faber-Castell",
      "price": 3.25
    }
  ]
}
```

### Iniciar servidor

Com seu arquivo de "banco de dados" criado, configure um script no seu package.json para inicializar o servidor.
Para isto, sobre escreva o conteúdo da chave "test" de dentro da chave "script": (você pode apagar a chave test)

```json
"scripts": {
	"start": "json-server --watch db.json --port 3001"
},
```

Feito isso, basta iniciar seu json-server:

```bash
npm start
```

Para mais detalhes, leia a documentação oficial em:
[https://github.com/typicode/json-server](https://github.com/typicode/json-server)
