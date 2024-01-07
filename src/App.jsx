
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        name: 'Meani Freitas',
        avatarUrl: 'http://github.com/meanifreitas.png',
        role: 'Web Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' }
      ],
      publishedAt: new Date('2024-01-07 16:58:00')
    },
    {
      id: 2,
      author: {
        name: 'Diego Fernandes',
        avatarUrl: 'http://github.com/diego3g.png',
        role: 'CTO @ Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' }
      ],
      publishedAt: new Date('2024-01-07 15:53:00')
    },
    {
      id: 3,
      author: {
        name: 'Mayk Brito',
        avatarUrl: 'http://github.com/maykbrito.png',
        role: 'Educator @ Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' }
      ],
      publishedAt: new Date('2024-01-06 10:00:00')
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            })}
        </main>
      </div>
    </>
  );
}
