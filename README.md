# 🛠️ Taller de MongoDB: Arrays y Expresiones Regulares

## 📌 Descripción

Este taller tiene como objetivo practicar consultas en MongoDB sobre colecciones que contienen **arrays**, haciendo uso de **expresiones regulares (regex)** y **operadores de arrays** para realizar búsquedas específicas dentro de documentos.

Se trabaja sobre una colección de productos almacenados en MongoDB a partir de un archivo CSV.

---

## 📂 Archivos Entregables

* `Productos_MongoDB.csv` → Archivo con los datos de productos.
* `TallerMongoDB-ArreglosRegex.md` → Documento con el enunciado y consultas.

---

## 📖 Contenido

### 🔹 Nivel 1: Básico – Consultas directas con arrays

Consultas simples sobre arrays:

* Buscar productos que tengan una categoría específica.
* Buscar coincidencias exactas en arrays.
* Contar elementos en un array.
* Buscar valores según posición en el array.
* Uso de `$regex` para búsquedas en campos string.

---

### 🔸 Nivel 2: Intermedio – Operadores de arrays y búsquedas combinadas

Consultas combinadas:

* Búsquedas con múltiples condiciones en arrays.
* Comparación de valores dentro de arrays numéricos.
* Verificar posiciones específicas dentro de un array.
* Consultas con `$size`, `$all`, `$elemMatch` y operadores combinados.

---

### 🔺 Nivel 3: Avanzado – Regex en arrays

Consultas usando expresiones regulares:

* Buscar palabras que empiecen, contengan o terminen con ciertos patrones.
* Detectar palabras con doble vocal.
* Buscar palabras de longitud específica.
* Identificar palabras compuestas.
* Detectar signos de puntuación dentro de los comentarios.

---

### 🧠 Nivel 4: Desafíos Combinados (Difíciles)

Consultas de mayor complejidad combinando:

* Condiciones numéricas y de arrays.
* Búsquedas condicionales en múltiples campos.
* Expresiones regulares avanzadas.
* Operadores de exclusión y validación de múltiples condiciones dentro de un array.

---

## 📝 Notas

* Todas las consultas se ejecutan sobre una colección de productos importada desde `Productos_MongoDB.csv`.
* Se hace uso intensivo de los operadores `$regex`, `$all`, `$size`, `$elemMatch`, `$and`, `$or`, y comparativos como `$gte`, `$lte`, `$gt`, `$lt`.
* Las expresiones regulares permiten búsquedas flexibles y potentes dentro de arrays y strings.

---

## 📚 Requisitos

* Tener instalado **MongoDB**.
* MongoDB Compass o la CLI para ejecutar las consultas.
* Base de datos creada y colección de productos cargada.

---

## 📌 Ejecución

1. Importar el archivo `Productos_MongoDB.csv` a MongoDB.
2. Abrir MongoDB Compass o terminal.
3. Seleccionar la base de datos y colección.
4. Ejecutar las consultas descritas en `TallerMongoDB-ArreglosRegex.md`.

---
