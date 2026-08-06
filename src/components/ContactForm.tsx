import { SendOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  message,
} from "antd";
import { useState } from "react";

const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const [form] = Form.useForm<ContactFormValues>();
  const [loading, setLoading] = useState(false);

  const submitForm = async (
    values: ContactFormValues
  ): Promise<void> => {
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      message.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="dark-card">
      <Form<ContactFormValues>
        form={form}
        layout="vertical"
        onFinish={submitForm}
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name.",
                },
              ]}
            >
              <Input size="large" placeholder="Your name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email.",
                },
                {
                  type: "email",
                  message: "Enter a valid email.",
                },
              ]}
            >
              <Input size="large" placeholder="Your email" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Subject"
          name="subject"
          rules={[
            {
              required: true,
              message: "Please enter a subject.",
            },
          ]}
        >
          <Input size="large" placeholder="Subject" />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: "Please enter your message.",
            },
          ]}
        >
          <TextArea
            rows={6}
            placeholder="Write your message..."
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          icon={<SendOutlined />}
          size="large"
          block
          loading={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </Form>
    </Card>
  );
}

export default ContactForm;