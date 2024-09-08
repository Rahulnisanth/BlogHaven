import { signIn, signOut } from "../../../../auth.config";

export function SignIn({ provider }: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button
        className="font-bold text-white transition hover:text-gray-500/75"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <button
        type="submit"
        className="font-bold text-white transition hover:text-gray-500/75"
      >
        Sign Out
      </button>
    </form>
  );
}
