import { useState } from 'react';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import { useEffect } from 'react';

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      task: 'Ir a la compra',
      done: false,
    },
    {
      id: 2,
      task: 'Hacer ejercicios de react',
      done: true,
    },
  ]);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <h1>Lista de tareas con React</h1>
      <NewTask estado={state} actualizar={setState} />
      <TaskList tasks={state} actualizar={setState} />
    </>
  );
}

export default App;
