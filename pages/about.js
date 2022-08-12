import Link from "next/link";
export default () =>{
    return ( 
        <div>
            <h1>this is about  page</h1>
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
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
        </div>
    )
}