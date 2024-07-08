import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { GithubAuthProvider } from "firebase/auth/web-extension";

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleAuthProvider).then((userCredential) => {
    window.location.reload();
  });
};

export const signInWithGithub = async () => {
  await signInWithPopup(auth, githubAuthProvider).then((userCredential) => {
    window.location.reload();
  });
};
