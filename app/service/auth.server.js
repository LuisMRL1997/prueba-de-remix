// auth.server.js

import { Authenticator } from "remix-auth";
import { GitHubStrategy } from "remix-auth-github";
import { sessionStorage } from "./session.server"; // Asegúrate de que este archivo esté configurado

let authenticator = new Authenticator(sessionStorage);

console.log("clientID:", "Ov23liqlR8CoW2ou8BjZ");
console.log("clientSecret:", "c4efefe175c7afac181e3e0de3cb879a82e87c5a");
console.log("callbackURL:", "http://localhost:5173/auth/github/callback");

authenticator.use(
    new GitHubStrategy(
      {
        clientID: "Ov23liqlR8CoW2ou8BjZ",
        clientSecret: "c4efefe175c7afac181e3e0de3cb879a82e87c5a",
        redirectURI: "http://localhost:5173/auth/github/callback", // Cambiar aquí
      },
      async ({ accessToken, extraParams, profile }) => {
        return profile;
      }
    )
  );
  

export { authenticator };
