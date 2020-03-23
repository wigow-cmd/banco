//npm start

###
//criar usuário
POST http://localhost:3001/auth/signup
content-type: application/json

{
  "name": "User 1",
  "mail": "user@mail.com",
  "passwd": "123456"
}

###
//logar usuário
POST http://localhost:3001/auth/signin
content-type: application/json

{
  "mail": "user@mail.com",
  "passwd": "123456"
}

###
//criar conta usando token de segurança
POST http://localhost:3001/v1/accounts
content-type: application/json
Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlVzZXIgMSIsIm1haWwiOiJ1c2VyQG1haWwuY29tIn0.e_A0xMSs7UXwXn9dVeqnbzxXWCg35ICf5U30Vs_t6-g

{
  "name": "ACC123"
}

###
//ver contas do usuário
GET http://localhost:3001/v1/accounts
content-type: application/json
Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlVzZXIgMSIsIm1haWwiOiJ1c2VyQG1haWwuY29tIn0.e_A0xMSs7UXwXn9dVeqnbzxXWCg35ICf5U30Vs_t6-g
