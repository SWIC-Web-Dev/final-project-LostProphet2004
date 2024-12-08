export default function Input({ id, placeholder, additionalClasses = "" }) {
  return `
    <input 
      id="${id}" 
      class="w-full px-3 py-2 border rounded shadow-sm ${additionalClasses}" 
      type="text" 
      placeholder="${placeholder}"
      required
    />
  `;
}
