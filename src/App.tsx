import { Header } from './components/Header';
import { NewTasks } from './components/NewTasks';

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <NewTasks />
      </main>

    </div>
  )
}