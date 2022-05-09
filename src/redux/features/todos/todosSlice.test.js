import todosSlice, { loadTodosActionCreator } from "./todosSlice";

describe("Given the Todo reducer component", () => {
  describe("When it receive a loadTodos", () => {
    test("Then it should return Todos list", () => {
      const initialState = [];
      const expectedTodos = [
        {
          id: 1,
          name: "Challege por la mañana",
          done: "No",
        },
        {
          id: 2,
          name: "Challenge por la noche",
          done: "No",
        },
      ];

      const loadTodos = loadTodosActionCreator(expectedTodos);

      const todoLoaded = todosSlice(initialState, loadTodos);

      expect(todoLoaded).toEqual(expectedTodos);
    });
  });
});
