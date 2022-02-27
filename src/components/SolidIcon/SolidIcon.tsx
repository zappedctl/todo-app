import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { x } from '@xstyled/styled-components';

import { IconName } from '@fortawesome/fontawesome-common-types';

library.add(fas);

type SolidIconProps = {
  iconName: IconName;
  size? :number;
};

const SolidIcon = ({ iconName, size }: SolidIconProps): JSX.Element =>
  (
    <x.div
      fontSize={size ?? 16}
      cursor="pointer"
    >
      <FontAwesomeIcon icon={['fas', iconName]} />
    </x.div>
  );

export default SolidIcon;
