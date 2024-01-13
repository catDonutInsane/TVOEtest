import Link from "next/link"


export const  getStaticProps = async () =>{
    const res = await fetch(`${process.env.API_URL}/users`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}


const UserList = ({data}) =>{

    return(
        <>
        {data.map(i=><Link key={i.id} href={`/users/${i.id}`}><div>{i.id}</div></Link>)}
        </>
    )
}
export default UserList;