export class ValidationError extends Error {}

export function checkLength(value: string) {
  if (value.length === 0) {
    throw new ValidationError("at least one character is required");
  }
}
