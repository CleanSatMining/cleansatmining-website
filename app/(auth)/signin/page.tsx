import SocialLogin from "@/components/social-login";

export const metadata = {
  title: "Sign In - Neon",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <div className="mb-8">
        <h1 className="h2 font-title">Welcome Back!</h1>
      </div>
      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm text-grey-400 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="form-input py-2 w-full"
              type="email"
              required
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label
                className="block text-sm text-grey-400 font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                className="text-sm font-medium text-brand-500 hover:text-brand-400 ml-2"
                href="/reset-password"
              >
                Troubles?
              </Link>
            </div>
            <input
              id="password"
              className="form-input py-2 w-full"
              type="password"
              autoComplete="on"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn-sm text-white bg-gradient-to-t from-brand-600 to-brand-400 hover:to-brand-500 w-full shadow-lg group">
            Sign In{" "}
            <span className="tracking-normal text-brand-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </button>
        </div>
      </form>
      <SocialLogin />
      <div className="mt-6">
        <div className="text-sm text-grey-400">
          Don't you have an account?{" "}
          <Link
            className="font-medium text-brand-500 hover:text-brand-400"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}
