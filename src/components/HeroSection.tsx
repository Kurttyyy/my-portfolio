import {
  ArrowRightOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Flex,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import { TypeAnimation } from "react-type-animation";

const { Title, Paragraph, Text } = Typography;

function HeroSection() {
  const scrollToProjects = (): void => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = (): void => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero-section">
      <Row align="middle" gutter={[50, 50]}>
        <Col xs={24} lg={14}>
          <Tag color="gold" className="available-tag">
            AVAILABLE FOR PROJECTS
          </Tag>

          <Title className="hero-title">Hello, I am</Title>

          <Title className="hero-name">Kurt Ivan</Title>

          <div className="typing-wrapper">
            <TypeAnimation
              sequence={[
                "Information Technology Student",
                1800,
                "Aspiring Web Developer",
                1800,
                "React and TypeScript Learner",
                1800,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              cursor
              className="typing-text"
            />
          </div>

          <Paragraph className="hero-description">
            I create modern, responsive and user-friendly websites using React,
            TypeScript and Ant Design.
          </Paragraph>

          <Space wrap size="middle">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={scrollToProjects}
            >
              View Projects
            </Button>

            <Button
              size="large"
              icon={<MailOutlined />}
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </Space>

          <Flex align="center" gap={12} className="social-links">
            <Text type="secondary">Follow me:</Text>

            <Button
              shape="circle"
              icon={<GithubOutlined />}
              href="https://github.com/Kurttyyy"
              target="_blank"
            />

            <Button
              shape="circle"
              icon={<MailOutlined />}
              href="mailto:kurtsam04@gmail.com"
            />
          </Flex>
        </Col>

        <Col xs={24} lg={10}>
          <Flex justify="center">
            <div className="profile-wrapper">
              <img
                src="/profile.jpg"
                alt="Kurt Ivan O. Samillano"
                className="profile-image"
              />
            </div>
          </Flex>
        </Col>
      </Row>
    </section>
  );
}

export default HeroSection;