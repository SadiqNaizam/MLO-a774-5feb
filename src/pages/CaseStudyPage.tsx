import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import CaseStudySectionBlock from '@/components/CaseStudySectionBlock';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const CaseStudyPage: React.FC = () => {
  console.log('CaseStudyPage loaded');
  // Placeholder data for a single case study
  const projectTitle = "E-commerce Platform Redesign";
  const projectOverview = "A comprehensive redesign of an outdated e-commerce platform to improve user experience, modernize the UI, and increase conversion rates.";
  const liveSiteUrl = "https://example.com"; // Placeholder

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavigationMenu />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
            <header className="mb-10">
                 <Breadcrumb className="mb-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink asChild><Link to="/projects">Projects</Link></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>{projectTitle}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Label htmlFor="case-study-title" className="sr-only">Case Study Title</Label>
                <h1 id="case-study-title" className="text-4xl md:text-5xl font-bold mb-3 text-center">{projectTitle}</h1>
                <Label htmlFor="case-study-overview" className="sr-only">Case Study Overview</Label>
                 <Textarea
                    id="case-study-overview"
                    value={projectOverview}
                    readOnly
                    className="text-lg text-muted-foreground max-w-3xl mx-auto bg-transparent border-none text-center resize-none shadow-none focus-visible:ring-0"
                    rows={3}
                />
                 {liveSiteUrl && (
                    <div className="text-center mt-4">
                        <Button variant="outline" asChild>
                            <a href={liveSiteUrl} target="_blank" rel="noopener noreferrer">
                                Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                )}
            </header>

            <CaseStudySectionBlock title="The Challenge" id="challenge">
                <p>The existing e-commerce platform suffered from an outdated design, poor mobile responsiveness, and a convoluted checkout process. This led to high bounce rates and low customer satisfaction, directly impacting sales.</p>
                <p className="mt-4">Key pain points identified through user research included difficulty finding products, a confusing navigation structure, and lack of trust signals during checkout.</p>
            </CaseStudySectionBlock>

            <CaseStudySectionBlock title="My Role & Approach" id="role">
                <p>As the lead UX/UI designer, I was responsible for the end-to-end redesign process. This included user research, information architecture, wireframing, prototyping, UI design, and usability testing.</p>
                <p className="mt-4">My approach was user-centered, starting with stakeholder interviews and user surveys to deeply understand needs and pain points. I then moved to creating user personas and journey maps to guide the design decisions.</p>
                 <h3 className="text-xl font-semibold mt-6 mb-2">Key Responsibilities:</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Conducting user research and competitive analysis.</li>
                    <li>Defining information architecture and sitemap.</li>
                    <li>Creating low-fidelity wireframes and interactive prototypes.</li>
                    <li>Developing a new visual identity and UI style guide.</li>
                    <li>Designing responsive interfaces for desktop, tablet, and mobile.</li>
                    <li>Collaborating with developers for implementation.</li>
                    <li>Conducting usability testing sessions and iterating on designs.</li>
                </ul>
            </CaseStudySectionBlock>

            <CaseStudySectionBlock title="Design Process & Solution" id="solution" className="bg-muted/30 dark:bg-muted/50 rounded-lg">
                <p>The solution involved a complete visual and structural overhaul. We focused on simplifying navigation, enhancing product discovery through better search and filtering, and streamlining the checkout process into fewer steps.</p>
                <div className="my-8">
                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden shadow-md">
                    <img
                        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        alt="Wireframes or mockups of the redesigned e-commerce platform"
                        className="object-cover w-full h-full"
                    />
                    </AspectRatio>
                    <p className="text-sm text-center text-muted-foreground mt-2">Early wireframes exploring new layout structures.</p>
                </div>
                <p>High-fidelity mockups incorporated a clean, modern aesthetic with clear calls-to-action and trust-building elements like security badges and customer reviews. We introduced features like a persistent cart and guest checkout to reduce friction.</p>
                 <div className="my-8">
                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden shadow-md">
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        alt="Final UI design for product page"
                        className="object-cover w-full h-full"
                    />
                    </AspectRatio>
                    <p className="text-sm text-center text-muted-foreground mt-2">Final UI for the product detail page showcasing clear hierarchy.</p>
                </div>
            </CaseStudySectionBlock>

            <CaseStudySectionBlock title="Results & Impact" id="results">
                <p>Post-launch, the redesigned platform achieved significant improvements:</p>
                <ul className="list-disc list-inside space-y-2 my-4">
                    <li><strong className="font-semibold">25% increase in conversion rates</strong> within the first three months.</li>
                    <li><strong className="font-semibold">40% reduction in cart abandonment</strong> rate.</li>
                    <li><strong className="font-semibold">Improved mobile usability score</strong> from 55 to 85 (measured by Lighthouse).</li>
                    <li>Positive feedback from users on the new design and ease of use.</li>
                </ul>
                <p>This project demonstrated the value of a user-centric design approach in achieving tangible business outcomes.</p>
            </CaseStudySectionBlock>
            
            <div className="text-center mt-12">
                <Button asChild variant="outline">
                    <Link to="/projects"><ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects</Link>
                </Button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;