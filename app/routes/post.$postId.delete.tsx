import { ActionFunction, redirect } from "@remix-run/node";
import { db } from "./db.js";

export const action: ActionFunction = async ({ params }) => {
  const { postId } = params;
  if (!postId) return new Response("Post ID is required", { status: 400 });

  await db.post.delete({ where: { id: postId } });
  
  return redirect("/");
};
