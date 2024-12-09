export default function Input({ id, placeholder, additionalClasses = "" }) {
  return `
    <input 
      id="${id}" 
      class="w-full px-3 py-2 border-solid border-2 border-black rounded shadow-sm
       text-black ${additionalClasses} placeholder:text-black" 
      type="text" 
      placeholder="${placeholder}"
      required
    />
  `;
}
