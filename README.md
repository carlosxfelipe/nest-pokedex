<div align="center">
  <a href="http://nestjs.com/" target="blank" style="margin-right: 20px;">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  </a>
  <a href="https://pokeapi.co/" target="blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" width="200" alt="Poké Ball" />
  </a>
</div>

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

5. Reconstruir o banco de dados com a semente

```
localhost:3000/api/v2/seed
```

6. Iniciar o servidor em modo de desenvolvimento

```
npm run start:dev
```

## Stack utilizado

- MongoDB
- Nest
