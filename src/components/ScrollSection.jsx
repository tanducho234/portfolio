import styled from "@emotion/styled";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.background};
`;

const ScrollSection = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}>
      {children}
    </Section>
  );
};

export default ScrollSection;
