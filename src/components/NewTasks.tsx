import styles from './NewTasks.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function NewTasks(){
    return (
        <div className={styles.box}>
            <div >
                <input className={styles.input} type="text" placeholder='Adicione uma nova tarefa'/>
            </div>
            <button className={styles.button}>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    )
}