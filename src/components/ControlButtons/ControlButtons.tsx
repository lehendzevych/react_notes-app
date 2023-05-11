import { ReactComponent as IconAdd } from '../../svg/add.svg';
import { ReactComponent as IconEdit } from '../../svg/edit.svg';
import { ReactComponent as IconRemove } from '../../svg/trash.svg';

import './ControlButtons.scss';

export const ControlButtons = () => {
  return (
    <div className="ControlButtons">
      <button
        type="button"
        className="ControlButtons__button"
      >
        <IconAdd className="ControlButtons__icon" />
      </button>

      <button
        type="button"
        className="ControlButtons__button"
        disabled
      >
        <IconRemove className="ControlButtons__icon" />
      </button>

      <button
        type="button"
        className="ControlButtons__button"
        disabled
      >
        <IconEdit className="ControlButtons__icon" />
      </button>
    </div>
  );
};
