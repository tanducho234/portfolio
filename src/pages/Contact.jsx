import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ScrollSection from "../components/ScrollSection";

const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  text-align: center;
`;

const ContactInfo = styled(motion.div)`
  padding: ${(props) => props.theme.spacing.xl};
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;

  h3 {
    color: ${(props) => props.theme.colors.text};
    margin-bottom: ${(props) => props.theme.spacing.xl};
    text-align: center;
    font-size: ${(props) => props.theme.typography.h3.fontSize};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary}05;
  }
`;

const ContactText = styled.p`
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  flex: 1;
  margin: 0;
`;

const ContactLink = styled.a`
  color: ${(props) => props.theme.colors.textLight};
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.primary}30;
  background-color: ${(props) => props.theme.colors.primary}05;
  margin: 0;

  &::after {
    content: "↗";
    font-size: 1.2em;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primary}10;
    border-color: ${(props) => props.theme.colors.primary}50;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px ${(props) => props.theme.colors.primary}10;
  }

  &:hover::after {
    opacity: 1;
    transform: translate(2px, -2px);
  }
`;

const Contact = () => {
  return (
    <ScrollSection id="contact">
      <Title>Contact Me</Title>
      <ContactInfo>
        <ContactItem>
          <ContactText>📱 Phone</ContactText>
          <ContactLink href="tel:+84762703989" title="Click to call">
            +84 762703989
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactText>📧 Email</ContactText>
          <ContactLink
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tanducho234@gmail.com&su=Hello%20from%20Portfolio&body=Hi%20Tan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            title="Click to send email">
            tanducho234@gmail.com
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactText>💻 GitHub</ContactText>
          <ContactLink
            href="https://github.com/tanducho234"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit GitHub Profile">
            github.com/tanducho234
          </ContactLink>
        </ContactItem>
      </ContactInfo>
    </ScrollSection>
  );
};

export default Contact;
