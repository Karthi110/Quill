import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icons } from "./Icons";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

interface UserAccountProps {
  email: string | undefined;
  name: string;
  imgUrl: string;
}

const UserAccountNav = ({ email, imgUrl, name }: UserAccountProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=" overflow-visible">
        <Button className=" rounded-full h-8 w-8 aspect-square bg-slate-400">
          <Avatar className=" relative w-8 h-8">
            {imgUrl ? (
              <div className=" relative aspect-square h-full w-full">
                <Image
                  fill
                  src={imgUrl}
                  alt="profile picture"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <AvatarFallback>
                <span className=" sr-only">{name}</span>
                <Icons.user className=" h-4 w-4 text-zinc-900" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-white" align="end">
        <div className=" flex items-center justify-start gap-2 p-2">
          <div className=" flex flex-col space-y-0.5 leading-none">
            {name && <p className=" font-medium text-sm text-black">{name}</p>}
            {email && (
              <p className=" w-[200px] truncate text-xs text-zinc-700">
                {email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className=" cursor-pointer font-semibold bg-slate-300">
          <LogoutLink>Logout</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
