import Link from "next/link";
function User({data}) {
    return (
        <div>
            <h2>this is user list page</h2>
            <hr/>
            {
                data.map((user) => {
                    return (
                        <div key={user.id}>
                            <Link href={`user/${user.id}`} passHref>
                                <h3>{user.name}</h3>
                            </Link>
                                <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export async function getServerSideProps(ctx){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props:{
            data:data
        }
    }
}

export default User;