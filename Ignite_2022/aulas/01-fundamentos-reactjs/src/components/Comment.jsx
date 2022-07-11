import styles from './Comment.module.css';
import {Trash, ThumbsUp} from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content }) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/RagnerAlves.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ragner Alves</strong>
                            <time title="27 de Junho as 08hrs13h" dateTime="27-06-2022 11:01:30">Cerca de 1hrs atras</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}