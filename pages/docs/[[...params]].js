import {useRouter} from 'next/router'
import Link from "next/link";
export default () => {
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
    const router = useRouter();
    const params = router.query.params || [];
    console.log(params);
    if(params.length === 2){
        return (
            <div><h1>this is a params page {params[0]} : {params[1]}</h1></div>
        )
    }
    else if(params.length === 3){
        return (
            <div><h1>this is a params page {params[1]} : {params[2]}</h1></div>
        )
    }
    return (
        <div>This is a test page</div>
    )
}