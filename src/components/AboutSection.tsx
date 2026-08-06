import {
  BookOutlined,
  CodeOutlined,
  LaptopOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Descriptions,
  Grid,
  Progress,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

interface Skill {
  name: string;
  percent: number;
}

const skills: Skill[] = [
  { name: "HTML and CSS", percent: 90 },
  { name: "TypeScript", percent: 82 },
  { name: "React", percent: 80 },
  { name: "Ant Design", percent: 85 },
];

function AboutSection() {
  const screens = useBreakpoint();

  return (
    <section
      id="about"
      className={screens.md ? "section about-section" : "section mobile"}
    >
      <div className="section-heading">
        <Text className="section-label">GET TO KNOW ME</Text>
        <Title>About Me</Title>

        <Paragraph type="secondary">
          My experience, education and technical skills.
        </Paragraph>
      </div>

      <Row gutter={[30, 30]}>
        <Col xs={24} lg={12}>
          <Card className="dark-card">
            <Title level={2}>
              Designing digital experiences that make an impact.
            </Title>

            <Paragraph className="about-text">
              I am an Information Technology student who enjoys designing and
              developing clean and responsive websites. I focus on creating
              useful and visually attractive user interfaces.
            </Paragraph>

            <Descriptions bordered column={1} size="middle">
              <Descriptions.Item label="Name">
                Kurt Ivan Samillano
              </Descriptions.Item>

              <Descriptions.Item label="Course">
                Information Technology
              </Descriptions.Item>

              <Descriptions.Item label="Location">
                Kidapawan City, Philippines
              </Descriptions.Item>

              <Descriptions.Item label="Email">
                kisamillano@ndkc.edu.ph
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card className="dark-card">
            <Title level={3}>Technical Skills</Title>

            <Space direction="vertical" size="large" className="full-width">
              {skills.map((skill: Skill) => (
                <div key={skill.name}>
                  <div className="skill-title">
                    <Text>{skill.name}</Text>
                    <Text className="yellow-text">{skill.percent}%</Text>
                  </div>

                  <Progress
                    percent={skill.percent}
                    showInfo={false}
                    strokeColor="#fdbb22"
                    trailColor="#303b47"
                  />
                </div>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="stats-row">
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card">
            <CodeOutlined />
            <Title level={3}>10+</Title>
            <Text type="secondary">Projects Completed</Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card">
            <LaptopOutlined />
            <Title level={3}>Web</Title>
            <Text type="secondary">Development Focus</Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card">
            <BookOutlined />
            <Title level={3}>IT</Title>
            <Text type="secondary">College Student</Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card">
            <TrophyOutlined />
            <Title level={3}>100%</Title>
            <Text type="secondary">Creative Effort</Text>
          </Card>
        </Col>
      </Row>

      <Space wrap className="skill-tags">
        <Tag color="gold">React</Tag>
        <Tag color="gold">TypeScript</Tag>
        <Tag color="gold">Ant Design</Tag>
        <Tag color="gold">HTML5</Tag>
        <Tag color="gold">CSS3</Tag>
        <Tag color="gold">GitHub</Tag>
      </Space>
    </section>
  );
}

export default AboutSection;