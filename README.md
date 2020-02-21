# AirCnC


Na semana OmniStack 9.0 foi desenvolvido o clone do **Airbnb** para desenvolvedores, o AirCnC *(Code and Coffee)*, com foco em conectar empresas e desenvolvedores.

Utilizamos a stack **_NodeJS, ReactJS e React Native + Expo_**.

API foi construída utilizando o NodeJS e o banco de dados MongoDB para servir o Front-END tanto da Web quanto do Mobile.
Finalizamos o projeto com uma mensagem de requisição de agendamento em tempo real utilizando o Socket.io.


### **_WEB_**
- Login
![tela-login](https://user-images.githubusercontent.com/47895394/66323657-81e13980-e8fa-11e9-8130-e2de543b03ff.png)

- Cadastro
![tela-cadastro-spot](https://user-images.githubusercontent.com/47895394/66323907-eef4cf00-e8fa-11e9-95b0-91e599a08117.png)

- Dashboard
![tela-dasboard](https://user-images.githubusercontent.com/47895394/66324118-48f59480-e8fb-11e9-982d-ae867686d9e3.png)


### **_MOBILE_**
![aircncmobe](https://user-images.githubusercontent.com/47895394/75056555-0998a080-54b6-11ea-947e-39dd2ef9e097.jpg)

## :rocket: Tecnologias


### API
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Multer](https://github.com/expressjs/multer)

### WEB
- [ReactJS](https://reactjs.org/)
- [Socket.io](https://socket.io/)
- [Axios](https://github.com/axios/axios)

### MOBILE
- [React Native](http://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Socket.io](https://socket.io/)
- [Axios](https://github.com/axios/axios)

## :information_source: COMO USAR:

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](nodejs) or higher + [Yarn v1.13](yarn) or higher installed on your computer. From your command line:

### **Clonar o repositório**

```bash
# Clone this repository
$ git clone https://github.com/diaslilian/aircnc

# Go into the repository
$ cd aircnc
```

### **API**

> Logo após clonar o repositório navegue ate a pasta backend e execute o comando yarn install ou npm install.

> Logo após seguir tudo que foi feito acima pode executar o comando _yarn start_ ou _npm start_

:warning:  **IMPORTANT**

Você vai precisar criar uma conta no Mongo Atlas e criar um cluster e logo após pegar sua string de conexão e colocar dentro do arquivo example.env dentro da pasta backend, nele deve conter MONGO= sua string de conexão com Mongo Atlas, após colocar sua string de conexão renomeie o arquivo para apenas .env.
> Config in: backend/src/server.js file mongoose.connect('your-mongodb-connect-here

Logo após seguir tudo que foi feito acima pode executar o comando yarn dev ou npm run dev e o então deverá aparecer no console [SERVER] server runing in port 3333.

:exclamation: The backend will start on 3333 port

```bash
# Go into backend
$ cd backend

# Install dependencies
$ yarn install

# Start the backend server
$ yarn dev
```


### WEB

> Após seguir os passos acima e o backend está funcionando vá para pasta web e execute yarn install ou npm install.

> Depois das dependências terminarem de instalar execute o comando yarn start ou npm run start.

:exclamation: The frontend will start on http://localhost:3333

```bash
# Go into frontend
$ cd frontend

# Install dependencies
$ yarn install

# Start the frontend
$ yarn start
```

### MOBILE
> Para executar o mobile entre na pasta do mobile logo após o backend estar funcionando execute yarn install ou npm install.

> Após as dependências terminarem de baixar execute yarn start ou npm start. O expo já estará funcionando para você ler o Qr Code e utilizar a aplicação.

```bash
# On another terminal, go to the mobile folder
$ cd ../mobile

# Install dependencies
$ yarn install

# Start the expo server
$ yarn start
```

<br><br>
Created by Lilian Dias :wave: [Hi-5!](https://www.linkedin.com/in/dias-lilian/)
