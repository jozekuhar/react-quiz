export default function formatString(string) {
  const formatedString = string.replaceAll("&quot;", "'").replaceAll("&#039;", "'").replaceAll("&Aacute", "Á")
  // &#039; = '
  // &Aacute = Á
  return formatedString
}