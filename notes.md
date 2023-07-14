# API

## Controllers
Quem recebe as requisições HTTP. (aonde ficara as rotas).
Fará a validação de dados.

    Decoreitor: 
        @Controller()
        @Get()
        @Post()

## Services
Regras de negócios / casos de usos
Manipular banco de dados, fazer tudo o que a rota pedir.

## Ingeção de dependência
    @Injectable()

## Modules
Serve para organizar, além disso, serve para criar todas instancias.


# BANCO DE DADOS 
## Query
Sql feita a mão. ( select * from usuarios )

## Query Build
Ferramentos com sintaxe de SQL. ( select('*').from(usuarios) )

## ORM -> Object Relational Mapping
Não precisa escrever as sqls e ter o conhecimento das sqls.
Lidamos como um objeto.
Usar ORM com Query a mão nos casos de gargalos.


## USAR PRIMAS / CONFIGURAR
    yarn add prisma
    yarn prisma init
    configurar .env

No arquivo schema.primsa, criamos o modelos

    model User {
        id       String @id @default(uuid()) @db.Uuid
        name     String
        email    String @unique
        password String
    }




## Criando recurso (pastas com funcoes)
* nest g resource users

DTO -> Objeto que enviamos para um metodo (somente padrao de nomemclatura)

## Fluxo Create User
    Request -> Pipes -> UsersControoler.create -> UsersService.create

Pipe serve para transformar (int para string), ou validar (como meu middleware)
https://github.com/typestack/class-validator#usage