export async function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(email) ? "Invalid email format" : null;
}

export async function validatePassword(password: string) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*()_+-=\[\]{};':"\\|,.<>/?]/.test(password);

  const requirementsMet =
    hasUpperCase && hasLowerCase && hasNumber && hasSymbol;
  return password.length < minLength
    ? `Password must be at least ${minLength} characters long`
    : !requirementsMet
    ? "Password must include uppercase, lowercase, numbers, and symbols"
    : null;
}
