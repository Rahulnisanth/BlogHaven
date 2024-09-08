import Image from "next/image";
import default_image from "../../assets/default-profile.jpg";
import { auth } from "../../../../auth.config";
import { SignIn, SignOut } from "./auth-components";

export default async function UserButton() {
  const session = await auth();
  if (!session?.user) {
    return <SignIn />;
  } else {
    return (
      <div className="flex items-center justify-center gap-4">
        <SignOut />
        <Image
          src={session.user.image ?? default_image}
          className="hidden md:inline-block h-7 w-7 rounded-full ring-2 ring-teal-500"
          width={50}
          height={50}
          alt="avatar"
        />
      </div>
    );
  }
}
