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
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);

        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
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
        aria-label="Change theme"
      />

      <Button
        type="primary"
        icon={<DownloadOutlined />}
        href="/Kurt-Ivan-Samillano-CV.pdf"
        download
      >
        Download CV
      </Button>
    </>
  );

  return (
    <>
      <Flex className="navbar" align="center" justify="space-between">
        <Space>
          <UserOutlined className="logo-icon" />

          <Text strong className="logo-text">
            Kurt Ivan O. <span>Samillano</span>
          </Text>
        </Space>

        {screens.lg ? (
          <Space size="small">{menuItems}</Space>
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