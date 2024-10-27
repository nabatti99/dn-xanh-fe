import { Flex, Heading, Text } from "@radix-ui/themes";
import { PointProps } from "./type";

import style from "./style.module.scss";

export const Point = ({ ...props }: PointProps) => {
    return (
        <Flex
            direction="column"
            align="stretch"
            gap="1"
            style={{ background: "white", padding: "15px 20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer" }}
            {...props}
        >
            <Heading>120,340</Heading>

            <Text size="3" weight="bold" style={{ marginTop: "15px" }}>
                Điểm xanh
            </Text>
            <Text size="1">đã được trao thưởng</Text>
        </Flex>
    );
};
