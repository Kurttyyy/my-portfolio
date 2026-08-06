import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Layout, Space, Typography } from "antd";

const { Footer } = Layout;
const { Paragraph, Text, Title } = Typography;

function FooterSection() {
  return (
    <Footer className="footer">
      <Title level={4}>Thanks for visiting my portfolio!</Title>

      <Paragraph type="secondary">
        Built with React, TypeScript and Ant Design.
      </Paragraph>

      <Space size="middle" className="footer-links">
        <Button
          shape="circle"
          icon={<GithubOutlined />}
          href="https://github.com/Kurttyyy"
          target="_blank"
          aria-label="GitHub"
        />

        <Button
          shape="circle"
          icon={<FacebookOutlined />}
          href="https://facebook.com/"
          target="_blank"
          aria-label="Facebook"
        />

        <Button
          shape="circle"
          icon={<LinkedinOutlined />}
          href="https://linkedin.com/"
          target="_blank"
          aria-label="LinkedIn"
        />

        <Button
          shape="circle"
          icon={<MailOutlined />}
          href="mailto:kurtsam04@gmail.com"
          aria-label="Email"
        />
      </Space>

      <br />

      <Text type="secondary">
        © 2026 Kurt Ivan O. Samillano. All rights reserved.
      </Text>
    </Footer>
  );
}

export default FooterSection;