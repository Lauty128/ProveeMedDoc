---
sidebar_position: 2
title: 'Estructura de los datos'
---

Esta es la estructura de los datos que utiliza este proyecto. La base de datos utilizada es MYSQL, pero puede adaptarse a otro tipo de motor de base de datos como POSTGRESQL

**Tabla Providers:**

- **providerID (PrimaryKey - INT):** Identificador único del proveedor.
- **name (VarChar):** Nombre del proveedor.
- **address (VarChar):** Dirección del proveedor.
- **e-mail (VarChar):** Correo electrónico del proveedor.
- **phone (VarChar):** Número de teléfono del proveedor.
- **web (VarChar):** Sitio web del proveedor.

**Tabla Category:**
- **categoryID (PrimaryKey - INT):** Identificador único de la categoría.
- **name (VarChar):** Nombre de la categoría.

**Tabla Provider_Equipment:**
- **ProviderID (PrimaryKey - INT):** Identificador del proveedor. Esta clave se relaciona con la columna providerID en la tabla Providers. Establece una relación entre un proveedor y un equipo.
- **EquipmentID (PrimaryKey - INT):** Identificador del equipo. Esta clave se relaciona con la columna EquipmentID en la tabla Equipment. Establece una relación entre un proveedor y un equipo.

**Tabla Equipment:**
- **EquipmentID (PrimaryKey - INT):** Identificador único del equipo.
- **Name (VarChar):** Nombre del equipo.
- **CategoryID (INT):** Identificador de la categoría a la que pertenece el equipo. Esta clave se relaciona con la columna categoryID en la tabla Category. Establece una relación entre un equipo y una categoría.
- **umdns (VarChar):** Código UMdns del equipo.
- **description (VarChar):** Descripción del equipo.
- **price (INT):** Precio del equipo.
- **specifications (VarChar):** Este texto es una url que hace referencia a un archivo del servidor donde se ecuentra un archivo, independientemente del formato, donde se encuentran las especificaciones del equipo.

!['estructura de base de datos'](/img/database.png)