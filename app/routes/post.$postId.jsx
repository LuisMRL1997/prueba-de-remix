// app/routes/$postId.jsx

import { useLoaderData } from "@remix-run/react";
import { db } from "./db"; // Asegúrate de que este sea el path correcto hacia tu archivo `db.js`

export const loader = async ({ params }) => {
  console.log("Params recibidos:", params); // Log para confirmar el parámetro
  const { postId } = params;

  if (!postId) {
    throw new Response("Post ID is missing", { status: 400 });
  }

  const post = await db.post.findUnique({
    where: { id: postId }, // No necesitas convertir a número
  });  

  if (!post) {
    throw new Response("Post not found", { status: 404 });
  }

  return { post };
};

export default function SinglePost() {
  const { post } = useLoaderData();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
}