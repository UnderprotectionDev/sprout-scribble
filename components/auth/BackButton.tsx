"use client";

import Link from "next/link";
import { Button } from "../ui/button";

type BackButtonType = {
  href: string;
  label: string;
};
const BackButton = ({ href, label }: BackButtonType) => {
  return (
    <div>
      <Button className="font-medium w-full">
        <Link aria-label={label} href={href}>
          {label}
        </Link>
      </Button>
    </div>
  );
};

export default BackButton;
