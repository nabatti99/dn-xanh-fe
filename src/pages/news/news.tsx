import { Seo } from "@global/components";
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";

import { useEffect } from "react";
import { NewsPageProps } from "./type";
import { TypeNews } from "./components/typeNew";
import DemoPic from "./pictures/DragonBridge.png";
import { Content } from "./components/content";

const contentItems = [
    {
        title: "Năm 2022, Đà Nẵng phân loại được hơn 1.700 tấn rác tài nguyên",
        nonce: "Trong năm 2022, Đà Nẵng có hơn 1.717 tấn rác tài nguyên được thu gom, tái chế, thu được tổng số tiền trên 4 tỉ đồng. Bước đầu, nhận thức về việc phân loại rác thải tại nguồn dần hình thành trong cộng đồng dân cư với nhiều mô hình tái chế, phân loại rác được ra đời.",
    },
    {
        title: "Phân loại rác tại nguồn ở Đà Nẵng: Nhận diện những tồn tại, hạn chế",
        nonce: "(TN&MT) - Phân loại rác tại nguồn, hướng tới phát triển xanh là chủ trương lớn trong tiến trình xây dựng thành phố môi trường mà Đà Nẵng đã tiên phong triển khai từ rất sớm. Tuy nhiên, việc triển khai phân loại chất thải rắn sinh hoạt tại nguồn ở Đà Nẵng trên thực tế còn nhiều tồn tại, hạn chế.",
    },
    {
        title: "Năm 2023, toàn thành phố Đà Nẵng tiến hành phân loại rác",
        nonce: "Ngày 22-9, tại phiên họp thường trực HĐND thành phố thường kỳ, đại diện UBND thành phố Đà Nẵng cho biết trong năm 2021, 100% quận, huyện đã ban hành kế hoạch triển khai phân loại chất thải rắn sinh hoạt tại nguồn trên địa bàn cho giai đoạn 2019 - 2025 và từng năm, trong đó có 7/7 quận, huyện ban hành kế hoạch thực hiện năm 2022.",
    },
    {
        title: "Đà Nẵng tiến gần tới mốc phân loại rác tại nguồn toàn thành phố",
        nonce: "Trong năm 2023, thành phố Đà Nẵng đặt mục tiêu có hơn 90% số tổ dân phố triển khai phân loại rác, và 90% số hộ gia đình phân loại rác hiệu quả tại địa bàn khu dân cư. Đồng thời, đối với các cơ sở khác, thành phố đặt mục tiêu hơn 70% cơ sở trong các khu công nghiệp, cụm công nghiệp, hơn 80% cơ sở sản xuất, kinh doanh dịch vụ, du lịch và 100% trường học, cơ sở y tế trên địa bàn thành phố phân loại rác bảo đảm theo phương thức chung của thành phố, hơn 80% chợ, siêu thị, trung tâm thương mại được tuyên truyền, hướng dẫn và thực hiện phân loại.",
    },
];

export const NewsPage = ({}: NewsPageProps) => {
    useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }));

    return (
        <>
            <Flex direction="column" align="stretch" style={{ background: "linear-gradient(to right, #f0fff4, #ffffff)" }}>
                <Flex direction="column" align="center" style={{ margin: "3vh 10vw" }}>
                    {/* <TypeNews style={{ position: "fixed", top: "5vh", zIndex: 2000 }} /> */}
                    <TypeNews />
                </Flex>
                <Flex align="center" style={{ margin: "1vh 10vw" }}>
                    <img src={DemoPic} alt="Demo" style={{ borderRadius: "10px", height: "80vh", width: "20vw", position: "absolute", top: "15vh" }} />
                    <Flex direction="column">
                        {contentItems.map((item, index) => (
                            <Content key={index} title={item.title} nonce={item.nonce} style={{ zIndex: "0" }} />
                        ))}
                    </Flex>
                </Flex>
            </Flex>

            <Seo title="News" />
        </>
    );
};

// Using for lazy loading page
export default NewsPage;
