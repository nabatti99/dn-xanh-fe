import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import cls from "classnames";
import { NavLink } from "react-router-dom";
import { NavigatorProps } from "./type";
import Logo from "../../images/logo/logoDNxanh.png";
import LogoDemo from "../../images/logo/logoDNxanhDemo.jpg";
import styles from "./style.module.scss";
import { Icon } from "@components";

const navigationItems = [
    {
        title: "Thùng rác thông minh",
        icon: "ri-home-line",
        to: "/",
    },
    {
        title: "Tình trạng môi trường",
        icon: "ri-bar-chart-fill",
        to: "/analysis",
    },
    {
        title: "Cập nhật tin tức",
        icon: "ri-checkbox-line",
        to: "/news",
    },
    {
        title: "Báo cáo sai vi phạm",
        icon: "ri-flag-line",
        to: "/reports",
    },
    {
        title: "Về chúng tôi",
        icon: "ri-group-line",
        to: "/info",
    },
];

export const Navigator = ({ className, ...props }: NavigatorProps) => {
    return (
        <Container className={cls(styles["container"], className)} {...props}>
            <Flex direction="column" align="stretch" gap="4" mt="4">
                <Flex direction="column" justify="center" align="stretch" gap="3" wrap="wrap">
                    <Flex justify="center" align="center">
                        <div style={{ borderRadius: "5px", backgroundColor: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "5px" }}>
                            <div
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    backgroundImage: `url(${LogoDemo})`, // Chèn ảnh MapPng vào đây
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </div>

                        <Heading size="1" style={{ marginLeft: "1vw" }}>
                            ĐÀ NẴNG XANH
                        </Heading>
                    </Flex>
                    <br />
                    {navigationItems.map(({ title, icon, to }) => (
                        <NavLink key={title} to={to} className={styles["nav-link"]}>
                            {({ isActive }) => (
                                <Flex justify="start" align="center" className={cls(styles["text"], isActive && styles["active"])}>
                                    <Icon ri={icon} className={cls(styles["icon"], isActive && styles["active"])} />
                                    {title}
                                </Flex>
                            )}
                        </NavLink>
                    ))}
                </Flex>
            </Flex>
        </Container>
    );
};
