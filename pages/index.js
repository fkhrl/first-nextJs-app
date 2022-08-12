
import Link from 'next/link'
import { useRouter} from "next/router"

export default function Home() {
  const router = useRouter()
  const handelClick = () => {
    router.push('/about')
  }
  return (
    <div>
      <h1>this is a Home page</h1>
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
