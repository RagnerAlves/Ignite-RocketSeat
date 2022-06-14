import {Header} from './components/Header';
import {Post} from './Post'
import './style.css'

export function App() {
  return (
  <div>

    <Header />

    <Post 
      author="Ragner ALves"
      content="Dev"
    />
    <Post 
      author="Titio"
      content="Novo post muito legal"
    />
  </div>
  )
}