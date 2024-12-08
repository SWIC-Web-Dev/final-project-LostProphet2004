export default function Button({
  // Default values for the button
  type = "button",
  additionalClasses = "",
  text,
}) {
  return `
    <button 
      type="${type}" 
      class="rounded shadow transition-colors ${additionalClasses}"
    >
      ${text}
    </button>
  `;
}
