![Preview do Projeto](./preview.png)

# Executar em desenvolvimento

1. Clonar o repositório
2. Executar

```
npm install
```

3. Ter o Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Subir o banco de dados

```
docker-compose up -d
```

5. Clonar o arquivo `.env.template` e renomear a cópia a `.env`

```
MONGODB=mongodb://localhost:27017/nest-pokemon
PORT=3000
DEFAULT_LIMIT=10
```

6. Reconstruir o banco de dados com a semente (opcional)

```
localhost:3000/api/v2/seed
```

7. Iniciar o servidor em modo de desenvolvimento

```
npm run start:dev
```

## Stack utilizado

- MongoDB
- Nest
