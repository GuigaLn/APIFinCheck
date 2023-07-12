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


# USAR PRIMAS / CONFIGURAR
    yarn add prisma
    yarn prisma init