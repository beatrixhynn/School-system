# 🎓 School System

Sistema web para gerenciamento escolar desenvolvido utilizando **Angular 17** no Front-end e **Spring Boot** no Back-end.

O projeto foi desenvolvido com foco em boas práticas de desenvolvimento, arquitetura em camadas, componentização e experiência do usuário, simulando um sistema administrativo para uma instituição de ensino.

---

# 📚 Funcionalidades

## 🔐 Autenticação

- Login de usuários
- Cadastro de usuários
- Logout com confirmação
- Controle de acesso por perfil
- Proteção de rotas utilizando Guards
- Interceptor JWT

---

## 👨‍🏫 Professores

- Listagem
- Cadastro
- Edição
- Exclusão
- Visualização detalhada

---

## 👨‍🎓 Alunos

- Listagem
- Cadastro
- Edição
- Exclusão
- Visualização detalhada

---

## 🏫 Turmas

- Cadastro
- Edição
- Exclusão
- Associação com professores

---

## 🍎 Refeições

- Cadastro
- Edição
- Exclusão
- Visualização

---

## 🎨 Interface

- Layout responsivo
- Header institucional
- Footer institucional
- Página 404 personalizada
- Empty State
- Toasts de sucesso e erro
- Loading Spinner Global
- Scroll automático entre páginas
- Componentização completa
- Formulários reativos
- Validações de formulário

---

# 👥 Perfis

## ADMIN

Possui acesso completo ao sistema.

Pode:

- Gerenciar alunos
- Gerenciar professores
- Gerenciar turmas
- Gerenciar refeições

---

## PAI

Possui acesso apenas às páginas públicas da aplicação.

---

# 🛠 Tecnologias

## Front-end

- Angular 17
- TypeScript
- SCSS
- PrimeNG
- RxJS
- FontAwesome

---

## Back-end

- Java 17
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- MySQL

---

# 🏗 Arquitetura

Durante o desenvolvimento foram aplicados conceitos como:

- Componentização
- Standalone Components
- Reactive Forms
- Service Layer
- Repository Pattern
- DTO Pattern
- REST API
- Guards
- HTTP Interceptors
- Injeção de Dependência
- Separação entre Front-end e Back-end
- Organização por Features

---

# 📁 Estrutura do Projeto

```
src
│
├── auth
│
├── features
│   ├── teacher
│   ├── student
│   ├── grade
│   └── school-meal
│
├── guards
│
├── interceptors
│
├── layout
│
├── pages
│
├── shared
│   ├── footer
│   ├── header
│   └── loading
│
└── styles
```

---

# 🔒 Segurança

- Autenticação via JWT
- Controle de acesso por perfil
- Guards de rota
- Interceptor para autenticação
- Interceptor global de Loading

---

# 🚀 Como executar

## Backend

Clone o projeto

```bash
git clone https://github.com/seu-usuario/backend.git
```

Entre na pasta

```bash
cd backend
```

Configure o banco MySQL no arquivo:

```properties
application.properties
```

Execute:

```bash
mvn spring-boot:run
```

---

## Front-end

Clone o projeto

```bash
git clone https://github.com/seu-usuario/frontend.git
```

Entre na pasta

```bash
cd frontend
```

Instale as dependências

```bash
npm install
```

Execute

```bash
npm start
```

---

# 🗄 Banco de Dados

Configuração padrão:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/db_school
spring.datasource.username=root
spring.datasource.password=******
```

---


# 📌 Funcionalidades implementadas

- ✅ Login
- ✅ Cadastro de usuários
- ✅ Controle por perfil
- ✅ CRUD de Professores
- ✅ CRUD de Alunos
- ✅ CRUD de Turmas
- ✅ CRUD de Refeições
- ✅ Página 404
- ✅ Loading Global
- ✅ Toasts
- ✅ Empty State
- ✅ Layout Responsivo
- ✅ Footer institucional
- ✅ Header institucional
- ✅ Componentização
- ✅ Reactive Forms
- ✅ Validação de Formulários

---

# 🚧 Melhorias Futuras

- Dashboard administrativo
- Upload de imagem para usuários
- Recuperação de senha
- Paginação
- Pesquisa avançada
- Testes unitários
- Docker
- Deploy em produção

---

# 👩‍💻 Desenvolvido por

**Beatriz**

LinkedIn: www.linkedin.com/in/beatriz-goncalves1919

GitHub: (https://github.com/beatrixhynn)

---

⭐ Caso tenha gostado do projeto, deixe uma estrela no repositório.
