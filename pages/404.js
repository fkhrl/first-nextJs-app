import Link from "next/link";
function Error() {
    return (
        <div>
            this is an error page go to home page 
            <Link href="/"><a><h1>Home</h1></a></Link>
        </div>
    );
}

export default Error;