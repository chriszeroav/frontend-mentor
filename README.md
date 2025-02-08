# 🚀 Frontend Mentor - Monorepo con Nx

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45">
</a>

Bienvenido a **FrontendMentor Monorepo**, donde estaré agrupando los proyectos que realice de [Frontend Mentor](https://www.frontendmentor.io/) utilizando diversas tecnologías.

Aunque los desafíos pueden implementarse en distintos frameworks o librerías, **principalmente usaré Next.js**, que es mi especialidad. Para gestionar el código de manera eficiente y escalable, utilizo **Nx** como herramienta de monorepos.

---

## 📂 Estructura del Monorepo

Este monorepo sigue una estructura modular basada en **Nx**, lo que permite mantener proyectos separados pero con dependencias compartidas. Cada desafío de Frontend Mentor estará en su propia aplicación dentro del monorepo.

```
/apps
  /project-1  # Un desafío implementado con Next.js
  /project-2  # Otro desafío en Astro o React
/libs
  /ui-components         # Componentes reutilizables de shadcn
```

---

## 🚀 Cómo ejecutar un proyecto

Para levantar un servidor de desarrollo en uno de los proyectos, usa:

```sh
npx nx dev nombre-del-proyecto
```

Para construir la versión de producción:

```sh
npx nx build nombre-del-proyecto
```

Para ver todos los comandos disponibles:

```sh
npx nx show project nombre-del-proyecto
```

También puedes ejecutar:

```sh
npx nx graph
```

Para visualizar las dependencias dentro del monorepo.

---

## ➕ Agregar nuevos proyectos

Para agregar un nuevo desafío de Frontend Mentor en **Next.js**, ejecuta:

```sh
npx nx g @nx/next:app nombre-del-proyecto
```

Si el proyecto es en **React**, puedes usar:

```sh
npx nx g @nx/react:app nombre-del-proyecto
```

Para listar todos los plugins instalados:

```sh
npx nx list
```

Si deseas ver todas las opciones disponibles de un plugin en específico:

```sh
npx nx list <plugin-name>
```

---

## 📢 Contribuciones y Feedback

Este monorepo es de uso personal, pero si tienes sugerencias o mejoras, ¡serán bien recibidas! Puedes abrir un **issue** o contactarme.

¡Gracias por visitar este repositorio! 🚀💡
