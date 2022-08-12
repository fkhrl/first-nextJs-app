import Link from "next/link";
import { useEffect,useState } from "react";
function User() {
    //client side props for
    const [users,setUsers] = useState([])
    const [user,setUser] = useState("")
    //  useEffect ((users) => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res) => res.json())
    //     .then((data) => setUsers(data))
    // })
    const onLoadUserList = () => {
        fetch("/api/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    }
    const handelAddUser = () => {
        if(user){
            fetch("/api/users",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });
            onLoadUserList()
        } else{
            alert("Please enter your name!");
        }
        
    }
    return (
        <div>
            <h2>this is user list page</h2>
            <input onChange= {(e) => setUser(e.target.value)} type="text"/>
            <button onClick={handelAddUser}> Add user</button><br/>
            <button onClick={onLoadUserList}> Load users data</button>
            <hr/>
             {
                users?.map((user) => {
                    return (
                        <div key={user.id}>
                            <Link href={`user/${user.id}`} passHref>
                                <h5>{user.name}</h5>
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