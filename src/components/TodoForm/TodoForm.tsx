import { x } from '@xstyled/styled-components';

const TodoForm = (): JSX.Element =>
  (
    <x.div
      display="flex"
      mt="auto"
      w="100%"
    >
      <x.input
        type="text"
        w="100%"
        p={4}
      />
    </x.div>
  );

export default TodoForm;
