// auth.js
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "./firebase";

// Sign in with Google
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Sign in with GitHub
export const signInWithGithub = async () => {
    try {
        const result = await signInWithPopup(auth, githubProvider);
        return result.user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Logout
export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
};
