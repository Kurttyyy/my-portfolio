import {
  DownloadOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Drawer,
  Flex,
  Grid,
  Space,
  Switch,
  Typography,
} from "antd";
import { useEffect, useState } from "react";

const { Text } = Typography;
const { useBreakpoint } = Grid;

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const sections = [
  "home",
  "about",
  "education",
  "skills",
  "certifications",
  "projects",
  "contact",
];

function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const screens = useBreakpoint();
  const [open, setOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(id);
    setOpen(false);
  };

  const navButton = (id: string, label: string) => (
    <Button
      type="text"
      className={activeSection === id ? "active-nav" : ""}
      onClick={() => scrollToSection(id)}
    >
      {label}
    </Button>
  );

  const menuItems = (
    <>
      {navButton("home", "Home")}
      {navButton("about", "About")}
      {navButton("education", "Education")}
      {navButton("skills", "Skills")}
      {navButton("certifications", "Certifications")}
      {navButton("projects", "Projects")}
      {navButton("contact", "Contact")}

      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />

      <Button
        type="primary"
        icon={<DownloadOutlined />}
      >
        Download CV
      </Button>
    </>
  );

  return (
    <>
      <Flex
        className="navbar"
        align="center"
        justify="space-between"
      >
        <Space>
          <UserOutlined className="logo-icon" />

          <Text strong className="logo-text">
            Kurt Ivan <span>Samillano</span>
          </Text>
        </Space>

        {screens.lg ? (
          <Space size="middle">{menuItems}</Space>
        ) : (
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        )}
      </Flex>

      <Drawer
        title="Menu"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Flex vertical gap={12}>
          {menuItems}
        </Flex>
      </Drawer>
    </>
  );
}

export default Navbar;