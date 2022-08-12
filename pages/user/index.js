import Link from "next/link";
import { useEffect,useState } from "react";
function User() {
    //client side props for
    const [users,setUsers] = useState()
     useEffect ((users) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
    })

    return (
        <div>
            <h2>this is user list page</h2>
            <hr/>
             {
                users?.map((user) => {
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
// ======= server side props ======= 
// export async function getServerSideProps(ctx){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     return {
//         props:{
//             users:data
//         }
//     }
// }

export default User;