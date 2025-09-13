"use client";

import { Chat } from "stream-chat-react";
import { ModeToggle } from "@/components/mode-toggle";
import UserSyncWrapper from "@/components/UserSyncWrapper";
import streamClient from "@/lib/stream";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserSyncWrapper>
      <Chat client={streamClient}>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "19rem",
            } as React.CSSProperties
          }
        >
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Link href="/dashboard">
                <h1 className="text-lg font-bold tracking-wider uppercase">
                  Beam
                </h1>
              </Link>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </Chat>
    </UserSyncWrapper>
  );
};
export default Layout;
