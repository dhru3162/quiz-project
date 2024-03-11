import { Pane } from 'evergreen-ui';
import Style from './Button.module.scss'
import RoundLoader from '../../Loaders/RoundLoader';

interface ButtonProps {
    className?: string;
    disabled?: boolean;
    id?: string;
    type: 'button' | 'submit' | 'reset';
    name: React.ReactNode;
    isLoading?: boolean;
    onClick?: () => void;
}

const LoginButton: React.FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        id,
        type,
        name,
        isLoading = false,
        onClick,
    } = props

    return (
        <button
            {...{ id, type, onClick }}
            disabled={isLoading || disabled}
            className={`${className && className} ${Style.loginButton} px-3 py-2 rounded-lg text-center`}
        >
            <Pane display="flex" alignItems="center" justifyContent="center">
                <RoundLoader className="mr-2 w-5 h-5" loading={isLoading} />
                {name}
            </Pane>
        </button >
    )
}

export default LoginButton
