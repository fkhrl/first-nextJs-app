import Link from "next/link";
function Blog({ blogId = 400 }) {
    return (
        <div>
            <h1>this is blog page</h1>
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
            <Link href="/blog/1">
                <a><h4>Blog title 1</h4></a>
            </Link>
            <Link href="/blog/2" replace>
                <a><h4>Blog title 2</h4></a>
            </Link>
            <Link href={`/blog/${blogId}`}>
                <a><h4>Blog title {blogId}</h4></a>
            </Link>
        </div>
    );
}

export default Blog
