# vuecli-vite-template
A template that uses both vite and webpack

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```bash
yarn serve # vue cli server

yarn dev # vite server
```

### Compiles and minifies for production
```bash
yarn build # vue cli build

yarn build:vite # vite build
```

## Examples

You can view the result in chrome console.

```javascript
// main.js
// ...

console.log(import.meta.env)
console.log(import.meta.env.MODE)
console.log(import.meta.env.PROD)
console.log(import.meta.env.DEV)
console.log(import.meta.env.BASE_URL)

console.log(new URL('./assets/logo.png', import.meta.url).href)
console.log(new URL('@/assets/logo.png', import.meta.url).href)

console.log(import.meta.glob('./components/*.vue', { eager: true }))
console.log(import.meta.glob('@/components/*.vue', { eager: true }))
console.log(import.meta.glob('@/components/*.vue'))

console.log(import.meta.glob('./**/*.js', { eager: true }))
console.log(import.meta.glob('@/**/*.js', { eager: true }))
```

### Lints and fixes files

```
yarn lint
```
