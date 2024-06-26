interface RoundLoaderPropType {
    className?: string
    speed?: number
    loading?: boolean
}

const RoundLoader = (props: RoundLoaderPropType) => {
    const {
        className,
        speed,
        loading = true
    } = props

    if (loading) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={`${className}`} width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="currentColor" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur={`${speed || `1`}s`} values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        )

    }
}

export default RoundLoader
