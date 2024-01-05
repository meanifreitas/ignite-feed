import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/meanifreitas.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Meani Freitas</strong>
              <time title="January 4th at 21h37" dateTime="2024-01-04 21:37:00">About 1h ago</time>
            </div>

            <button title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns</p>
        </div>
        <footer>
          <button title='Applause'>
            <ThumbsUp /> Applause
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}