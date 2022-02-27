import { x } from '@xstyled/styled-components';

type TodoWrapProps = {
  children: React.ReactNode;
};

const TodoWrap = ({ children }: TodoWrapProps): JSX.Element =>
  (
    <x.div
      display="flex"
      flexDirection="column"
      h="100vh"
      bg="todoWrapBackground"
    >
      {children}
    </x.div>
  );

export default TodoWrap;
