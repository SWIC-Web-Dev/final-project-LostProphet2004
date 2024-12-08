export default (() => {
  // Establishes private state
  let state = { conduits: [] };

  // List of listeners to be called when the state changes
  const listeners = [];

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;

      // Call all listeners to notify them that the state has changed
      listeners.forEach((listener) => {
        listener(state);
      });
    },
    subscribe(listener) {
      listeners.push(listener);
    },
    addSuspect({ name, assignedTo, estimatedTime, temperature }) {
      // Update the state by mixing the new dish with the existing dishes
      const newConduits = [
        ...state.conduits,
        {
          name,
          status: "not started",
          assignedTo,
          estimatedTime,
          temperature,
        },
      ];

      // Update the state
      this.setState({ conduits: newConduits });
    },
    deleteSuspect(conduitId) {
      // Filter out the dish with the given name
      const newConduits = state.conduits.filter(
        // * Be sure to compare the same type of values
        (conduit) => conduit.id !== Number(conduitId),
      );

      this.setState({ conduits: newConduits });
    },
  };
})();
