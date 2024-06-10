interface TodoAttributes {
  todoText: string;
}

interface Todo {
  attributes: TodoAttributes;
}

export interface HomeProps {
  todos: {
    data: Todo[];
  };
}
