import { IconProps } from "../../types"

const Verified = ({ color, size = 20 }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={`${size}px`}
            height={`${size}px`}
            x="0"
            y="0"
            viewBox="0 0 24 24"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
        >
            <g>
                <g>
                    <path
                        d="M10.79 15.17a.75.75 0 0 1-.53-.22l-2.42-2.42c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4.83 4.83a.75.75 0 0 1-.53.22z"
                        fill={color}
                        opacity="1"
                        data-original="#000000"
                    />
                    <path
                        d="M12 22.75c-.63 0-1.26-.21-1.75-.63l-1.58-1.36c-.16-.14-.56-.28-.77-.28H6.18A2.68 2.68 0 0 1 3.5 17.8v-1.71c0-.21-.14-.6-.28-.76l-1.35-1.59c-.82-.97-.82-2.5 0-3.47l1.35-1.59c.14-.16.28-.55.28-.76V6.2c0-1.48 1.2-2.68 2.68-2.68h1.73c.21 0 .61-.15.77-.28l1.58-1.36c.98-.84 2.51-.84 3.49 0l1.58 1.36c.16.14.56.28.77.28h1.7c1.48 0 2.68 1.2 2.68 2.68v1.7c0 .21.15.61.29.77l1.36 1.58c.84.98.84 2.51 0 3.49l-1.36 1.58c-.14.16-.29.56-.29.77v1.7c0 1.48-1.2 2.68-2.68 2.68h-1.7c-.21 0-.61.15-.77.28l-1.58 1.36c-.49.43-1.12.64-1.75.64zM6.18 5.02C5.53 5.02 5 5.55 5 6.2v1.71c0 .57-.27 1.3-.64 1.73l-1.35 1.59c-.35.41-.35 1.12 0 1.53l1.35 1.59c.37.44.64 1.16.64 1.73v1.71c0 .65.53 1.18 1.18 1.18h1.73c.58 0 1.31.27 1.75.65l1.58 1.36c.41.35 1.13.35 1.54 0l1.58-1.36c.44-.37 1.17-.65 1.75-.65h1.7c.65 0 1.18-.53 1.18-1.18v-1.7c0-.58.27-1.31.65-1.75L21 12.76c.35-.41.35-1.13 0-1.54l-1.36-1.58c-.38-.44-.65-1.17-.65-1.75V6.2c0-.65-.53-1.18-1.18-1.18h-1.7c-.58 0-1.31-.27-1.75-.65l-1.58-1.36c-.41-.35-1.13-.35-1.54 0L9.66 4.38c-.44.37-1.18.64-1.75.64z"
                        fill={color}
                        opacity="1"
                        data-original="#000000"
                    />
                </g>
            </g>
        </svg>
    )
}

export default Verified