# Prueba Técnica Desarrollador Frontend

**Objetivo**

Evaluar el manejo básico de React, consumo de APIs, maquetado con librerías de UI
(Material UI / Bootstrap / Tailwind), y la capacidad para estructurar un proyecto limpio y
funcional.

## Contenido

- [Consigna general](#consigna-general)
- [Parte 2 - MySQL](#parte-2---mysql)
- [Entrega](#entrega)
- [Extra](#extra-no-obligatorio)

---

- [Tecnologías usadas](#tecnologías-usadas)
- [Guía para ejecutar la web app](#guía-de-ejecutar-la-web-app)
- [Breve explicación de las decisiones técnicas tomadas](#breve-explicación-de-las-decisiones-técnicas-tomadas)
- [Archivo SQL solicitado](#archivo-sql-solicitado-entregasql)
- [Interfaz gráfica de la base de datos](#interfaz-gráfica-de-la-base-de-datos)
- [Enlaces útiles](#enlaces)

## Consigna general

Desarrollar una mini aplicación web de autos donde se pueda:

1. Mostrar un listado de vehículos (marca, modelo, precio, imagen, etc.).

- El listado puede obtenerse desde una API pública o desde una base de datos local (JSON o mock interno).

2. Agregar filtros de búsqueda en la vista principal:

- Por marca
- Por rango de precio
- (Opcional: por año o tipo de combustible)

3. Crear una ruta individual o pop-up para cada vehículo:

- Al hacer clic en un auto, debe abrirse una página o modal con el detalle
  (foto, descripción, precio, etc.).

4. Diseño y UI:

- Utilizar React.
- Puede emplear Material UI, Bootstrap 5, o TailwindCSS (a elección).
- Se valorará una presentación limpia, responsiva y moderna.

5. Extra (puntos adicionales):

- Buen manejo de componentes reutilizables.
- Estructura clara del proyecto (carpetas, nomenclatura, etc.).

### Entregables

- Repositorio en GitHub o ZIP con el proyecto.
- Archivo README.md con:
  - Instrucciones para correr el proyecto.
  - Breve explicación de las decisiones técnicas tomadas.

## Parte 2 - MySQL

### Consigna

Imagina que sos una agencia de autos, con un sistema que gestiona stock y ventas.
Debés crear una base de datos en MySQL que contemple la siguiente lógica:

- Tenés un stock de vehículos.
- Tenés clientes que pueden realizar compras.
- Cada venta está relacionada con una unidad (auto vendido) y un cliente.
- Cada venta debe registrar además una forma de pago.
- (Podés incluir al menos 2 tipos de forma de pago, por ejemplo: Efectivo y Transferencia).

### Requisitos

1. Crear las tablas necesarias para representar esa estructura (vehículos, clientes, ventas, formas de pago, etc.).
2. Cargar al menos 20 registros combinados que representen clientes, autos y ventas.
3. Asegurarte de que las relaciones entre tablas estén correctamente definidas (llaves primarias y foráneas).

### Consultas a realizar

Escribí las siguientes 3 queries sobre la base creada:

1. Todas las ventas realizadas por un mismo cliente.
2. Todos los vehículos con año mayor a 2020.
3. Todas las ventas que tengan como forma de pago “Efectivo”.

## Entrega

- Archivo .sql con:
  - Creación de tablas
  - Inserción de datos
  - Consultas solicitadas

## Extra (no obligatorio)

- Si querés sumar puntos: mostrale en tu app de React los datos desde tu base (por ejemplo, usando un endpoint en Node o PHP).

## Tecnologías usadas

- Prisma: para manejar la base de datos de manera tipada y segura.
- Gsap: para animaciones.
- Lenis: para scroll suave.
- Tailwindcss: para estilos css.
- Nextjs: framework de React.

## Guía de ejecutar la web app

Modificar del archivo [.env](.env) la variable DATABASE_URL a la base de datos MySQL que tengas.

Instalar dependencias

```bash
npm i
```

Inicializar prisma en el proyecto:

```bash
npx prisma init --datasource-provider mysql --output ../app/generated/prisma
```

Crear schema y tablas y poblar base de datos:

```bash
npx prisma migrate dev --name init
```

Ejecutar la aplicación

```bash
npm run dev
```

### Breve explicación de las decisiones técnicas tomadas.

- Conecté directamente la aplicación a la base de datos usando Prisma en lugar de un mock local.
- Usé Prisma por su tipado, facilidad de uso e integración con Next.js.
- La búsqueda en tiempo real del navbar se implementó como Client Component con consultas vía API Routes, ya que `searchParams` no puede manejarse desde el navbar como en `page.tsx`.
- Los componentes que obtienen autos y filtros se implementaron como Server Components para reducir el bundle y mejorar TTFB aprovechando llamadas directas a Prisma.
- Se normalizaron los parámetros de filtrado para asegurar tipos válidos y evitar errores en consultas dinámicas.
- La UI se dividió siguiendo responsabilidad única para simplificar mantenimiento y escalabilidad.
- Los filtros (marcas, modelos, etc.) se cargan dinámicamente desde la base de datos, evitando listas hardcoded.
- Los filtros se organizan en secciones colapsables usando elementos nativos `<details>`.
- Se añadieron las rutas especiales `not-found` y `loading` para estados de error y carga.

### Archivo SQL solicitado: [entrega.sql](sql/entrega.sql)

### Interfaz gráfica de la base de datos.

```bash
npx prisma studio
```

## Enlaces

- https://tailwindcss.com/docs
- https://gsap.com/docs/v3/
- https://lenis.darkroom.engineering/
- https://nextjs.org
- https://www.prisma.io/docs/guides/nextjs
- https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql
