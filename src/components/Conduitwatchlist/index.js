import Conduitformat from "./Conduit-format.js";

export default function Suspecttable(conduits) {
  return `
    <table class="w-full mt-4 border-collapse border">
      <thead class="bg-yellow-500">
        <tr class="*:p-2 *:text-left">
          <th class="border border-black border-5 ">Name</th>
          <th class="border border-black border-5">Conduit gene status</th>
          <th class="border border-black border-5">Last Seen In</th>
          <th class="border border-black border-5">Estimated Risk</th>
          <th class="border border-black border-5">Conduit Type</th>
        </tr>
      </thead>
      <tbody>
        ${conduits.map((conduit) => Conduitformat(conduit)).join("")}
      </tbody>
    </table>
  `;
}
