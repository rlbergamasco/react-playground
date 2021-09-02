import { FiberManualRecord } from '@material-ui/icons';

export const Dot = ({disabled}) => {
    return (
        <FiberManualRecord color={disabled ? "disabled" : "primary"} />
    )
};