import { useRef, useState } from "react";
import MainWrapper from "../layout/MainWrapper";
import VStack from "../layout/VStack";
import { getColor } from "../../constants/colors";
import CustomImage from "./CustomImage";
import { IconMapProps } from "../../types";
import { mapIcon, mapImage } from "../../utils/mapper";
import Typography from "../typography/Typography";

interface CardItem {
    id: string;
    title: string;
    content: string;
    icon: keyof typeof mapIcon;
    image: keyof typeof mapImage;
}

interface UICardsProps {
    cards: CardItem[];
    initialActiveIndex?: number;
    className?: string;
    iconSize?: keyof IconMapProps;
}

const iconSizeMap: IconMapProps = {
    'lg': { height: '76px', width: '76px' },
    'md': { height: '56px', width: '56px' },
    'sm': { height: '36px', width: '36px' },
}

const FeatureShowcase: React.FC<UICardsProps> = ({
    cards,
    initialActiveIndex = 0,
    iconSize = "lg",
    className = "",
}) => {
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
    const listRef = useRef<HTMLUListElement>(null);

    // Dynamic grid columns
    const gridTemplateColumns = cards
        .map((_, index) => (index === activeIndex ? "6fr" : "1fr"))
        .join(" ");

    const handleCardInteraction = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <MainWrapper>
            <VStack align="center" justify="center" gap={24} className={`ui-cards-container ${className}`}>
                <ul
                    ref={listRef}
                    className="ui-cards-grid"
                    style={{ gridTemplateColumns }}
                >
                    {cards.map((card, index) => {
                        const IconComponent = mapIcon[card.icon];
                        const imageSrc = mapImage[card.image];

                        return (
                            <li
                                key={card.id}
                                data-active={index === activeIndex}
                                onClick={() => handleCardInteraction(index)}
                                onPointerEnter={() => handleCardInteraction(index)}
                                onFocus={() => handleCardInteraction(index)}
                                className="ui-card-item"
                                style={{ background: getColor('purple', 600, 0.6) }}
                            >
                                <VStack justify="end" gap={16} className="ui-card-article w-100">
                                    <Typography
                                        className="ui-card-title"
                                        variant="b3"
                                        family="p"
                                        color={getColor("light")}
                                    >
                                        {card.title}
                                    </Typography>

                                    <div className="ui-card-icon">
                                    <CustomImage
                                        style={iconSizeMap[iconSize]}
                                        imgStyle={{ objectFit: 'contain' }}
                                        src={IconComponent}
                                        borderRadius={0}
                                    />
                                    </div>

                                    <Typography
                                        variant="b4"
                                        family="jk"
                                        color={getColor("light")}
                                        className="ui-card-description"
                                    >
                                        {card.content}
                                    </Typography>

                                    {imageSrc && (
                                        <img
                                            src={imageSrc}
                                            alt="Feature image"
                                            className="ui-card-image"
                                            loading="lazy"
                                        />
                                    )}
                                </VStack>
                            </li>
                        );
                    })}
                </ul>
            </VStack>
        </MainWrapper>
    );
};

export default FeatureShowcase;
