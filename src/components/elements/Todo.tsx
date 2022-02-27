type TodoProps = {
  children: React.ReactNode;
};

const Todo = ({ children }: TodoProps): JSX.Element =>
  (
    <div>
      {children}
    </div>
  );

export default Todo;
