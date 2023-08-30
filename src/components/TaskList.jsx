export default function TaskList({ tasks, actualizar }) {
  function handleChange(e) {
    const isChecked = e.target.checked;
    const id = tasks.find(
      (task) => task.task === e.target.parentElement.textContent
    ).id;
    tasks.map((task) => {
      if (task.id === id) {
        task.done = isChecked;
      }
    });
    actualizar([...tasks]);
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.done ? 'line-through' : 'none' }}
        >
          {task.task}
          <input
            type="checkbox"
            onChange={handleChange}
            defaultChecked={task.done}
          />
        </li>
      ))}
    </ul>
  );
}

// [] Añade a cada uno de los `<li>` del componente `TaskList` que hiciste en el ejercicio anterior un checkbox (`<input type="checkbox" />`) que al hacer click modifique la propiedad done del elemento correspondiente de la lista de tareas que está en el estado del componente principal `App`.
