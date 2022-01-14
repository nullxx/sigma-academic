 <h3 align="center">SIGMA ACADEMIC API</h3>

  <p align="center">
    Module for requesting academic info from SIGMA.

## Tabla de contenidos

- [Tabla de contenidos](#tabla-de-contenidos)
- [Sobre este proyecto](#sobre-este-proyecto)
- [Uso](#uso)
  - [Installation](#installation)
- [Ejemplo](#ejemplo)
- [Licencia](#licencia)
- [Contacto](#contacto)


## Sobre este proyecto

Este repositorio ha sido creado con fines únicamente educativos. Cualquier uso de este que infrinja alguna de las normas establecidas por el centro queda bajo su propia responsabilidad.


## Uso

El uso de este programa se escapa de mi responsabilidad. Quedará por tanto cualquier uso abusivo de el bajo su propia responsabilidad.

### Installation

We will need npm
* npm
```sh
npm install npm@latest -g
```

### Installation


1. Install the package
```sh
npm install --save @nullx/sigma-academic
```

2. Usage
```ts
import SigmaAcademic from "@nullx/sigma-academic";

const deusto = new SigmaAcademic({
  baseURL: "https://gaude.deusto.es",
  interceptToken: true,
});

async function main() {
  const loginResponse = await deusto.login({
    usuario: "<username goes here>",
    password: "<password goes here>",
  });

  if (loginResponse.errorCode !== 0)
    throw new Error("Login failed: " + loginResponse.mensajeError);
  if (loginResponse.perfiles.length === 0) throw new Error("No profiles found");

  const marksResponse = await deusto.getMarks({
    perfilActivo: loginResponse.perfiles[0].clavePerfil,
  });

  console.log(JSON.stringify(marksResponse, null, 2));
}

main();
```

* Edit examples/simple.ts with your information.
* `npm run build`
* `node dist/examples/simple.js`

* `baseURL` can be set by setting `BASE_URL` environment variable.
* `interceptToken` (automatically save login token) can be set by setting `INTERCEPT_TOKEN` environment variable.

## Ejemplo
Ejecuta los ejemplos de la carpeta examples/

## Licencia

Distributed under the MIT License. See `LICENSE` for more information.

## Contacto
Jon Lara - [@nullxme](https://twitter.com/nullxme)

Project Link: [https://github.com/nullxx/sigma-academic](https://github.com/nullxx/sigma-academic)
