import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

const posts = [ 
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/RagnerAlves.png',
      name: 'Ragner Alves',
      role: 'Dev .nET'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto pro meu portigolio'},
      { type: 'link', content:'jane.desaign/doctorcare'}
    ],
    publishedAt: new Date('2022-07-05 2:27:45'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Titio ',
      role: 'Educador'
  },
  content: [
    { type: 'paragraph', content: 'Fala Galera'},
    { type: 'paragraph', content:'Acabei de subir mais um projeto pro meu portigolio'},
    { type: 'link', content:'jane.desaign/doctorcare'}
  ],

  publishedAt: new Date('2022-07-04 2:27:45'),
},

]

export function App() {
  return (
  <div>

    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
          {posts.map(post => 
          {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
      </main>
    </div>
  </div>
  )
}