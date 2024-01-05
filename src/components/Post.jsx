import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/meanifreitas.png" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Meani Freitas</strong>
            <span>Web developer</span>
          </div>
        </div>
      
        <time title="January 4th at 21h37" dateTime="2024-01-04 21:37:00">Published 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 jane.design/doctorcare</p>
        <p><a href="#">#novoprojeto</a>{' '}
        <a href="#">#nlw</a>{' '}
        <a href="#">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          placeholder='Leave a comment'
        />
        <footer>
          <button type='submit'>Publish</button>
        </footer>
      </form>
    </article>
  );
}