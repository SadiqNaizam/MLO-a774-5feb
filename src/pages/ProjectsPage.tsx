import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import ProjectShowcaseCard from '@/components/ProjectShowcaseCard';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const allProjects = [
  { title: "Corporate Website Overhaul", description: "Led the redesign of a major corporate website, focusing on improved user engagement and modern aesthetics.", imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", projectUrl: "/case-study", imageAlt: "Corporate website on a laptop", tags: ["Web Design", "Branding", "UX"] },
  { title: "Mobile Banking App UX", description: "Designed a user-friendly mobile banking application with a focus on security and ease of use.", imageUrl: "https://images.unsplash.com/photo-1580674285054-f31698995976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", projectUrl: "/case-study", imageAlt: "Mobile banking app interface", tags: ["Mobile App", "Fintech", "UX/UI"] },
  { title: "Healthcare Platform UI", description: "Developed the user interface for a comprehensive healthcare management platform for practitioners.", imageUrl: "https://images.unsplash.com/photo-1576091062795-5c82f0179138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", projectUrl: "/case-study", imageAlt: "Healthcare platform dashboard", tags: ["Healthcare", "UI Design", "SaaS"] },
  { title: "E-learning Portal", description: "Created an engaging e-learning portal with interactive modules and progress tracking features.", imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", projectUrl: "/case-study", imageAlt: "E-learning portal on a tablet", tags: ["EdTech", "Web App", "UX"] },
  { title: "Travel Booking Site", description: "Designed a seamless travel booking website with intuitive search and filtering capabilities.", imageUrl: "https://images.unsplash.com/photo-1505819346385-b2410f1106a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", projectUrl: "/case-study", imageAlt: "Travel booking website interface", tags: ["Travel", "Web Design", "E-commerce"] },
  { title: "Data Analytics Dashboard", description: "Crafted an interactive dashboard for complex data analytics and reporting.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", projectUrl: "/case-study", imageAlt: "Data analytics dashboard charts", tags: ["Data Viz", "Dashboard", "SaaS"] },
];


const ProjectsPage: React.FC = () => {
  console.log('ProjectsPage loaded');
  // Basic pagination logic (can be expanded with state for current page)
  const currentPage = 1;
  const projectsPerPage = 6; // Or dynamically adjust
  const totalProjects = allProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  const currentProjects = allProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavigationMenu />
      <main className="flex-grow container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <Label htmlFor="projects-title" className="sr-only">Projects Title</Label>
          <h1 id="projects-title" className="text-4xl md:text-5xl font-bold mb-3">My Portfolio</h1>
          <Label htmlFor="projects-intro" className="sr-only">Projects Introduction</Label>
          <Textarea
            id="projects-intro"
            value="A curated collection of my work, showcasing my passion for creating meaningful and impactful digital solutions. Dive into detailed case studies to understand my process and the results I've delivered."
            readOnly
            className="text-lg text-muted-foreground max-w-2xl mx-auto bg-transparent border-none text-center resize-none shadow-none focus-visible:ring-0"
            rows={3}
          />
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project) => (
            <ProjectShowcaseCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl} // Each card links to its specific case study (though all point to /case-study for now)
              imageAlt={project.imageAlt}
              tags={project.tags}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink href="#" isActive={currentPage === i + 1}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {totalPages > 5 && <PaginationEllipsis />} 
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;