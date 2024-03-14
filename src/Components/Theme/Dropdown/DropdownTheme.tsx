import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn } from "@nextui-org/react";
import toast from "react-hot-toast";

interface ProfileDropdownType {
    options: any
    className?: string
    children?: any
    handlerAction?: (key: any) => void
}

const DropdownTheme = (props: ProfileDropdownType) => {
    const {
        options,
        className,
        children,
        handlerAction
    } = props

    return (
        <>
            <Dropdown>
                <DropdownTrigger className='!min-w-fit'>
                    <Button
                        className={`${className ? className : ''} !max-h-fit !min-w-fit`}
                    >
                        {children}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                    onAction={handlerAction}
                >
                    {options?.map((option: any) => {
                        return (
                            <DropdownItem
                                key={option?.value}
                                className={option?.className ? option.className : ``}
                                startContent={option?.startContent}
                            >
                                {option.label}
                            </DropdownItem>
                        )
                    })}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default DropdownTheme
