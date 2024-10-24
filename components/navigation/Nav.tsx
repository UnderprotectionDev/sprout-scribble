import { auth } from "@/server/auth";
import UserButton from "./User-Button";

import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "./Logo";

const Nav = async () => {
  const session = await auth();
  return (
    <header className=" py-8">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <Logo />
            </Link>
          </li>
          {!session ? (
            <li>
              <Button asChild>
                <Link className="flex gap-2" href="auth/login">
                  <LogIn size={16} /> Login
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton expires={session?.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
