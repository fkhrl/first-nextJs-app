import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function UserDetail() {
    const [data,setUsers] = useState()
    const {id} = useRouter().query
    console.log("id==",id);
     useEffect ((users) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUsers(data))
    },[id])
    console.log("data==",data);
    return (
        <div>
            <p><b>User Name:</b> {data?.username}</p>
            <p><b>Name:</b> {data?.name}</p>
            <p><b>Email:</b> {data?.email}</p>
            <p><b>Phone:</b> {data?.phone}</p>
            <p><b>Company:</b> {data?.company.name}</p>
            <p><b>Website:</b> {data?.website}</p>
        </div>
    );
}
//getServerSideProps
// export async function getServerSideProps(ctx){
//     const {params} = ctx;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const data = await res.json()
//     return {
//         props:{
//             data:data
//         }
//     }
// }

export default UserDetail;