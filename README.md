# API de Gestão de Tarefas - NestJS + Prisma

Este projeto é uma API para gestão de tarefas desenvolvida com [NestJS](https://nestjs.com/) e [Prisma ORM](https://www.prisma.io/).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 24+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (versão recomendada: 17+)

## 📂 Configuração do ambiente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```
2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure o arquivo .env:**

- crie o arquivo na raiz do projeto
- Adicione a variável DATABASE_URL apontando para o seu banco PostgreSQL:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
```

4. **Executando as migrations do Prisma:**

```bash
npx prisma migrate dev

npx prisma generate
```

4. **Rodando o projeto:**

```bash
npm run start:dev
```
