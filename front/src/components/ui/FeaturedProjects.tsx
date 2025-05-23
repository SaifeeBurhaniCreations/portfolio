import MainWrapper from "../layout/MainWrapper"
import { VStack } from "../layout/VStack"
import WorkDetailCard from "./WorkDetailCard"
import work_img_1 from "../../assets/images/png/work-1.png"
import work_img_2 from "../../assets/images/png/work-2.png"
import work_img_3 from "../../assets/images/png/work-3.png"
import work_img_4 from "../../assets/images/png/work-4.png"
import useResize from "../../hooks/useResize"

const projects = [
    {
        projectName: "OddiVille",
        description: "Odiiville is a frozen warehousing and production company specializing in high-quality frozen foods. From farm-fresh frozen corn and peas to ready-to-eat frozen momos, Odiiville ensures freshness, taste, and convenience in every bite. Discover efficient cold storage, reliable supply chains, and a wide range of frozen products crafted for households and businesses alike.",
        banner: work_img_1
    },
    {
        projectName: "Cleanora",
        description: "Cleanora is a professional cleaning service company specializing in deep cleaning for terraces, rooms, halls, and offices. Whether it's a one-time refresh or regular maintenance, Cleanora ensures spotless spaces with eco-friendly products and trained staff. Enjoy a cleaner, healthier environment with fast, reliable, and affordable services tailored to your needs.",
        banner: work_img_2
    },
    {
        projectName: "ZippyKeys",
        description: "ZippyKeys is a typing test website designed for both mobile and desktop practice. Improve your speed and accuracy with customizable tests, unique typing sounds, over 50+ vibrant themes, and multilingual support. Track your progress, challenge friends, and make typing fun and engaging wherever you are.",
        banner: work_img_3
    },
    {
        projectName: "RentIt",
        description: "RentIt is a rental platform that connects you with trusted providers to rent anything you need—homes, offices, furniture like almirahs, cars, clothes, and more. Whether short-term or long-term, RentIt makes renting easy, affordable, and secure, all in one convenient place.",
        banner: work_img_4
    },
]


const FeaturedProjects = () => {

    const isMobile = useResize()

    return (
        <>
            <MainWrapper>
                <VStack align='center' justify='center' gap={isMobile ? 80 : 180} >
                    {
                        projects?.map((value, index) => (
                            <WorkDetailCard
                                projectName={value.projectName}
                                banner={value.banner}
                                description={value.description}
                                key={index}
                                index={index}
                            />
                        ))
                    }
                </VStack>
            </MainWrapper>
        </>
    )
}

export default FeaturedProjects