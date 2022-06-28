import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
             <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/RagnerAlves.png" />
                <div className={styles.authorInfo}>
                    <strong>Ragner Alves</strong>
                    <span>.NET Developer</span>
                </div>
             </div>
            
             <time title="27 de Junho as 08hrs13h" dateTime="27-06-2022 11:01:30">Publicado a 1hrs</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>Acabei de subri mais um projeto pro meu portigolio</p>
                <p> {' '} <a href="">jane.desaign/doctorcare</a></p>
                <p> 
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#projeto </a>{' '}
                    <a href="">#novo</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea
                    placeholder="Deixe seu comentario"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
