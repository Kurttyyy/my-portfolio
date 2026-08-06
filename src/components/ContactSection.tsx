import { Col, Grid, Row, Typography } from "antd";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

function ContactSection() {
  const screens = useBreakpoint();

  return (
    <section
      id="contact"
      className={screens.md ? "section contact-section" : "section mobile"}
    >
      <div className="section-heading">
        <Text className="section-label">CONTACT ME</Text>

        <Title>Let's Work Together</Title>

        <Paragraph type="secondary">
          Send me a message about your project or collaboration.
        </Paragraph>
      </div>

      <Row gutter={[30, 30]}>
        <Col xs={24} lg={10}>
          <ContactInfo />
        </Col>

        <Col xs={24} lg={14}>
          <ContactForm />
        </Col>
      </Row>
    </section>
  );
}

export default ContactSection;