import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Menu = () => {
  //   const router = useRouter();
  const { asPath } = useRouter();
  const path = asPath.split("/")[1];
  return (
    <div>
      <Link href={`/${path}`}>123</Link>
    </div>
  );
};
