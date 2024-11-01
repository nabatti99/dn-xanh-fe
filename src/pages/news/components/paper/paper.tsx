import { Icon } from "@components";
import { Flex, Text } from "@radix-ui/themes";
import Image1 from "./images/decors/image1.png";
import Image2 from "./images/decors/image2.png";
import Image3 from "./images/decors/image3.png";
import Image4 from "./images/decors/image4.png";
import Image5 from "./images/decors/image5.png";
import Image6 from "./images/decors/image6.png";
import { PaperProps } from "./type";
import { useResponsive } from "@services/responsive";

export const Paper = ({ ...props }: PaperProps) => {
    const responsive = useResponsive({
        initial: {
            containerMargin: "0 32px",
            paperWidth: "100%",
            titleSize: "2",
            dateSize: "1",
        },
        md: {
            containerMargin: "0 80px",
            paperWidth: "320px",
            titleSize: "4",
            dateSize: "2",
        },
    });

    return (
        <Flex flexGrow="1" direction="column">
            <Flex wrap="wrap" align="start" gap="5" style={{ overflowY: "auto", margin: responsive["containerMargin"] }} {...props}>
                {PaperItems.map((item, index) => (
                    <Flex
                        key={index}
                        direction="column"
                        style={{ width: responsive["paperWidth"], background: "white", cursor: "pointer", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                    >
                        <img src={item.image} alt={item.title} style={{ borderRadius: "10px 10px 0 0" }} /> {/* Hiển thị ảnh */}
                        <Flex flexGrow="1" direction="column" gap="3" style={{ padding: "1rem" }}>
                            <Flex flexGrow="1" direction="column">
                                <Text size={responsive["titleSize"]}>{item.title}</Text>
                            </Flex>
                            <Text size={responsive["dateSize"]}>
                                <Icon ri="ri-calendar-line" style={{ marginRight: "1rem" }} />
                                <span>{item.nonce}</span>
                            </Text>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export const PaperItems = [
    {
        title: "Đà Nẵng: Đến năm 2030 tỷ lệ chất thải rắn sinh hoạt được thu gom, xử lý đảm bảo quy chuẩn kỹ thuật môi trường",
        nonce: "03 Tháng 09, 2024 - 15:48",
        image: Image1,
    },
    {
        title: "Đà Nẵng đứng trước thách thức ô nhiễm “trắng” từ rác thải nhựa",
        nonce: "Thứ Bảy, 07:00, 13/10/2018",
        image: Image2,
    },
    {
        title: "Hơn 360.000 tấn rác thải ở Đà Nẵng sắp không có chỗ chứa",
        nonce: "19 Tháng 06, 2024 - 15:46",
        image: Image3,
    },
    {
        title: "Nơm nớp lo sợ vì sống bên bãi rác khổng lồ ở Đà Nẵng",
        nonce: "19 Tháng 10, 2024",
        image: Image4,
    },
    {
        title: "Quá tải rác: ngòi nổ cho “Cuộc xâm chiếm của rác thải”",
        nonce: "Posted on June, 09 2020",
        image: Image5,
    },
    {
        title: "Đà Nẵng huy động sức mạnh cộng đồng để bảo vệ môi trường",
        nonce: "19 Tháng 10, 2024",
        image: Image6,
    },
];
