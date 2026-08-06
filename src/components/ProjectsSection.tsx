import {
  EyeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Grid,
  Image,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;
const { useBreakpoint } = Grid;

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "Employee Leave Tracker",
    category: "React Application",
    image: "/project1.jpg",
    description:
      "A leave management dashboard for submitting and reviewing employee requests.",
    tags: ["React", "TypeScript", "Ant Design"],
    github: "https://github.com/Kurttyyy",
  },
  {
    title: "Student CRUD System",
    category: "Web Application",
    image: "/project2.jpg",
    description:
      "A student information system with add, update, delete and search features.",
    tags: ["React", "TypeScript", "CRUD"],
    github: "https://github.com/Kurttyyy",
  },
  {
    title: "Analytics Dashboard",
    category: "Dashboard UI",
    image: "/project3.jpg",
    description:
      "A responsive dashboard containing statistics, navigation and data panels.",
    tags: ["Ant Design", "Dashboard"],
    github: "https://github.com/Kurttyyy",
  },
];

function ProjectsSection() {
  const screens = useBreakpoint();

  return (
    <section
      id="projects"
      className={screens.md ? "section projects-section" : "section mobile"}
    >
      <div className="section-heading">
        <Text className="section-label">TABLE OF CONTENT</Text>
        <Title>Featured Projects</Title>

        <Paragraph type="secondary">
          Some of my recent design and development projects.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {projects.map((project: Project) => (
          <Col xs={24} md={12} xl={8} key={project.title}>
            <Card
              hoverable
              className="project-card"
              cover={
                <Image
                  preview
                  src={project.image}
                  height={230}
                  className="project-image"
                  fallback="https://placehold.co/700x450/1c2631/fdbb22?text=Project"
                />
              }
              actions={[
                <Button type="text" icon={<EyeOutlined />} key="preview">
                  Preview
                </Button>,

                <Button
                  type="text"
                  icon={<GithubOutlined />}
                  href={project.github}
                  target="_blank"
                  key="github"
                >
                  Code
                </Button>,
              ]}
            >
              <Text className="yellow-text">{project.category}</Text>

              <Meta
                title={
                  <Title level={3} className="project-title">
                    {project.title}
                  </Title>
                }
                description={
                  <Paragraph type="secondary">
                    {project.description}
                  </Paragraph>
                }
              />

              <Space wrap>
                {project.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default ProjectsSection;