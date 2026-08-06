import {
  EnvironmentOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Card, Space, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

function ContactInfo() {
  return (
    <Card className="dark-card">
      <Title level={2}>Contact Information</Title>

      <Paragraph className="about-text">
        You can contact me through the following:
      </Paragraph>

      <Space direction="vertical" size="large" className="contact-list">
        <Space>
          <MailOutlined className="contact-icon" />
          <div>
            <Text type="secondary">Email</Text>
            <br />
            <Text>kisamillano@ndkc.edu.ph</Text>
          </div>
        </Space>

        <Space>
          <PhoneOutlined className="contact-icon" />
          <div>
            <Text type="secondary">Phone</Text>
            <br />
            <Text>+63 9540630417</Text>
          </div>
        </Space>

        <Space>
          <EnvironmentOutlined className="contact-icon" />
          <div>
            <Text type="secondary">Location</Text>
            <br />
            <Text>Kidapawan City, Philippines</Text>
          </div>
        </Space>

        <Space>
          <GithubOutlined className="contact-icon" />
          <div>
            <Text type="secondary">GitHub</Text>
            <br />
            <Text>github.com/Kurttyyy</Text>
          </div>
        </Space>
      </Space>
    </Card>
  );
}

export default ContactInfo;