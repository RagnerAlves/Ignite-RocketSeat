import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
             <div className={styles.author}>
                <img classname={styles.avatar} src="https://github.com/RagnerAlves.png" />
                <div className={styles.authorInfo}>
                    <strong>Ragner Alves</strong>
                    <span>.NET Developer</span>
                </div>
             </div>
            
             <time title="27 de Junho as 08hrs13h" dateTime="27-06-2022 11:01:30">Publicado a 1hrs</time>
            </header>

            <div classname={styles.content}>
                <p>Fala Galera</p>
                <p>Acabei de subri mais um projeto pro meu portigolio</p>
                <p> <a href="">jane.desgin/doctorcare</a></p>
                <p> <a href=""></a>#novoprojeto #projeto #novo</p>
            </div>
        </article>
    )
}
