# Nuxt 3 Minimal Starter

Confira a [documentação do Nuxt 3](https://nuxt.com/docs/getting-started/introduction) para saber mais.

## Introdução

Este projeto é uma aplicação web desenvolvida com NuxtJS, um poderoso framework baseado em Vue.js. Ele incorpora várias funcionalidades modernas, incluindo Storybook para documentação de componentes, Tailwind CSS para estilos, Pinia para gerenciamento de estado, além de ferramentas integradas de testes e acessibilidade.

## Pré-Requisitos

- **Node.js**: Versão 18. Certifique-se de ter a versão correta instalada para compatibilidade ideal.

## Instalação

Siga estas etapas para configurar o projeto em sua máquina local.

### Clonando o Repositório

Primeiro, clone o repositório para sua máquina local usando Git:

```bash
git clone https://github.com/oituty/the-cocktail-bar.git
cd the-cocktail-bar
```

### Instalando Dependências

No diretório do projeto, execute o seguinte comando para instalar todas as dependências necessárias:

```bash
npm install
```

## Executando o Projeto

### Iniciando o Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

Após iniciar, o projeto estará disponível em `http://localhost:3000`.

### Visualizando a Documentação Tailwind

Para acessar a documentação do Tailwind, navegue para `http://localhost:3000/_tailwind` em seu navegador.

## Funcionalidades do Projeto

### Storybook para Documentação de Componentes

O Storybook é utilizado para documentar e visualizar componentes de forma isolada.

Execute o seguinte comando para iniciar o Storybook:

```bash
npm run storybook
```

Após iniciar, o Storybook estará acessível em `http://localhost:3001`.

### Pinia para Gerenciamento de Estado

Pinia é usado para gerenciar o estado dos favoritos na aplicação.

### Testes de Componentes com Storybook Test Runner

O Storybook Test Runner é usado para realizar testes automatizados nos componentes e interações.

Para executar os testes, use o comando:

```bash
npm run test:storybook
```

### Testando Acessibilidade com Storybook Accessibility

Esta ferramenta ajuda a garantir que os componentes atendam aos padrões de acessibilidade.

A acessibilidade pode ser testada diretamente no Storybook, onde addons específicos fornecem feedback em tempo real.

### Módulo Google Fonts

O projeto usa o módulo Google Fonts para gerenciar fontes. As fontes são automaticamente incluídas e podem ser aplicadas usando classes do Tailwind ou CSS padrão.
