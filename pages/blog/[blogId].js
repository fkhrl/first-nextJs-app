import { useRouter } from "next/router"
import Link from "next/link";
export default () => {
    const router = useRouter()
    const blogId = router.query.blogId
    console.log(blogId);
    return (
        <div> 
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
            <h1>this is blog details page for blog ID: { blogId }</h1></div>
    )
}