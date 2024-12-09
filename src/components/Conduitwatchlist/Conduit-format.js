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
    <tr class="border-b *:p-2" data-conduit=${id}>
      <td>${name}</td>
      <td>${Conduitgenestatus}</td>
      <td>${Lastseenin}</td>
      <td>${estimatedRisk}</td>
      <td>${ConduitType}</td>
      <td>${Button({ text: "Delete", additionalClasses: "bg-red-500 rounded text-white px-2 py-1" })}</td>
    </tr>
  `;
}
