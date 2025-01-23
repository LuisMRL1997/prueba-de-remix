// session.server.js

import { createCookieSessionStorage } from "@remix-run/node";

const isProduction = typeof process !== "undefined" && process.env.NODE_ENV === "production";

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session", // usa cualquier nombre que desees aquí
    sameSite: "lax", // esto ayuda con CSRF
    path: "/", // recuerda agregar esto para que la cookie funcione en todas las rutas
    httpOnly: true, // por razones de seguridad, haz esta cookie solo http
    secrets: ["s3cr3t"], // reemplaza esto con un secreto real
    secure: isProduction, // habilítalo solo en producción
  },
});
