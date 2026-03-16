"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  Users,
  CreditCard,
  Settings,
  Menu,
  X,
} from "lucide-react";

const nav = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open menu"
        className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-4 w-4" /> Menu
      </button>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 -translate-x-full border-r bg-background p-4 transition-transform lg:static lg:z-0 lg:translate-x-0 lg:w-64",
          open && "translate-x-0"
        )}
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-between px-2 py-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-foreground" />
            <span className="text-base font-semibold">Acme Analytics</span>
          </Link>
          <button
            aria-label="Close menu"
            className="rounded-md p-2 hover:bg-muted lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-6 space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                  item.href === "/" && "bg-muted text-foreground"
                )}
                onClick={() => setOpen(false)}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto" />
      </aside>
    </>
  );
}
