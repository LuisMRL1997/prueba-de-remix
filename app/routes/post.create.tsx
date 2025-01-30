// app/routes/create.tsx

import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node"; // Usa esto desde @remix-run/node.
import { db } from "./db.js";


export const action = async ({ request }: { request: Request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body")

  await new Promise (resolve => {
    setTimeout(resolve, 5000)
  })

  const post = await db.post.create({data: { body, title }});

  return redirect(`/post/${post.id}`); // Asegúrate de que haya una barra antes del ID
};

export function ErrorBoundary() {
  return (
    <div className="p-8">
      <strong>Algo salió mal</strong>
    </div>
  );
}

export default function CreatePost() {

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Crear un Post</h1>
      <form method='POST' >
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título
          </label><br />
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">
            Contenido
          </label><br />
          <textarea
            id="body"
            name="body"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}
