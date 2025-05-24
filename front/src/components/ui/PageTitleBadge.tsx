import { getColor } from "../../constants/colors";
import { BadgeLabelProps } from "../../types";
import { HStack } from "../layout/HStack";
import Typography from "../typography/Typography";



const PageTitleBadge = ({ children, isBlink = true, size = 'md', bg = getColor('purple', 600, 0.8), color = getColor('purple', 300), badge = true }: BadgeLabelProps) => {
    const mapVariant = {
        'lg' : 'b3',
        'md' : 'b4',
        'sm' : 'b4',
        'xs' : 'b5',
    }
    return (
        <>
            <HStack style={{ background: bg }} gap={8} className={`page-title-badge ${size}`}>
                {badge && <div className={`badge ${isBlink ? 'blink' : ''}`} style={{ background: color }}></div>}
                <Typography variant={mapVariant[size]} family="p" color={color}>{children}</Typography>
            </HStack>
        </>
    )
}

export default PageTitleBadge