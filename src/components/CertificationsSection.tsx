import { CheckCircleOutlined } from "@ant-design/icons";
import { Card, Col, Grid, Image, Row, Tag, Typography } from "antd";

import certificate from "../assets/certificate.png";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

function CertificationsSection() {
  const screens = useBreakpoint();

  return (
    <section
      id="certifications"
      className={screens.md ? "section" : "section mobile"}
    >
      <div className="section-heading">
        <Text className="section-label">CERTIFICATIONS</Text>

        <Title>My Certifications</Title>

        <Paragraph type="secondary">
          Professional certificates and completed training programs.
        </Paragraph>
      </div>

      <Row justify="center">
        <Col xs={24} lg={18}>
          <Card className="project-card">
            <Image
              src={certificate}
              alt="Cisco Networking Basics Certificate"
              width="100%"
              preview
            />

            <Title level={4} style={{ marginTop: 20 }}>
              Cisco Networking Academy
            </Title>

            <Paragraph>
              <Tag color="blue">Networking Basics</Tag>

              <Tag color="green" icon={<CheckCircleOutlined />}>
                Completed
              </Tag>
            </Paragraph>

            <Paragraph>
              Successfully completed the <strong>Networking Basics</strong>{" "}
              course from Cisco Networking Academy, demonstrating knowledge of
              networking concepts, IPv4/IPv6 addressing, Ethernet
              communications, routing, wireless networking, and troubleshooting.
            </Paragraph>

            <Text type="secondary">
              Issued: March 18, 2026
            </Text>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default CertificationsSection;