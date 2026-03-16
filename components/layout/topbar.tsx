"use client";
import { Bell, Plus, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-responsive flex h-14 items-center justify-between gap-3">
        <div className="relative hidden min-w-0 flex-1 items-center md:flex">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search reports, users, revenue…" aria-label="Search" />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
          <Button size="sm" className="hidden sm:inline-flex">
            <Plus className="mr-2 h-4 w-4" /> New
          </Button>
          <div className="ml-1 h-8 w-8 overflow-hidden rounded-full border">
            {/* Placeholder avatar */}
            <Image
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              alt="User Avatar"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
