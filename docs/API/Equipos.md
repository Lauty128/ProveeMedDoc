---
sidebar_position: 1
description: 'Obtener datos sobre los equipos'
---

## **/equipments**

- **Endpoint:** `/equipments`
- **Método:** GET
- **Parámetros Opcionales:**
  - `word` (string, opcional): Filtra la lista de equipos para incluir solo aquellos que contengan la palabra o letras especificadas por el usuario (no distingue entre mayúsculas, minúsculas y acentos).
  - `category` (string, opcional): Filtra la lista de equipos para incluir solo aquellos que pertenezcan a una categoría específica. Se debe pasar el id de la categoria
- **Descripción:** Obtiene una lista ascendente de todos los equipos médicos disponibles junto con detalles sobre el nombre del equipo, su ID único, la categoría a la que pertenece y el ID de esa categoría.

### Ejemplo de Uso

```http
GET https://domain/equipments
```

```json
{
  "page":1,
  "limit":20,
  "total":152,
  "hasPrevPage":false,
  "hasNextPage":true,
  "data":[
    {
        "equipmentID": 1,
        "name": "Equipo 1",
        "categoria_id": 8,
        "category": "Categoria 8",
        
    },
    {
        "equipmentID": 2,
        "name": "Equipo 2",
        "categoria_id": 4,
        "category": "Categoria 4"
    },
    {
        "equipmentID": 3,
        "name": "Equipo 3",
        "categoria_id": 2,
        "category": "Categoria 2"
    },
    ...
  ]
}
```

### Respuesta

La respuesta de este endpoint contendrá una lista de todos los equipos médicos disponibles, ordenados alfabeticamente. Cada entrada en la lista proporcionará detalles sobre un equipo en particular, incluyendo su nombre, ID único, el nombre de la categoría a la que pertenece y el ID de esa categoría.


<!--
██████╗░██████╗░░█████╗░██╗░░░██╗███████╗███████╗██████╗░░█████╗░██████╗░
██╔══██╗██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗
██████╔╝██████╔╝██║░░██║╚██╗░██╔╝█████╗░░█████╗░░██║░░██║██║░░██║██████╔╝
██╔═══╝░██╔══██╗██║░░██║░╚████╔╝░██╔══╝░░██╔══╝░░██║░░██║██║░░██║██╔══██╗
██║░░░░░██║░░██║╚█████╔╝░░╚██╔╝░░███████╗███████╗██████╔╝╚█████╔╝██║░░██║
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝╚═════╝░░╚════╝░╚═╝░░╚═╝
 -->

## **/equipments/:id**

- **Endpoint:** `/equipments/[id]`
- **Método:** GET
- **Parámetros:** 
  - `id` (number): Identificador del equipo 
- **Descripción:** Obtiene detalles específicos sobre un equipo médico en particular, identificado por su ID único. La respuesta incluirá información como el nombre del equipo, su ID, la categoría a la que pertenece, el ID de la categoría correspondiente y un codigo UMDNS que lo identifica mundialmente.

### Ejemplo de Uso

```http
GET https://domain/equipments/34
```

```json
{
  "equipmentID": 34,
  "name": "Analizador de Catecolaminas",
  "categoryID": 3,
  "category": "Categoria 3",
  "umdns": "17-173"
}
```

### Respuesta

La respuesta de este endpoint contendrá detalles específicos sobre el equipo médico identificado por el `id`. Estos detalles incluirán el nombre del equipo, su ID, la categoría a la que pertenece y el ID de la categoría correspondiente.

<!-- 
██████╗░██████╗░░█████╗░██╗░░░██╗███████╗███████╗██████╗░░█████╗░██████╗░
██╔══██╗██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗
██████╔╝██████╔╝██║░░██║╚██╗░██╔╝█████╗░░█████╗░░██║░░██║██║░░██║██████╔╝
██╔═══╝░██╔══██╗██║░░██║░╚████╔╝░██╔══╝░░██╔══╝░░██║░░██║██║░░██║██╔══██╗
██║░░░░░██║░░██║╚█████╔╝░░╚██╔╝░░███████╗███████╗██████╔╝╚█████╔╝██║░░██║
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝╚═════╝░░╚════╝░╚═╝░░╚═╝
 -->

## **/equipments/:id/providers**

- **Endpoint:** `/equipments/[id]/providers`
- **Método:** GET
- **Parámetros:**
  - `id` (number): Identificador del equipo 
  - `page` (number, opcional): Dicta el numero de pagina en el que se encuentra actualmente. (Por defecto es 1)
  - `limit` (number, opcional): Indica la cantidad de elementos mostrados por pagina (Por defecto es 40).
- **Descripción:** Obtiene los proveedores que vendan el equipo médico en particular, identificado por su ID único.

### Ejemplo de Uso

```http
GET https://domain/equipments/34/providers
```
```json
{
  "page":1,
  "limit":20,
  "total":152,
  "hasPrevPage":false,
  "hasNextPage":true,
  "data":[
    {
      {
        "providerID":1,
        "name":"Proveedor 1",
        "web":"www.proveedor1.com",
        "mail":"consultas@proveedor1.com",
        "phone":"2284555555",
        "address": "Street 555"
      },
      {
        "providerID":2,
        "name":"Proveedor 2",
        "web":"www.proveedor2.com",
        "mail":"consultas@proveedor2.com",
        "phone":"2284555555",
        "address": "Street 555"
    },
    ...
    }
  ]
}
```

### Respuesta

La respuesta incluirá una lista de proveedores (Limitada por los parametros), que nos brindara tanto el Nombre, como sus numeros y redes de Contacto.

<!-- 
██████╗░██████╗░░█████╗░██╗░░░██╗███████╗███████╗██████╗░░█████╗░██████╗░
██╔══██╗██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗
██████╔╝██████╔╝██║░░██║╚██╗░██╔╝█████╗░░█████╗░░██║░░██║██║░░██║██████╔╝
██╔═══╝░██╔══██╗██║░░██║░╚████╔╝░██╔══╝░░██╔══╝░░██║░░██║██║░░██║██╔══██╗
██║░░░░░██║░░██║╚█████╔╝░░╚██╔╝░░███████╗███████╗██████╔╝╚█████╔╝██║░░██║
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝╚═════╝░░╚════╝░╚═╝░░╚═╝
 -->

## **/equipments/:id/specifications**

- **Endpoint:** `/equipments/[id]/specifications`
- **Método:** GET
- **Parámetros:** 
  - `id` (number): Identificador del equipo 
- **Descripción:** Permite descargar los detalles específicos sobre un equipo médico en particular en un archivo no editable, identificado por su ID único. El archivo contendra su respectiva información como el nombre del equipo, su funcion, el manual de uso.


### Respuesta

Al realizar una consulta a este endpoint se generara una descarga en el navegador, en formato PDF u otro formato con las especificaciones del equipo seleccionado.