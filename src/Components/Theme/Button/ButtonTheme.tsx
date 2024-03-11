import { Pane } from 'evergreen-ui';
import Style from './Button.module.scss'
import RoundLoader from '../../Loaders/RoundLoader';

interface ButtonProps {
    className?: string;
    disabled?: boolean;
    id?: string;
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    isLoading?: boolean;
    onClick?: () => void;
}

const ButtonTheme = (props: ButtonProps) => {
    const {
        className,
        disabled,
        id,
        type,
        children,
        isLoading = false,
        onClick,
    } = props

    return (
        <button
            {...{ id, type, onClick }}
            disabled={isLoading || disabled}
            className={`${className && className} ${Style.buttonTheme} px-6 py-2 rounded-lg text-center outline-none`}
        >
            <Pane display="flex" alignItems="center" justifyContent="center">
                <RoundLoader className="mr-2 w-5 h-5" loading={isLoading} />
                {children}
            </Pane>
        </button >
    )
}

export default ButtonTheme
