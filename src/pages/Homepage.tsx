import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import ProjectShowcaseCard from '@/components/ProjectShowcaseCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    title: "E-commerce Redesign",
    description: "Revamped a client's online store, boosting conversion rates by 25% through intuitive navigation and a modern UI.",
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    projectUrl: "/case-study", // Simplified, ideally /case-study/ecommerce-redesign
    imageAlt: "E-commerce platform showcase",
    tags: ["UX Design", "UI Redesign", "E-commerce"],
  },
  {
    title: "Mobile App for Mindfulness",
    description: "Designed a calming and engaging mobile application to help users practice mindfulness and meditation daily.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    projectUrl: "/case-study", // Simplified, ideally /case-study/mindfulness-app
    imageAlt: "Mindfulness mobile app interface",
    tags: ["Mobile App", "Wellness", "UI/UX"],
  },
    {
    title: "SaaS Dashboard Optimization",
    description: "Reimagined a complex SaaS dashboard to enhance data visualization and streamline user workflows for enterprise clients.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    projectUrl: "/case-study", // Simplified, ideally /case-study/saas-dashboard
    imageAlt: "SaaS dashboard interface",
    tags: ["SaaS", "Dashboard", "Data Visualization"],
  },
];

const Homepage: React.FC = () => {
  console.log('Homepage loaded');
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavigationMenu />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/30 dark:bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <Avatar className="w-24 h-24 mx-auto mb-6 ring-2 ring-primary ring-offset-2 ring-offset-background">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Designer's Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Label htmlFor="designer-name" className="sr-only">Designer Name</Label>
            <h1 id="designer-name" className="text-4xl md:text-5xl font-bold mb-3">Jane Doe</h1>
            <Label htmlFor="designer-tagline" className="sr-only">Designer Tagline</Label>
            <Textarea
              id="designer-tagline"
              value="Creative UX/UI Designer | Crafting Intuitive Digital Experiences that Delight Users and Drive Business Growth."
              readOnly
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto bg-transparent border-none text-center resize-none shadow-none focus-visible:ring-0"
              rows={2}
            />
            <div className="mt-8 space-x-4">
              <Button asChild size="lg">
                <Link to="/projects">View My Work <ArrowRight className="ml-2 h-5 w-5"/></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectShowcaseCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                  imageAlt={project.imageAlt}
                  tags={project.tags}
                />
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild variant="secondary" size="lg">
                    <Link to="/projects">Explore All Projects</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;