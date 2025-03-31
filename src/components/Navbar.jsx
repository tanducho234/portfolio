import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Nav = styled.nav`
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
`;

const NavLink = styled(motion.a)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: ${(props) => props.theme.spacing.sm} 0;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: ${(props) => (props.isActive ? "100%" : "0")};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${(props) => (props.isActive ? "600" : "500")};
`;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offset = element.offsetTop;
          if (
            scrollPosition >= offset &&
            scrollPosition < offset + element.offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo onClick={() => scrollToSection("home")}>Portfolio</Logo>
        <NavLinks>
          <NavLink
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            isActive={activeSection === "home"}>
            Home
          </NavLink>
          <NavLink
            onClick={() => scrollToSection("about")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            isActive={activeSection === "about"}>
            About
          </NavLink>
          <NavLink
            onClick={() => scrollToSection("projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            isActive={activeSection === "projects"}>
            Projects
          </NavLink>
          <NavLink
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            isActive={activeSection === "contact"}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
