import { Button, Flex, Text } from "@radix-ui/themes";
import { ProductsProps } from "./type";
import { Icon } from "@components";
import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";
import Image4 from "./images/image4.png";
import Image5 from "./images/image5.png";
import Image6 from "./images/image6.png";
import { useResponsive } from "@services/responsive";

export const Products = ({ ...props }: ProductsProps) => {
    const responsive = useResponsive({
        initial: {
            width: "80vw",
        },
        md: {
            width: "20vw",
        },
    });

    return (
        <Flex wrap="wrap" justify="center" align="stretch" gap="4" {...props}>
            {ProductItems.map((item, index) => (
                <Flex
                    key={index}
                    direction="column"
                    style={{
                        width: responsive.width,
                        background: "white",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #D0D5DD",
                    }}
                >
                    <img src={item.image} alt={item.title} style={{ borderRadius: "10px 10px 0 0" }} /> {/* Hiển thị ảnh */}
                    <Flex flexGrow="1" direction="column" style={{ padding: "1rem" }}>
                        <Flex flexGrow="1" direction="column">
                            <Text size="4" weight="bold">
                                {item.title}
                            </Text>
                        </Flex>
                        <Flex align="end" justify="between">
                            <Flex direction="column" mt="3">
                                <Text>ĐIỂM XANH</Text>
                                <Text size="4" color="green">
                                    <Icon ri="ri-star-line" style={{ marginRight: "0.5rem" }} />
                                    <span>{item.point}</span>
                                </Text>
                            </Flex>
                            <Button>Đổi thưởng!</Button>
                        </Flex>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};

export const ProductItems = [
    {
        title: "3 Chậu Xương rồng ngẫu nhiên",
        point: "120",
        image: Image1,
    },
    {
        title: "Bộ chén sứ cao cấp",
        point: "200",
        image: Image2,
    },
    {
        title: "Ô che mưa xanh lá",
        point: "70",
        image: Image3,
    },
    {
        title: "Bình nước thủy tinh",
        point: "120",
        image: Image4,
    },
    {
        title: "Bộ soong inox cao cấp",
        point: "240",
        image: Image5,
    },
    {
        title: "Bộ tách trà thủy tinh cao cấp",
        point: "240",
        image: Image6,
    },
];
