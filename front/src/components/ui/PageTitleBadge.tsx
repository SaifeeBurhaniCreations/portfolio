import { getColor } from "../../constants/colors";
import { HStack } from "../layout/HStack";
import Typography from "../typography/Typography";

interface SectionLabelProps {
    children: string;
}

const PageTitleBadge = ({ children }: SectionLabelProps) => {
    return (
        <>
            <HStack style={{ background: getColor('purple', 600, 0.8) }} gap={8} className="page-title-badge">
                <div className="badge blink" style={{background: getColor('purple',300)}}></div>
                <Typography variant="b5" family="p" color={getColor('purple', 300)}>{children}</Typography>
            </HStack>
        </>
    )
}

export default PageTitleBadge