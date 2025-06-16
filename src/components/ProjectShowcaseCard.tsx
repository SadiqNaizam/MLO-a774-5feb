import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from 'lucide-react';

interface ProjectShowcaseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string; // URL to the detailed case study page
  imageAlt?: string;
  tags?: string[];
}

const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  imageAlt = 'Project image',
  tags,
}) => {
  console.log("Rendering ProjectShowcaseCard for:", title);

  return (
    <Card className="w-full overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
      <CardHeader className="p-0">
        <Link to={projectUrl} aria-label={`View project: ${title}`}>
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || '/placeholder.svg'}
              alt={imageAlt}
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg'; // Fallback placeholder
                console.warn(`Failed to load image for ${title} at ${imageUrl}. Using placeholder.`);
              }}
              loading="lazy"
            />
          </AspectRatio>
        </Link>
      </CardHeader>
      <CardContent className="p-4 md:p-6 flex-grow">
        <Link to={projectUrl} className="hover:underline">
            <CardTitle className="text-xl lg:text-2xl font-semibold mb-2">{title}</CardTitle>
        </Link>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">{description}</CardDescription>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 md:p-6 pt-0">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link to={projectUrl}>
            View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectShowcaseCard;