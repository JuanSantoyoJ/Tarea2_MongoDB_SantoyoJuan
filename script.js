
# 🛠️ Taller de MongoDB: Arrays y Operadores

## 🔹 Nivel 1: Básico – Consultas directas con arrays

1. Buscar productos que tengan la categoría "gaming"

```js
db.data.find({ categorias: /gaming/ })
```

2. Buscar productos que contengan "ssd" en sus etiquetas

```js
db.data.find({ etiquetas: /ssd/ })
```

3. Buscar productos que tengan el array exacto ["rgb", "ssd", "16gb"]

```js
db.data.find({ etiquetas: /^\['rgb', 'ssd', '16gb'\]$/ })
```

4. Buscar productos que tengan exactamente 3 etiquetas

```js
db.data.find({ etiquetas: /^\[.*?,.*?,.*?\]$/ })
```

5. Buscar productos que tengan el segundo precio mayor a 2'000.000

```js
db.data.find({ "precios.1": { $gt: 2000000 } })
```

6. Buscar productos donde "facil uso" esté presente en etiquetas

```js
db.data.find({ etiquetas: /'facil uso'/ })
```

7. Buscar productos que tengan "streaming" en categorías

```js
db.data.find({ categorias: /'streaming'/ })
```

8. Buscar productos con el nombre que contenga "Pro"

```js
db.data.find({ nombre: /Pro/ })
```

## 🔸 Nivel 2: Intermedio – Operadores de arrays y búsquedas combinadas

1. Buscar productos que contengan "ssd" y "16gb" en sus etiquetas

```js
db.data.find({ etiquetas: /'ssd'.*'16gb'| '16gb'.*'ssd'/ })
```

2. Buscar productos que tengan al menos un precio mayor a 3'000.000

```js
db.data.find({ precios: { $elemMatch: { $gt: 3000000 } } })
```

3. Buscar productos con un precio entre 2'000.000 y 3'000.000

```js
db.data.find({ precios: { $elemMatch: { $gte: 2000000, $lte: 3000000 } } })
```

4. Buscar productos donde la primera categoría sea "tecnologia"

```js
db.data.find({ categorias: { $regex: "\\['tecnologia'" } })
```

5. Buscar productos con precios que tengan exactamente 4 valores

```js
db.data.find({ precios: { $size: 4 } })
```

6. Buscar productos donde una de las etiquetas sea "gamer"

```js
db.data.find({ etiquetas: /'gamer'/ })
```

7. Buscar productos con el nombre que termine en "Max"

```js
db.data.find({ nombre: /Max$/ })
```

8. Buscar productos con la etiqueta "bluetooth" y categoría "audio"

```js
db.data.find({ etiquetas: /'bluetooth'/, categorias: /'audio'/ })
```

9. Buscar productos con "android" tanto en categorías como etiquetas

```js
db.data.find({ categorias: /'android'/, etiquetas: /'android'/ })
```

10. Buscar productos donde uno de los comentarios sea exactamente "Recomendado 100%"

```js
db.data.find({ comentarios: /Recomendado 100%/ })
```

11. Buscar productos con más de un precio menor a 1'000.000

```js
db.data.find({
  $and: [
    { precios: { $elemMatch: { $lt: 1000000 } } },
    { "precios.1": { $exists: true } }
  ]
})
```

12. Buscar productos donde "streamer" esté en etiquetas

```js
db.data.find({ etiquetas: /'streamer'/ })
```

## 🔺 Nivel 3: Avanzado – Regex en arrays

1. Buscar productos con comentarios que empiecen con "Excelente"

```js
db.data.find({
  comentarios: /^\['Excelente/
})
```

2. Buscar productos con etiquetas que contengan palabras que terminan en "ico"

```js
db.data.find({ etiquetas: /ico'/ })
```

3. Buscar productos con comentarios que contengan la palabra "fácil" (insensible a mayúsculas)

```js
db.data.find({ comentarios: /[fF][aáA]cil/ })
```

4. Buscar productos con etiquetas que empiecen por "c"

```js
db.data.find({ etiquetas: /'c/i })
```

5. Buscar productos con comentarios que contengan la palabra "hogar"

```js
db.data.find({ comentarios: /hogar/i })
```

6. Buscar productos con alguna etiqueta que tenga doble vocal

```js
db.data.find({ etiquetas: /([aeiou])\1/i })
```

7. Buscar productos con comentarios que tengan una palabra de 10 letras

```js
db.data.find({ comentarios: /\b\w{10}\b/ })
```

8. Buscar productos con etiquetas que empiecen con "s" y tengan al menos 5 caracteres

```js
db.data.find({ etiquetas: /'s\w{4,}'/i })
```

9. Buscar productos con comentarios que contengan signos de puntuación

```js
db.data.find({ comentarios: /[.,:;!¿?]/ })
```

10. Buscar productos con etiquetas donde haya palabras compuestas

```js
db.data.find({ etiquetas: /\b\w+-\w+\b/ })
```

## 🧠 Nivel 4: Desafíos Combinados (Difíciles)

1. Buscar productos con precios entre 1'500.000 y 3'000.000, y que tengan "ssd" como etiqueta

```js
db.data.find({ precios: { $elemMatch: { $gte: 1500000, $lte: 3000000 } }, etiquetas: /'ssd'/ })
```

2. Buscar productos con "wifi" en etiquetas y al menos un comentario que contenga "rápida"

```js
db.data.find({ etiquetas: /'wifi'/, comentarios: /rápida/i })
```

3. Buscar productos con más de 3 precios y la palabra "moderno" en los comentarios

```js
db.data.find({
  $and: [
    { precios: { $size: { $gt: 3 } } },
    { comentarios: /moderno/i }
  ]
})
```

4. Buscar productos con el nombre que tenga exactamente 3 palabras

```js
db.data.find({ nombre: /^\w+\s\w+\s\w+$/ })
```

5. Buscar productos con categorías "audio" o "almacenamiento"

```js
db.data.find({ categorias: /'audio'|'almacenamiento'/ })
```

6. Buscar productos donde el primer comentario empiece con "Ideal"

```js
db.data.find({ comentarios: /^\['Ideal/ })
```

7. Buscar productos donde haya una etiqueta que incluya "ruido"

```js
db.data.find({ etiquetas: /ruido/ })
```

8. Buscar productos que tengan "economica" como etiqueta pero no "ssd"

```js
db.data.find({
  etiquetas: /'economica'/,
  etiquetas: { $not: /'ssd'/ }
})
```

9. Buscar productos con al menos dos etiquetas que empiecen con vocal

```js
db.data.find({
  etiquetas: {
    $regex: /'([aeiouAEIOU]\w*)'.*'([aeiouAEIOU]\w*)'/
  }
})
```

10. Buscar productos donde todas las etiquetas contengan solo letras minúsculas

```js
db.data.find({
  etiquetas: { $not: /[A-ZÁÉÍÓÚÑ]/ }
})
```
