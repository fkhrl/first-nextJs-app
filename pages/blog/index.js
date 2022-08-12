import Link from "next/link";
function Blog({ data }) {
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
                <Link href="/blog/">
                    <a>Blog</a>
                </Link>
                </li>
            </ul>
            <hr/>
            <div className="contriner">
                {
                    data.map((post) => {
                        return (
                            <div key={post.id}>
                                <Link href={`blog/${post.id}`} passHref>
                                <h3>{post.title}</h3>
                                </Link>
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export async function getStaticProps(ctx) {
    const { params } = ctx;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = await res.json()

    return {
        props: {
            data: data
        }
    }
}
export default Blog
