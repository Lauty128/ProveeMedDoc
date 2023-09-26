---
sidebar_position: 1
description: 'Obtener datos sobre de los proveedores'
---

## /providers

- **Endpoint:** `api/proveedores`
- **Método:** GET
- **Parámetros Opcionales:**
  - `word` (string, opcional): Filtra la lista de proveedores para incluir solo aquellos que contengan la palabra o letras especificadas por el usuario (no distingue entre mayúsculas, minúsculas y acentos).
  - `equipments` (boolean, opcional): Si se establece como `true`, la respuesta incluirá la cantidad de equipos que vende cada proveedor.
  - `category` (string, opcional): Filtra la lista de proveedores para incluir solo aquellos que venden equipos de una categoría médica específica. Se debe pasar el id de la categoria
- **Descripción:** Obtiene una lista de todos los proveedores, opcionalmente filtrados y ordenados alfabéticamente. La respuesta incluye el nombre del proveedor, su correo electrónico y sitio web, en caso de que tenga

### Ejemplos de Uso

```http
GET https://domain/api/providers
```

```json
{
  "page":1,
  "limit":20,
  "total":152,
  "hasPrevPage":false,
  "hasNextPage":true,
  "data": [
    {
      "providerID":1,
      "name":"Proveedor 1",
      "web":"www.proveedor1.com",
      "mail":"consultas@proveedor1.com"
    },
    {
      "providerID":2,
      "name":"Proveedor 2",
      "web":"www.proveedor2.com",
      "mail":"consultas@proveedor2.com"
    },
    ...
  ]
}
```

Si queremos obtener la **cantidad de equipos** que vende cada proveedor pasamos el parámetro `equipments=true`. Al pasar este parámetro obtendremos, en cada elemento, un atributo extra, de tipo Integer, llamado `total`

```http
GET https://domain/api/providers?equipments=true
```

```json
{
  "page":1,
  "limit":20,
  "total":152,
  "hasPrevPage":false,
  "hasNextPage":true,
  "data": [
    {
      "providerID":1,
      "name":"Proveedor 1",
      "web":"www.proveedor1.com",
      "mail":"consultas@proveedor1.com",
      "total":12
    },
    {
      "providerID":2,
      "name":"Proveedor 2",
      "web":"www.proveedor2.com",
      "mail":"consultas@proveedor2.com",
      "total":8
    },
    ...
  ]
}
```

### Respuestas

La respuesta de este endpoint incluirá una lista de proveedores que cumplan con los criterios especificados. Cada entrada en la lista contendrá el nombre del proveedor, correo electrónico y sitio web, en caso de que tenga. Si se ha especificado la opción `equipments=true`, también se incluirá la cantidad de equipos que vende cada proveedor.


## /providers/[:id]

- **Endpoint:** `api/proveedores/[:id]`
- **Método:** GET
- **Parámetros Opcionales:** No recibe parámetros
- **Descripción:** Obtiene todos los datos que contiene la base de datos sobre un proveedor. Nombre, sitio web, correo electrónico, números de teléfono, direcciones y un listado con los tipos de equipos(categorías) que comercializa

### Ejemplos de Uso

```http
GET https://domain/api/providers/2
```

```json
{
  "providerID":2,
  "name":"Proveedor 2",
  "web":"www.proveedor2.com",
  "mail":"consultas@proveedor2.com",
  "phone":"00 - 0000000",
  "address":"Adress 1 | Adress 2"
  "categories": [
    {
      "categoryID":1,
      "name":"Categoria 1"
    },
    {
     "categoryID":2,
      "name":"Categoria 2"
    },
    ...
  ]
}
```

### Respuestas
La respuesta de este endpoint incluirá todos los datos del proveedor solicitado mediante su id, incluyendo un arreglo con la lista de categorías que comercializa.

Si el proveedor buscado **no existe** se devuelve un `false`
