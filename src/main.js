import Button from "./components/button";
import Suspecttable from "./components/conduitwatchlist";
import Input from "./components/input";
import initialwatchList from "./db";
import state from "./state";

const app = document.querySelector("#app");

// Initialize with our data
state.setState({ conduits: initialwatchList });

function render() {
  // Destructure the known property from the state
  const { conduits } = state.getState();

  const formFields = [
    { id: "name", placeholder: "Name of Bioterrorist Suspect" },
    { id: "Lastseenin", placeholder: "Last Seen In" },
    { id: "estimatedRisk", placeholder: "Estimated Risk" },
    { id: "ConduitType", placeholder: "Conduit Type" },
  ];

  app.innerHTML = `
    <div class="max-w-4xl mx-auto p-4">
      <form id="suspectForm" class="space-y-4 mb-8">
        ${formFields
          .map((field) =>
            Input({
              ...field,
              additionalClasses: "mb-2",
            }),
          )
          .join("")}
        
          ${Button({
            type: "submit",
            additionalClasses:
              "w-full bg-indigo-500 text-white px-4 py-2 hover:bg-indigo-600",
            text: "Add Conduit Suspect",
          })}
      </form>
      
      ${Suspecttable(conduits)}
    </div>
  `;
}

// We want the render function to run with the new state every time it changes
state.subscribe(render);

render();

document.addEventListener("click", (event) => {
  state.deleteSuspect(event.target.closest("tr").dataset.conduit);
});

// Using event delegation for form submission
document.addEventListener("submit", (event) => {
  if (event.target.id === "suspectForm") {
    event.preventDefault();
    const form = event.target;

    // These come from the input ids. We know they exist because we created them.
    state.addSuspect({
      name: form.name.value,
      Lastseenin: form.Lastseenin.value,
      estimatedRisk: form.estimatedRisk.value,
      ConduitType: form.ConduitType.value,
    });
  }
});
