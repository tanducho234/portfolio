import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ScrollSection from "../components/ScrollSection";

const HomeContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.lg};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary}10 0%,
      ${(props) => props.theme.colors.secondary}10 100%
    );
    z-index: -1;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.lg};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  flex-direction: row-reverse;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: left;
`;

const AvatarWrapper = styled.div`
  flex: 1;
  max-width: 350px;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 250px;
  }
`;

const AvatarContainer = styled(motion.div)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 4px solid ${(props) => props.theme.colors.primary}20;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary}30 0%,
      ${(props) => props.theme.colors.secondary}30 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.typography.h1.fontSize};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  line-height: 1.4;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const NameHighlight = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary} 0%,
      ${(props) => props.theme.colors.secondary} 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => props.theme.colors.primary}30;

    &::before {
      opacity: 1;
    }
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const Home = () => {
  return (
    <ScrollSection id="home">
      <HomeContainer>
        <ContentWrapper>
          <TextContent>
            <Title>
              Hi, <br />
              I'm <NameHighlight>Ho Duc Tan</NameHighlight>
              <br />
              Full Stack Software Developer
            </Title>
            <CTAButton
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <span>Contact</span>
            </CTAButton>
          </TextContent>
          <AvatarWrapper>
            <AvatarContainer
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <AvatarImage
                src="/src/assets/images/avatar.jpg"
                alt="Ho Duc Tan"
              />
            </AvatarContainer>
          </AvatarWrapper>
        </ContentWrapper>
      </HomeContainer>
    </ScrollSection>
  );
};

export default Home;
