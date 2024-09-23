import React from "react";
import { login, signup } from "@/app/signin/actions";

export default function SigninPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />

      <button type={"submit"} formAction={login}>
        Log in
      </button>
      <button type={"submit"} formAction={signup}>
        Sign up
      </button>
    </form>
  );
}
