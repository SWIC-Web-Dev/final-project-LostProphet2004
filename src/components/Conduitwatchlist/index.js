import Conduitformat from "./Conduit-format.js";

export default function Suspecttable(conduits) {
  return `
    <table class="w-full mt-4 border-collapse border">
      <thead class="bg-gray-100">
        <tr class="*:p-2 *:text-left">
          <th>Name</th>
          <th>Conduit gene status</th>
          <th>Last Seen In</th>
          <th>Estimated Risk</th>
          <th>Conduit Type</th>
        </tr>
      </thead>
      <tbody>
        ${conduits.map((conduit) => Conduitformat(conduit)).join("")}
      </tbody>
    </table>
  `;
}
