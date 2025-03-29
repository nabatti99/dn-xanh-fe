import { useApiGetSmartRecycleBin } from "@api/http-request/requests/api-server/hooks/smart-recycle-bin/use-api-get-smart-recycle-bin";
import { WasteType } from "@api/http-request/requests/api-server/models/smart-recycle-bin";
import { Icon } from "@components";
import { Button, Flex, Text } from "@radix-ui/themes";
import { pushErrorNotification } from "@services/notification";
import { useAppDispatch, useAppSelector } from "@store";
import { stringifyRequestError } from "@utilities";
import { useEffect } from "react";
import inorganicTrash from "./images/trash/inorganicTrash.png";
import organicTrash from "./images/trash/organicTrash.png";
import realTrashDemo from "./images/trash/realTrashDemo.png";
import recycledTrash from "./images/trash/recycledTrash.png";
import { BottomProps } from "./type";
import { useResponsive } from "@services/responsive";

const getSmallerSize = (baseSize: string): "1" | "2" => {
    const sizeNum = Number(baseSize) - 1;
    return (sizeNum >= 1 ? String(sizeNum) : "1") as "1" | "2";
};

export const Bottom = ({ ...props }: BottomProps) => {
    const dispatch = useAppDispatch();
    const { currentRecycleBinId } = useAppSelector((state) => state.home);

    const responsive = useResponsive({
        initial: {
            imageWidth: "80px", 
            imageSize: "40px", 
            padding: "10px",
            fontSize: "2",
            flexDirection: "column", 
            containerWidth: "90vw", 
            gap: "3",
            itemWidth: "100%",
            scrollBehavior: "auto",
        },
        md: {
            imageWidth: "unset", 
            imageSize: "60px", 
            padding: "20px",
            fontSize: "3",
            flexDirection: "row", 
            containerWidth: "69vw", 
            gap: "5",
            scrollBehavior: "hidden",
            itemWidth: "auto",
        },
    });

    const { mutateAsync, data: smartRecycleBin } = useApiGetSmartRecycleBin();

    useEffect(() => {
        if (currentRecycleBinId) {
            mutateAsync({
                id: currentRecycleBinId,
            }).catch((error) => {
                dispatch(
                    pushErrorNotification({
                        message: "Không thể lấy dữ liệu thùng rác thông minh",
                        description: stringifyRequestError(error),
                    })
                );
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentRecycleBinId]);

    const physicalRecycleBinStyleMap: Record<WasteType, any> = {
        [WasteType.RECYCLABLE]: {
            text: "Rác tái chế",
            imageSrc: recycledTrash,
        },
        [WasteType.ORGANIC]: {
            text: "Rác hữu cơ",
            imageSrc: organicTrash,
        },
        [WasteType.NON_RECYCLABLE]: {
            text: "Rác vô cơ",
            imageSrc: inorganicTrash,
        },
    };

    console.log(smartRecycleBin);

    return (
        <Flex direction="column" position="absolute" 
        width={responsive["containerWidth"]} style={{ margin: "0 auto", left: "50%", bottom: "24px", transform: "translateX(-50%)" }}>
            <Flex justify="between" align="end" gap={responsive["gap"]} 
            direction={responsive["flexDirection"] === "column" ? "column" : "row"}
            style={{ marginBottom: "10px" }}>
                <Button style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                    <Icon ri="ri-corner-up-right-line"></Icon> Dẫn đường
                </Button>
                <img
                    alt="ImageDemo"
                    src={realTrashDemo}
                    style={{ border: "5px solid white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", width: responsive["imageWidth"] }}
                />
            </Flex>

            <Flex
                direction="column"
                align="stretch"
                gap="3"
                {...props}
                style={{
                    padding: responsive["padding"],
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* <Flex align="stretch" gap="5" style={{ marginLeft: "20px", marginBottom: "-14px" }}>
                    <Flex direction="column" onClick={() => changeIndex(1)} style={{ cursor: "pointer" }}>
                        <Text weight="bold">Tình Trạng</Text>
                        {index === 1 && <div style={{ border: "1.5px solid green", zIndex: "1" }}></div>}
                    </Flex>
                    <Flex direction="column" onClick={() => changeIndex(2)} style={{ cursor: "pointer" }}>
                        <Text weight="bold">Lịch sử thu gom rác</Text>
                        {index === 2 && <div style={{ border: "1.5px solid green", zIndex: "1" }}></div>}
                    </Flex>
                    <Flex direction="column" onClick={() => changeIndex(3)} style={{ cursor: "pointer" }}>
                        <Text weight="bold">Thông tin</Text>
                        {index === 3 && <div style={{ border: "1.5px solid green", zIndex: "1" }}></div>}
                    </Flex>
                </Flex>
                <div style={{ border: "1px solid silver", margin: "0 10px" }}></div> */}
                <Flex gap={responsive["gap"]}
                direction="row"
                style={{
                    padding: responsive["padding"],
                    overflowX: responsive["scrollBehavior"], // Cuộn ngang trên màn nhỏ
                    flexWrap: "nowrap", // Ngăn xuống dòng để vuốt ngang
                    justifyContent: responsive["scrollBehavior"] === "hidden" ? "space-around" : "flex-start", // Căn đều trên màn lớn, căn trái khi cuộn
                }}>
                    {smartRecycleBin &&
                        smartRecycleBin.physicalRecycleBins.map((physicalRecycleBin) => (
                            <Flex direction="column" key={physicalRecycleBin.id}
                            style={{
                                width: responsive["itemWidth"], 
                                flexShrink: 0, 
                            }}
                            >
                                <Flex>
                                    <img
                                        width={responsive["imageSize"]} 
                                        height={responsive["imageSize"]}
                                        alt={physicalRecycleBinStyleMap[physicalRecycleBin.wasteType].text}
                                        src={physicalRecycleBinStyleMap[physicalRecycleBin.wasteType].imageSrc}
                                    />
                                    <Flex direction="column" align="stretch" justify="center" style={{ marginLeft: "10px" }}>
                                        <Text size={responsive["fontSize"]} style={{ fontWeight: "700" }}>
                                            {physicalRecycleBinStyleMap[physicalRecycleBin.wasteType].text}
                                        </Text>
                                        <Text
                                            size={getSmallerSize(responsive["fontSize"])}
                                            color="green"
                                            style={{ fontWeight: "500" }}
                                        >
                                            Đang chứa {((physicalRecycleBin.currentVolume / physicalRecycleBin.maxVolume) * 100).toFixed(0)}% rác
                                        </Text>
                                    </Flex>
                                </Flex>
                                <Flex direction="column" style={{ marginTop: "10px" }}>
                                    <div>
                                        <Icon ri="ri-funds-line" size={responsive["fontSize"]} color="green" style={{ marginRight: "5px" }} />
                                        <Text size={getSmallerSize(responsive["fontSize"])} style={{ fontWeight: "600" }}>
                                            Đã dọn: 1 tiếng trước
                                        </Text>
                                    </div>
                                    <div>
                                        <Icon ri="ri-funds-line" size={responsive["fontSize"]} color="green" style={{ marginRight: "5px" }} />
                                        <Text size={getSmallerSize(responsive["fontSize"])} style={{ fontWeight: "600" }}>
                                            Thêm rác: {new Date(physicalRecycleBin.updatedAt!).toLocaleTimeString()}
                                        </Text>
                                    </div>
                                </Flex>
                            </Flex>
                        ))}
                </Flex>
            </Flex>
        </Flex>
    );
};