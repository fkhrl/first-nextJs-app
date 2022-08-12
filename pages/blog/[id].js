import Link from "next/link";
function Post({ data }) {
    console.log(data);
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
            <Link href="/blog/">
                <a>Blog</a>
            </Link>
            </li>
        </ul>
        <hr/>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    );
}

export async function getStaticProps(ctx) {
    const { params } = ctx;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()

    return {
        props: {
            data: data
        }
    }
}
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map((post) => {
        return {
            params: { id: `${post.id}` }
        }
    })
    return {
        //   paths: [
        //     { params: { id: '1' } },
        //   ],
        paths,
        fallback: false,
    }
}
export default Post;