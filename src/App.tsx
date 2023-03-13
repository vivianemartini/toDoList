import { Header } from './components/Header';
import { NewTasks } from './components/NewTasks';

import styles from './App.module.css'
import { TaskBoard } from './components/TaskBoard';
import { TaskAdded } from './components/TaskAdded';

const tasks = [
  {
    id: 1,
    taskToDo: '',
  },

]

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTasks />
        <TaskBoard />
   {/*      <TaskAdded /> */}
      </main>

    </div>
  )
}