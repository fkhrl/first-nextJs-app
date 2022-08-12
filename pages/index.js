
import Link from 'next/link'
import { useRouter} from "next/router"
import  styles  from '../styles/Home.module.css'


export default function Home() {
  const router = useRouter()
  const handelClick = () => {
    router.push('/about')
  }
  return (
    <div className={styles.container}>
      <h1 style={{ color:'red' }}>this is a Home page</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <button onClick={handelClick}> About Page</button>
        </li>
      </ul>
    </div>
  )
}
