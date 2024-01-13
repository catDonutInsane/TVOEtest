
export const getStaticProps = async (context) =>{
    
    const {id} = context.params
    const res = await fetch (`${process.env.API_URL}/users/${id}`)
    const data = await res.json()

    return {
        props:{
            data
        }
    }
}
export const getStaticPaths = async ()=>{
    const res = await fetch(`${process.env.API_URL}/users`)
    const data = await res.json()
    return  {
        paths: data.map(item =>{
            return {
                params:{
                    id: item.id.toString()
                }
            }
        }),
        fallback : false
    }
}

const UserInfo = ({data}) =>{

    return (
        <>
        {data.name}
        </>
        )
}
export default UserInfo;