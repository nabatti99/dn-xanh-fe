import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { ContentProps } from "./type";

import style from "./style.module.scss";

export const Content = ({ title, nonce, ...props }: ContentProps) => {
    return (
        <Flex height="20vh" width="55vw" overflow="hidden" style={{ marginLeft: "10vw", zIndex: 1, marginTop: "5vh", cursor: "pointer" }}>
            <Flex
                overflow="hidden"
                align="center"
                justify="center"
                p="3"
                style={{
                    height: "100%",
                    width: "15vw",
                    background: "white",
                    border: "2px solid var(--green-7)",
                    borderRadius: "10px",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "var(--green-9)",
                }}
            >
                <Text size="4">{title}</Text>
            </Flex>
            <Box
                style={{
                    width: "80%",
                    paddingLeft: "2vw",
                    paddingRight: "1vw",
                }}
            >
                <Text size="4" style={{ textAlign: "justify" }}>
                    <p style={{ padding: "10px", margin: "0" }}>{nonce}</p>
                </Text>
            </Box>
        </Flex>
    );
};
