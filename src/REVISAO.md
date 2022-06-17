---------------------------------------------------AULA 7-----------------------------------------------------

`nest new projectname`
`npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata @nestjs/config`

permissão do entrypoint
`chmod +x .docker/entrypoint.sh`

depois de alterar no tsconfig o include e exclude, excluir a pasta node_modules para testar execução
`rm -rf node_modules`

primeiro start
`docker-compose up` -> só funcionou depois de iniciar o docker desktop

instalar a cli do prisma via pelo docker
da ctrl+c pra fechar e `docker-compose up -d` -> desenvolvedor
`docker-compose exec app bash` -> abrir termianl no docker
`npm install prisma -D` -> dentro do bash, pfv 🙏
`npx prisma init`

_formatação do schema.prisma_ e instalação das extensoes associadas

cria os arquivos de migração com base no schema prisma e instala o prisma client
`npx prisma migrate dev --name init`-> erro P1000, resolvi mudando a senha pra docker, nao sei o pq

constroi as alteracoes no banco de dados do prisma schema
`prisma generate` -> alterou o schema tem q usar _nao foi usado no momento_

`nest g service prisma` -> servico prisma

`docker-compose stop`-> para o serviço
`docker-compose down` -> remove os serviços
`docker-compose up` -> recria os serviços e inicia o serviço
`docker-compose ps` -> lista os serviços e mostra suas portas
`docker-compose exec app bash` -> inicia o bash dentro do docker
`npx prisma studio` -> inicia o prisma studio. comando usado dentro do bash.

---------------------------------------------------AULA 8-----------------------------------------------------
`nest g --help` --> comandos do nest
`nest g res users` --> res cria crud
pipe no main.ts
edicao dos servicos de CRUD, criado um repositorio e ajuste de métodos, atualizacao do usermodule adicionando o userrepository ao providers

---------------------------------------------------AULA 9-----------------------------------------------------
aula de tratamento de erros, mó chata
`nest g filter common/filters/http-exception --no-spec`

globalfilters no main.ts

---------------------------------------------------AULA 10-----------------------------------------------------

posts

`npx nest g res posts ` -> dentro do bash, ou seja, pós comando `docker-compose exec app bash`
no modulos de posts, joga o provider do prismaservice
createpostdto edit
criar o crud do posts e ajeitar o insomnia

tendi nada da mudança de authorid pra authoremail, mas é isso (40min+-)
relacionamento dos posts e edição de q areas queremos q apareça
backup do arquivo

---------------------------------------------------AULA 11-----------------------------------------------------
swagger
pelo container instale:
`docker-compose exec app bash`
`npm install --save @nestjs/swagger swagger-ui-express`

reseta aplicação
colocar os parametros necessarios para o usuario
updatedto do user e posts mudar o nestjs /mappedtypes pra /swagger
