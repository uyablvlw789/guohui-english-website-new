// @ts-nocheck
"use client";
import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn />
    </div>
  );
}
export default SignInPage;
