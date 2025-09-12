import React from "react";
import Header from "@/components/Header";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { MessageCircle, Shield, Users, Video, Zap } from "lucide-react";

const Page = () => {
  return (
    <div>
      <Header />

      <main className="flex-1 flex flex-col items-center px-4 py-16 sm:px-6 text-center gap-20">
        <div className="max-w-4xl space-y-8 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-300 via-indigo-50 to-purple-300 dark:from-blue-700 dark:via-indigo-500 dark:to-purple-700 rounded-3xl blur-3xl scale-150 opacity-60"></div>

          <div className="max-w-4xl space-y-8 relative">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-light bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
              Connect instantly.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                Chat smarter.
              </span>
            </h1>
            <p className="text-xl text-muted-background max-w-2xl mx-auto leading-relaxed">
              The modern messaging platform that combines lightning-fast chat
              and crystal-clear video calls in one seamless experience.
            </p>
          </div>

          <div className="flex flex-col sm:felx-row justify-center items-center gap-4 pt-6">
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" className="text-lg px-6 py-6 h-auto">
                  Start Chatting Free
                </Button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Enhanced Features */}
          <div className="w-full max-w-6xl">
            {/* Section divider */}
            <div className="w-full flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <div className="px-6">
                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Everything you need to stay connected
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed for seamless communication, whether
                you&apos;re chatting with friends or collaborating with teams.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <FeatureCard
                icon={MessageCircle}
                title="Instant Messaging"
                description="Lighting-fast messages with real-time delivery. Chat with friends and colleagues seamlessly."
              />
              <FeatureCard
                icon={Video}
                title="HD Video Calls"
                description="Crystal-clear video calls with one click. Perfect quality for personal chats and team meetings."
              />
              <FeatureCard
                icon={Shield}
                title="Privacy First"
                description="End-to-end encryption keeps your conversations private. Your data belongs to you, always."
              />
              <FeatureCard
                icon={Users}
                title="Group Chats"
                description="Create groups with friends, family or colleagues. Manage conversations with advanced controls."
              />
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Optimized for speed and performance. Works seamlessy across all your devices with instant sync."
              />
            </div>
          </div>

          {/*  CTA Section */}
          <div className="w-full max-w-4xl">
            <div className="rounded-3xl border bg-gradient-to-br from-primary/5 to-primary/10 p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to transform your conversations?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of users who&apos;ve already discovered a better
                way to communicate. Start your journey with Beam today -
                ts&apos;s completely free.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <Button size="lg" className="text-lg px-8 py-6 h-auto">
                      Get Started Free
                    </Button>
                  </SignUpButton>
                </SignedOut>
              </div>

              <div className="flex justify-center flex-col sm:flex-row items-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Free forever plan
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Setup in 30 seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xl font-bold tracking-light">Beam</span>
              <p className="text-sm text-muted-foreground mt-1">
                The future of communication
              </p>
            </div>

            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Support
              </a>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; Beam. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Page;
