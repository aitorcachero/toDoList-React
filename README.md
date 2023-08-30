[x] En el componente principal de la aplicación (App) crea una variable de estado usando el hook useState que contenga este valor inicial:

```
[{
  id: 1
  task: 'Ir a la compra',
  done: false
},
{
  id: 2,
  task: 'Hacer ejercicios de react',
  done: true
}]
```

[x] Crea y añade a `App.js` un componente llamado `TaskList` y pásale el estado anterior como `prop`.

[x] El componente `TaskList` debe renderizar un `<ul>` y debe mostrar cada uno de los elementos del array del estado de App como un `<li>`. Los elementos que tengan la propiedad done con valor true deben mostrar el texto tachado.

## Modificación del estado

[x] Primero añade al componente `App` un nuevo componente llamado `NewTask` que muestre un formulario con un `<input type="text">` y un `<button>` que al hacer click añada una nueva tarea al estado del componente principal de `App.js` con el texto del `input`.

[x] El `input` tiene que permitir un máximo de 100 caracteres.

A Continuación:

[] Añade a cada uno de los `<li>` del componente `TaskList` que hiciste en el ejercicio anterior un checkbox (`<input type="checkbox" />`) que al hacer click modifique la propiedad done del elemento correspondiente de la lista de tareas que está en el estado del componente principal `App`.
