export const limitText = (text: string | null, len = 280) => {
  if (!text) return null;
  return text.length > len ? `${text.slice(0, len)} ...` : text;
}