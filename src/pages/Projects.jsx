import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ScrollSection from "../components/ScrollSection";
import { useState, useEffect } from "react";

const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid ${(props) => props.theme.colors.primary}30;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.colors.primary};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.background};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

const ProjectContent = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const TechTag = styled.span`
  background-color: ${(props) => props.theme.colors.primary}20;
  color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: 4px;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  margin-top: auto;
  padding-top: ${(props) => props.theme.spacing.md};
  border-top: 1px solid ${(props) => props.theme.colors.primary}20;
`;

const ProjectLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const generateProjectImages = (projectName) => {
    const images = [];
    let i = 1;

    // Keep checking for images until we find one that doesn't exist
    while (true) {
      try {
        const img = new Image();
        const imagePath = `/src/assets/images/${projectName}-${i}.png`;
        img.src = imagePath;

        // If image loads successfully, add it to array
        images.push(imagePath);
        i++;

        // Set a reasonable limit to prevent infinite loop
        if (i > 10) break;
      } catch (error) {
        break;
      }
    }

    // Return at least one image, or a placeholder if none found
    return images.length > 0 ? images : ["/src/assets/images/placeholder.png"];
  };

  const projects = [
    {
      title: "AI Chat Box",
      description:
        "Built an AI chat system with user authentication and chat history storage, utilizing Google Gemini API. Implemented Node.js (Express.js) backend with MongoDB for data storage and JWT for secure authentication.",
      images: generateProjectImages("ai-chat-box"),
      tech: ["Node.js", "Express.js", "MongoDB", "Google Gemini API", "JWT"],
      demo: "https://ai-chat-box-demo.com",
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed a feature-rich e-commerce platform with admin and user roles. Integrated VNPay and Stripe for secure online payments. Used MongoDB for database storage, Cloudinary for image management, and implemented JWT authentication.",
      images: generateProjectImages("e-commerce"),
      tech: [
        "React",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "VNPay",
        "Stripe",
        "Cloudinary",
        "JWT",
      ],
      demo: "https://ecommerce-demo.com",
    },
    {
      title: "Book Rental Mobile App",
      description:
        "Built a React Native app for users to rent books from others, with Node.js (Express.js) backend and MongoDB for data storage. Integrated VNPay for wallet top-ups and implemented real-time chat using Firebase Realtime Database.",
      images: generateProjectImages("book-rental"),
      tech: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "VNPay",
        "JWT",
      ],
      github:
        "https://github.com/tanducho234/FINAL-PROJECT/blob/main/README.md",
    },
  ];

  const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState([]);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      // Preload images and filter out any that fail to load
      Promise.all(
        images.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => resolve(src);
              img.onerror = () => resolve(null);
              img.src = src;
            })
        )
      ).then((results) => {
        const validImages = results.filter(Boolean);
        setLoadedImages(
          validImages.length > 0
            ? validImages
            : ["/src/assets/images/placeholder.png"]
        );
      });
    }, [images]);

    useEffect(() => {
      if (loadedImages.length <= 1 || isPaused) return; // Don't start interval if paused or only one image

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === loadedImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);

      return () => clearInterval(interval);
    }, [loadedImages, isPaused]);

    return (
      <ProjectImage
        style={{
          backgroundImage: `url(${
            loadedImages[currentImageIndex] || loadedImages[0]
          })`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
    );
  };

  return (
    <ScrollSection id="projects">
      <Title>My Recent Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} whileHover={{ y: -5 }}>
            <ImageCarousel images={project.images} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                {project.github && (
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                  </ProjectLink>
                )}
                {project.demo && (
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer">
                    Live Demo
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ScrollSection>
  );
};

export default Projects;
