# EduNextJS

This repo contains _boilerplate_ of **EduNextJS**. **You should not** use this repo directly, please clone this repo for your personal/project use.

## Overview

This repo was created with intention to rebuild existing [Borrower Web App _(Angular)_](https://edufund.co.id) from scratch using **_NextJS_**.

Before use please clone this repo and change the name of the project inside _`package.json`_ file

```
{
	name: #YOUR_DESIRED_PROJECT_NAME,
	...
}
```

## Dependencies

- [Next](https://nextjs.org/)
- [React](https://reactjs.org/)
- React-DOM
- Typescript
- ESLint
- [Prettier](https://prettier.io/)
- [clsx](https://github.com/lukeed/clsx)
- [TailwindCSS](https://tailwindcss.com/)
- [Husky](https://typicode.github.io/husky)

## Installation

#### Clone Repository

```
git clone { ssh | https }
```

#### SSH

```
git@github.com:edufund-tech/edunextjs.git
```

#### HTTPS

```
https://github.com/edufund-tech/edunextjs.git
```

#### Installing Dependency

Run one of this command in your terminal

```
npm install
```

or

```
yarn
```

## Run Project Locally

To run this project locally you can run one of this command in your terminal

```
npm run dev
```

or

```
yarn dev
```

And then check out [http://local.edufund.co.id:3200](http://local.edufund.co.id:3200) in your browser to see the result.

There is also a built-in _API Routes_ that can be accessed on [http://local.edufund.co.id:3200/api/info](http://local.edufund.co.id:3200/api/info) to see current project name and version.

## To Do List

- [x] Initialize project repository
- [x] Remove boilerplate code from _create-next-app_
- [x] Add TailwindCSS
- [x] Add Prettier
- [x] Add clsx
- [x] Setup Husky _pre-commit hooks_
- [x] Add _version check_ API Routes
- [ ] Add tRPC
- [ ] Add themes to _tailwind config_
