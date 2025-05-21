import { IconProps } from "../../types"

const SparkClick = ({ size = 32 }: IconProps) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={`${size}px`} height={`${size}px`} viewBox="0 0 31 31" fill="none">
                <mask id="mask0_2_263" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                    <path d="M15.5 2.58325V7.74992" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2083 14.2083L27.125 16.7916L23.25 19.3749L27.125 23.2499L23.25 27.1249L19.375 23.2499L16.7916 27.1249L14.2083 14.2083Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.6334 6.36646L20.9799 10.0199M6.3666 24.6332L10.0201 20.9797M2.58331 15.4998H7.74998M6.3666 6.36646L10.0201 10.0199" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </mask>
                <g mask="url(#mask0_2_263)">
                    <path d="M0 0H31V31H0V0Z" fill="white"/>
                </g>
            </svg>
        </>
    )
}

export default SparkClick