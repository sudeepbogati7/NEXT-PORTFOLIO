"use client";

import { useAuth } from "@/contexts/AuthContext";
import { signInWithGoogle, signInWithGithub, logout } from "@/firebase/auth";
import { useToast } from "@/components/ui/use-toast"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function LoginPopup() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);
    const auth: any = useAuth();
    const user: any = auth ? auth?.user : null;
    const { toast } = useToast()

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            setIsOpen(false);
            toast({
                title: "Login Successful!",
                description: "Successfully logged in with Google.",
                variant: "default",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
                variant: "destructive",
            })
            console.error("Google login error:", error);
        }
    };

    const handleGithubLogin = async () => {
        try {
            await signInWithGithub();
            setIsOpen(false);
            toast({
                title: "Login Successful!",
                description: "Successfully logged in with GitHub.",
                variant: "default",
            });
        } catch (error) {
            console.error("GitHub login error:", error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
                variant: "destructive",
            });
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            toast({
                title: "Logout Successful!",
                description: "You have been logged out successfully.",
                variant: "default",
            });
            setShowLogoutConfirm(false);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <>
            {!user ? (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button variant="link">Login</Button>
                    </DialogTrigger>
                    <AnimatePresence>
                        {isOpen && (
                            <DialogContent className="bg-white sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-center text-2xl font-bold">Login</DialogTitle>
                                    <DialogDescription className="text-center">
                                        Choose your preferred login method
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex flex-col gap-4 py-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="w-full flex items-center justify-center gap-2 h-12 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                                            onClick={handleGithubLogin}
                                        >
                                            <Github className="h-5 w-5" />
                                            <span>Continue with GitHub</span>
                                        </Button>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="w-full flex items-center justify-center gap-2 h-12 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                                            onClick={handleGoogleLogin}
                                        >
                                            <GoogleIcon className="h-5 w-5" />
                                            <span>Continue with Google</span>
                                        </Button>
                                    </motion.div>
                                </div>
                            </DialogContent>
                        )}
                    </AnimatePresence>
                </Dialog>
            ) : (
                <Dialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
                    <DialogTrigger asChild>
                        <Button variant="link">Logout</Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl font-bold">Confirm Logout</DialogTitle>
                            <DialogDescription className="text-center">
                                Are you sure you want to log out?
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-center gap-4 py-4">
                            <Button variant="outline" onClick={() => setShowLogoutConfirm(false)}>
                                Cancel
                            </Button>
                            <Button variant="destructive" onClick={handleLogout}>
                                Logout
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}

function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    );
}
