import React from 'react';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = React.useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/meanifreitas.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Meani Freitas</strong>
              <time title="January 4th at 21h37" dateTime="2024-01-04 21:37:00">About 1h ago</time>
            </div>

            <button onClick={handleDeleteComment} title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment} title='Applause'>
            <ThumbsUp /> Applause
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}