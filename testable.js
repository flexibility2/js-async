const useNameSelector = (store) => store.name;

describe("first", () => {
  it("should select the name from the store", () => {
    const state = { name: "John Doe" };
    const result = useNameSelector(state);
    expect(result).toBe("John Doe");
  });
});
