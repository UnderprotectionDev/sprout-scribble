import { auth } from "@/server/auth";
import UserButton from "./User-Button";

import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "../ui/button";

const Nav = async () => {
  const session = await auth();
  return (
    <header className="bg-slate-500 py-4">
      <nav>
        <ul className="flex justify-between">
          <li>Logo</li>
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
