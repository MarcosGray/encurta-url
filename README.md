# encurta-url
Projeto desenvolvido com nodejs, express, ejs e mysql, tem o objetivo de encurtar uma url.

### Entendendo o funcionamento
 
A página tem um campo onde deve ser colocado a url, para que possa ser encurtada.


OBS.: Caso clique no botão ENCURTAR com o campo vazio, o site vai limpar o campo sem gerar a url.

Todas as url's geradas vão ser mostradas na seção "Lista de Urls", e ao clicar na url encurtada vai abrir a página escolhida em outra aba do navegador.

## Como instalar e rodar o projeto

### Passo 1:
Baixe o projeto usando o codigo abaixo.

<code>https://github.com/MarcosGray/encurta-url.git</code>

### Passo 2:
Entre na pasta do projeto usando o codigo abaixo.

<code>cd encurta-url/</code>

### Passo 3:
Dentro da pasta execute o codigo abaixo.

<code>npm install</code>

### Passo 4:
Para rodar o projeto execute o codigo abaixo.

<code>npm start</code>

### Passo 6:
Abra um navegador da sua preferencia e cole a url abaixo.

<code>http://localhost:8081/</code>

## Observações sobre o projeto
As url's estão sendo salva numa base remota, que não precisa ser configurado. Pois ao executar "npm start" o projeto será executado e conectará automaticamente a base de dados.

### Abaixo um exemplo.

![Demo do site encurtador de Url](public/images/encurtador.gif)
  

 
