import {
  BookOutlined,
  CalendarOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Card, Col, Grid, Row, Space, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

function EducationSection() {
  const screens = useBreakpoint();

  return (
    <section
      id="education"
      className={
        screens.md
          ? "section education-section"
          : "section education-section mobile"
      }
    >
      <div className="section-heading">
        <Text className="section-label">EDUCATION</Text>

        <Title>My Education</Title>

        <Paragraph type="secondary">
          My academic background and current studies.
        </Paragraph>
      </div>

      <Row justify="center">
        <Col xs={24} lg={18}>
          <Card className="dark-card">
            <Space
              direction="vertical"
              size="large"
              style={{ width: "100%" }}
            >
              <Space>
                <BookOutlined className="contact-icon" />

                <div>
                  <Text strong>Degree</Text>
                  <br />
                  <Text>
                    Bachelor of Science in Information Technology
                  </Text>
                </div>
              </Space>

              <Space>
                <ReadOutlined className="contact-icon" />

                <div>
                  <Text strong>School</Text>
                  <br />
                  <Text>Notre Dame of Kidapawan College</Text>
                </div>
              </Space>

              <Space>
                <CalendarOutlined className="contact-icon" />

                <div>
                  <Text strong>Academic Year</Text>
                  <br />
                  <Text>2024 – Present</Text>
                </div>
              </Space>

              <div>
                <Title level={5}>Relevant Coursework</Title>

                <Paragraph className="about-text">
                  • Web Systems & Technologies
                  <br />
                  • Object-Oriented Programming
                  <br />
                  • Database Management Systems
                  <br />
                  • Computer Networks
                  <br />
                  • Data Structures and Algorithms
                </Paragraph>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default EducationSection;