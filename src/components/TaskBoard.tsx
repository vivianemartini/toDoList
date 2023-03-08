import styles from './TaskBoard.module.css'
import clipboard from '../assets/clipboard.svg'

export function TaskBoard(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.titles}>
                <div className={styles.titlesBox}>
                    <p className={styles.made}>Tarefas criadas </p>
                    <span>0</span>
                </div>

                <div className={styles.titlesBox}>
                    <p className={styles.done}>Concluidas</p>
                    <span>0</span>
                </div>
            </div>

            <div className={styles.clipboard}>
                <img src={clipboard} />
               <div className={styles.text}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
               </div>
            </div>
        </div>
    )
}