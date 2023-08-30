export default function NewTask({ estado, actualizar }) {
  let id = estado[estado.length - 1].id;
  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: id + 1,
      task: e.target[0].value,
      done: false,
    };
    actualizar([...estado, task]);
    e.target.reset();
  }

  function handleChange(e) {
    if (e.target.value.length > 100) {
      e.target.value = e.target.value.slice(0, 100);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Añadir</button>
    </form>
  );
}
