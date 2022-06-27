import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
  <div>

    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
          <Post 
          author="Ragner ALves"
          content="Dev"
        />
        <Post 
          author="Titio"
          content="Novo post muito legal"
        />
      </main>
    </div>
  </div>
  )
}