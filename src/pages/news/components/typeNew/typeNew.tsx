import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { TypeNewsProps } from "./type";

import style from "./style.module.scss";
import { Icon } from "@components";

export const TypeNews = ({ ...props }: TypeNewsProps) => {
    return (
        <Flex justify="center" align="stretch" gap="8" {...props}>
            <Flex
                justify="center"
                align="center"
                style={{ background: "#A6F4C5", padding: "8px 10px", borderRadius: "20px", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
                <Flex align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-sun-line" />
                </Flex>
                <Text size="2" color="green" weight="bold">
                    Dự án môi trường
                </Text>
            </Flex>
            <Flex
                justify="center"
                align="center"
                style={{ background: "#F2F4F7", padding: "8px 10px", borderRadius: "20px", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
                <Flex align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-tv-2-line" />
                </Flex>
                <Text size="2" weight="bold">
                    Tin tức
                </Text>
            </Flex>
            <Flex
                justify="center"
                align="center"
                style={{ background: "#F2F4F7", padding: "8px 10px", borderRadius: "20px", cursor: "pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
                <Flex align="center" justify="center" style={{ width: "30px", height: "30px", borderRadius: "50%", background: "white", marginRight: "10px" }}>
                    <Icon ri="ri-heart-line" />
                </Flex>
                <Text size="2" weight="bold">
                    Chiến dịch tình nguyện
                </Text>
            </Flex>
        </Flex>
    );
};
