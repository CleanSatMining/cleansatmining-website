import Link from "next/link";
import SocialLogin from "@/components/social-login";

export const metadata = {
  title: "Sign Up - Neon",
  description: "Page description",
};

export default function SignUp() {
  return (
    <>
      <div className="mb-8">
        <h1 className="h2 font-title">Sign Up</h1>
      </div>
      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm text-grey-400 font-medium mb-1"
              htmlFor="email"
            >
              Email <span className="text-pink-500">*</span>
            </label>
            <input
              id="email"
              className="form-input py-2 w-full"
              type="email"
              required
            />
          </div>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div className="sm:w-1/2">
              <label
                className="block text-sm text-grey-400 font-medium mb-1"
                htmlFor="name"
              >
                Name <span className="text-pink-500">*</span>
              </label>
              <input
                id="name"
                className="form-input py-2 w-full"
                type="text"
                required
              />
            </div>
            <div className="sm:w-1/2">
              <label
                className="block text-sm text-grey-400 font-medium mb-1"
                htmlFor="surname"
              >
                Surname <span className="text-pink-500">*</span>
              </label>
              <input
                id="surname"
                className="form-input py-2 w-full"
                type="text"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block text-sm text-grey-400 font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
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
            Sign Up{" "}
            <span className="tracking-normal text-brand-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </button>
        </div>
      </form>
      <SocialLogin />
      <div className="text-sm text-grey-500 italic mt-6 mb-4">
        By filling out this form, I consent to the collection and use of my
        personal data.
      </div>
      <div className="pt-4 border-t border-grey-800">
        <div className="text-sm text-grey-400">
          Already have an account?{" "}
          <Link
            className="font-medium text-brand-500 hover:text-brand-400"
            href="/signin"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
