import { useLoaderData, useParams } from "@remix-run/react"
import { db } from "./db";

export const loader = async ({ params }) => {
    const posts = await db.post.findMany({ where: {
         id: Number(params.postId) } });

    return { posts }; // Envuelve los posts en un objeto
  };


export default function SinglePost () {
    const params = useParams()
    
    return (
        
            <h1>Título de {params.postId}</h1>
        
    )
}