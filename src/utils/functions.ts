import toast from "react-hot-toast";

function validateEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function validateLogin(email: string, pass: string) {
  if (!validateEmail(email) || !pass) {
    toast.error(!pass ? "Password is required" : "Invalid Email Address");
    return false;
  }
  return true;
}

export function validateSignup(name: string, email: string, pass: string) {
  if (!name || !validateEmail(email) || pass.length < 6) {
    toast.error(
      !name
        ? "Full Name is required"
        : pass.length < 6
          ? "Password must be at least 6 characters long"
          : "Invalid Email Address",
    );
    return false;
  }
  return true;
}

export function createTimeoutPromise() {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
}
