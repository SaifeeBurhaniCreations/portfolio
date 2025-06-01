import { getColor } from "../../constants/colors"
import { IconProps } from "../../types"

const RightArrow = ({ size = 20, color = getColor('light') }: IconProps) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" height={`${size}px`} width={`${size}px`} viewBox="0 0 49 43" fill={color}>
                <path d="M47.9719 23.4801C49.3391 22.1129 49.3391 19.8926 47.9719 18.5254L30.4719 1.02539C29.1047 -0.341797 26.8844 -0.341797 25.5172 1.02539C24.15 2.39258 24.15 4.61289 25.5172 5.98008L37.0562 17.5082H3.5C1.56406 17.5082 0 19.0723 0 21.0082C0 22.9441 1.56406 24.5082 3.5 24.5082H37.0453L25.5281 36.0363C24.1609 37.4035 24.1609 39.6238 25.5281 40.991C26.8953 42.3582 29.1156 42.3582 30.4828 40.991L47.9828 23.491L47.9719 23.4801Z" fill={color}/>
            </svg>
        </>
    )
}

export default RightArrow