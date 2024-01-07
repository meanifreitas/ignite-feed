import React from 'react';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState('');

  const formattedPublishedDate = format(publishedAt, "LLLL do y 'at' hh'h'mm");
  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true
  });

  function handleNewComment(event) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentChange(event) {
    setNewComment(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
      
        <time title={formattedPublishedDate} dateTime={publishedAt.toISOString()}>{publishedDateRelative}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          name='comment'
          placeholder='Leave a comment'
          onChange={handleNewCommentChange}
          value={newComment}
        />
        <footer>
          <button type='submit'>Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} />
        })}
      </div>
    </article>
  );
}