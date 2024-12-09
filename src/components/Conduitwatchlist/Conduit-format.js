import Button from "../button.js";

export default function Conduitformat({
  id,
  name,
  Conduitgenestatus,
  Lastseenin,
  estimatedRisk,
  ConduitType,
}) {
  return `
    <tr class="border border-black *:p-2" data-conduit=${id}>
      <td class="bg-yellow-500 font-bold border border-black">${name}</td>
      <td class="bg-yellow-500 font-bold border border-black">${Conduitgenestatus}</td>
      <td class="bg-yellow-500 font-bold border border-black">${Lastseenin}</td>
      <td class="bg-yellow-500 font-bold border border-black">${estimatedRisk}</td>
      <td class="bg-yellow-500 font-bold border border-black">${ConduitType}</td>
      <td class="bg-yellow-500 font-bold border border-black">${Button({ text: "Delete", additionalClasses: "bg-amber-400 rounded text-black px-2 py-1" })}</td>
    </tr>
  `;
}
