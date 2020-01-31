export const allTodos = ({todos}) => (
  Object.keys(todos).map(id => todos[id])
);

export const stepsByTodoId = ({steps}, todoId) => (
  Object.values(steps).filter((step) => {
    return todoId === step.todoId;
  })
);