import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DownloadCloud, Linkedin, Github } from 'lucide-react';

const skills = ["UX Research", "UI Design", "Prototyping", "User Testing", "Interaction Design", "Figma", "Adobe XD", "HTML/CSS", "Agile Methodologies", "Design Systems"];

const AboutPage: React.FC = () => {
  console.log('AboutPage loaded');
  const bioText = `Hello! I'm Jane Doe, a passionate and results-driven UX/UI designer with 5+ years of experience in creating intuitive and engaging digital experiences. I believe that great design is not just about aesthetics, but about solving real problems for users and achieving business goals.

My process is deeply rooted in empathy and a user-centered approach. I thrive on understanding user needs through research, translating insights into thoughtful wireframes and interactive prototypes, and crafting visually appealing interfaces that are both functional and delightful.

I've had the privilege of working on diverse projects ranging from e-commerce platforms and SaaS applications to mobile apps and corporate websites. I'm proficient in a variety of design tools and methodologies, and I'm always eager to learn and adapt to new challenges.

When I'm not designing, you can find me exploring new hiking trails, experimenting with new recipes, or sketching in my notebook. I'm excited by the power of design to make a positive impact and am always looking for opportunities to collaborate on meaningful projects.
  `;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavigationMenu />
      <main className="flex-grow container mx-auto px-4 py-12">
        <header className="text-center mb-12 md:mb-16">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 ring-4 ring-primary ring-offset-4 ring-offset-background">
                <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Jane Doe - Designer" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Label htmlFor="about-title" className="sr-only">About Jane Doe</Label>
            <h1 id="about-title" className="text-4xl md:text-5xl font-bold mb-2">About Me</h1>
            <p className="text-xl text-muted-foreground">Designer, Innovator, Problem Solver</p>
        </header>

        <section className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">My Story</h2>
            <Textarea
                value={bioText}
                readOnly
                className="text-base md:text-lg leading-relaxed text-foreground bg-transparent border-none p-0 resize-none shadow-none focus-visible:ring-0 h-auto"
                rows={15} // Adjust based on content
            />
        </section>

        <section className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>
                ))}
            </div>
        </section>
        
        <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Let's Connect</h2>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
                <Button size="lg" asChild>
                    {/* Replace with actual resume link */}
                    <a href="/placeholder-resume.pdf" download="JaneDoe-Resume.pdf">
                        <DownloadCloud className="mr-2 h-5 w-5" /> Download Resume
                    </a>
                </Button>
                 <Button size="lg" variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/janedoe-example" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                    </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <a href="https://github.com/janedoe-example" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" /> GitHub
                    </a>
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;