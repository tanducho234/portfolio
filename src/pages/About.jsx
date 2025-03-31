import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ScrollSection from "../components/ScrollSection";

const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: ${(props) => props.theme.spacing.md};
  max-width: 800px;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
`;

const SkillCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkillTitle = styled.h3`
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const About = () => {
  const skills = {
    frontend: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
    backend: ["NodeJS", "Express.js", "RESTful APIs"],
    databases: ["SQL", "MongoDB", "Firebase"],
    others: ["Git", "Agile Methodologies", "WebSockets"],
  };

  return (
    <ScrollSection id="about">
      <Title>About Me</Title>
      <Text>
        I am a motivated and detail-oriented Web Developer with a strong
        foundation in web technologies. Currently pursuing my Bachelor of
        Science in Computing at Greenwich University Vietnam (2022-2025), I am
        passionate about building efficient, user-friendly applications and
        continuously seeking opportunities to enhance my skills and gain
        practical experience.
      </Text>
      <Title>Technical Skills</Title>
      <SkillsGrid>
        <SkillCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <SkillTitle>Frontend</SkillTitle>
          <SkillList>
            {skills.frontend.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCard>

        <SkillCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <SkillTitle>Backend</SkillTitle>
          <SkillList>
            {skills.backend.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCard>

        <SkillCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <SkillTitle>Databases</SkillTitle>
          <SkillList>
            {skills.databases.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCard>

        <SkillCard whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <SkillTitle>Others</SkillTitle>
          <SkillList>
            {skills.others.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCard>
      </SkillsGrid>
    </ScrollSection>
  );
};

export default About;
