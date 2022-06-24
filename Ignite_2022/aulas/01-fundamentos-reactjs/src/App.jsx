import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
  <div>

    <Header />

    <div className={styles.wrapper}>
      <aside>
        SideBar
      </aside>
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