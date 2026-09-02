import { Link } from 'react-router-dom'

type AuthFormProps = {
  mode: 'sign-in' | 'sign-up'
}

/**
 * Presentational auth screens. There is no backend on GitHub Pages, so these
 * forms are inert until an identity provider is wired in.
 */
export default function AuthForm({ mode }: AuthFormProps) {
  const isSignUp = mode === 'sign-up'

  return (
    <section className="container-page py-16 lg:py-24">
      <div className="mx-auto max-w-md rounded-card border border-line p-8 sm:p-10">
        <h1 className="text-2xl font-bold sm:text-3xl">
          {isSignUp ? 'Create an account' : 'Welcome back'}
        </h1>
        <p className="mt-2 text-sm text-gray-body">
          {isSignUp
            ? 'Sign up to track orders and save your favourites.'
            : 'Sign in to pick up where you left off.'}
        </p>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {isSignUp && (
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className="mt-1.5 w-full rounded-card border border-line px-4 py-3 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="mt-1.5 w-full rounded-card border border-line px-4 py-3 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-navy"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              className="mt-1.5 w-full rounded-card border border-line px-4 py-3 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-navy"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-card bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            {isSignUp ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <div className="my-7 flex items-center gap-4">
          <span className="h-px flex-1 bg-line" />
          <span className="text-xs text-gray-body uppercase">or</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="space-y-3">
          {[
            { name: 'Google', icon: '/assets/img/ic-google-dark.svg' },
            { name: 'GitHub', icon: '/assets/img/ic-github-dark.svg' },
          ].map((provider) => (
            <button
              key={provider.name}
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-card border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-navy"
            >
              <img
                src={provider.icon}
                alt=""
                aria-hidden="true"
                className="h-4 w-4"
              />
              Continue with {provider.name}
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-body">
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <Link
            to={isSignUp ? '/sign-in' : '/sign-up'}
            className="font-semibold text-navy hover:underline"
          >
            {isSignUp ? 'Sign in' : 'Sign up'}
          </Link>
        </p>
      </div>
    </section>
  )
}
