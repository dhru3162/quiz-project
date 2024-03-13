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

const LoginButton: React.FC<ButtonProps> = (props) => {
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
            className={`${className && className} ${Style.loginButton} px-3 py-2 rounded-lg text-center outline-none`}
        >
            <Pane display="flex" alignItems="center" justifyContent="center">
                <RoundLoader className="mr-2 w-5 h-5" loading={isLoading} />
                {children}
            </Pane>
        </button >
    )
}

export default LoginButton
