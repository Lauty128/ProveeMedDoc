---
sidebar_position: 3
description: 'Obtener los distintos tipos de categoria'
---

## **/categories**

- **Endpoint:** `/categories`
- **Método:** GET
- **Parámetros:** Sin parametros.
- **Descripción:** Obtiene el listado de todas las categorias.

### Ejemplo de Uso

```http
GET https://domain/categories
```
```json
[
    {
        "category_id":1,
        "name":"Categoria 1" 
    },
    {
        "category_id":2,
        "name":"Categoria 2"
    },
    
    {
        "category_id":3,
        "name":"Categoria 3"
    },
    ...
]
```


## **/categories/:provider_id**

- **Endpoint:** `/categories/[provider_id]/`
- **Método:** GET
- **Parámetros:**
  - `provider_id` (number): Identificador del proveedor 
- **Descripción:** Devuelve un listado de las categorias que el proveedor comercializa.

### Ejemplo de Uso

```http
GET https://domain/categories/34
```

```json
[
    {
        "categoryID":3,
        "name":"Categoria 3"
    },
    {
        "categoryID":5,
        "name":"Categoria 5"
    },
    {
        "categoryID":5,
        "name":"Categoria 5"
    },
]
```

### Respuesta

La devolucion de las categorias se basa en los equipos medicos que comercializa el proveedor. Con comercializar 1 producto de una categoria, la misma ya ingresa en el listado.