import {
  ApiOutlined,
  CodeOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  GithubOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { Card, Col, Progress, Row, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

interface Skill {
  name: string;
  percent: number;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "HTML & CSS",
    percent: 90,
    icon: <FileTextOutlined />,
  },
  {
    name: "TypeScript",
    percent: 82,
    icon: <CodeOutlined />,
  },
  {
    name: "React",
    percent: 80,
    icon: <ApiOutlined />,
  },
  {
    name: "Ant Design",
    percent: 85,
    icon: <LaptopOutlined />,
  },
  {
    name: "MySQL",
    percent: 75,
    icon: <DatabaseOutlined />,
  },
  {
    name: "GitHub",
    percent: 80,
    icon: <GithubOutlined />,
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="section about-section">
      <div className="section-heading">
        <Text className="section-label">MY SKILLS</Text>

        <Title>Technical Skills</Title>

        <Paragraph type="secondary">
          Technologies and tools I use in my projects.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {skills.map((skill) => (
          <Col xs={24} sm={12} lg={8} key={skill.name}>
            <Card className="dark-card skill-card">
              <div className="skill-icon">{skill.icon}</div>

              <div className="skill-heading">
                <Title level={4}>{skill.name}</Title>

                <Text className="yellow-text">
                  {skill.percent}%
                </Text>
              </div>

              <Progress
                percent={skill.percent}
                showInfo={false}
                strokeColor="#fdbb22"
                trailColor="#303b47"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SkillsSection;