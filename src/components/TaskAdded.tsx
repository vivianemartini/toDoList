import styles from './TaskAdded.module.css'
import { Trash } from '@phosphor-icons/react'

const task = [{
    title: 'terminar desafio 01 do ignite',
    isComplete: true,
}]

export function TaskAdded(){
    return (
        <div className={styles.wrapper}>

            <div className={styles.round}>
                <div className={styles.taskCheckbox}>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox"></label>
                
                    <div className={styles.taskText}>
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. 
                        Duis vel sed fames integer.</p>
                    </div>
                </div>
            </div>

            <button className={styles.trash}>
                <Trash size={20} />
            </button>
        </div>
    )
}