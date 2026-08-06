import { ArrowUpOutlined } from "@ant-design/icons";
import {
  ConfigProvider,
  FloatButton,
  Layout,
  theme,
} from "antd";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

/* CSS */
import "./App.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/skills.css";
import "./styles/footer.css";
import "./styles/theme.css";
import "./styles/responsive.css";

const { Content } = Layout;

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTheme = (): void => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#fdbb22",
          borderRadius: 14,
        },
      }}
    >
      <Layout
        className={`app-layout ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />

        <Content>
          <div data-aos="fade-down">
            <HeroSection />
          </div>

          <div data-aos="fade-up">
            <AboutSection />
          </div>

          <div data-aos="fade-right">
            <EducationSection />
          </div>

          <div data-aos="fade-left">
            <SkillsSection />
          </div>

          <div data-aos="zoom-in">
            <CertificationsSection />
          </div>

          <div data-aos="fade-up">
            <ProjectsSection />
          </div>

          <div data-aos="fade-up">
            <ContactSection />
          </div>
        </Content>

        <FooterSection />

        <FloatButton
          icon={<ArrowUpOutlined />}
          tooltip="Back to top"
          onClick={scrollToTop}
        />
      </Layout>
    </ConfigProvider>
  );
}

export default App;