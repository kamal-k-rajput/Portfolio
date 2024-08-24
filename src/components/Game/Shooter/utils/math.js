export function getRandomNumber(min, max) {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate a random number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (decimal for #FFFFFF)
  const randomNumber = Math.floor(Math.random() * 16777215);

  // Convert the number to a hexadecimal string and pad with zeros if necessary
  const hexColor = `#${randomNumber.toString(16).padStart(6, "0")}`;

  return hexColor;
}
