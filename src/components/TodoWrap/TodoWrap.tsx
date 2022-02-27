type TodoWrapProps = {
  children: React.ReactNode;
};

const TodoWrap = ({ children }: TodoWrapProps): JSX.Element =>
  (
    <div>
      {children}
    </div>
  );

export default TodoWrap;
