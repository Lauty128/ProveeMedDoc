---
sidebar_position: 1
description: 'Obtener datos sobre los equipos'
---

## /equipments

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

La respuesta de este endpoint contendrá una lista de todos los equipos médicos disponibles, ordenados en base a la categoría correspondiente. Cada entrada en la lista proporcionará detalles sobre un equipo en particular, incluyendo su nombre, ID único, la categoría a la que pertenece y el ID de esa categoría.

### Notas

- Los equipos se presentan en orden ascendente según la categoría a la que pertenecen.
- La respuesta incluye información sobre el nombre y el ID del equipo, así como la categoría a la que pertenece y el ID de esa categoría.

## ## /equipments/[id]

### Detalles de la Consulta

- **Endpoint:** `/equipments/[id]`
- **Método:** GET
- **Parámetros:** No recibe parametros
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

> Suponiendo que el equipo con id 5 es un **Analizador de Catecolaminas**

### Respuesta

La respuesta de este endpoint contendrá detalles específicos sobre el equipo médico identificado por el `id`. Estos detalles incluirán el nombre del equipo, su ID, la categoría a la que pertenece y el ID de la categoría correspondiente.

### Notas
- Asegúrate de proporcionar el ID único del equipo en la URL para obtener detalles específicos sobre ese equipo.
- Esta consulta proporciona información detallada sobre un equipo médico en particular.
