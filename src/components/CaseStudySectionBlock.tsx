import React from 'react';

interface CaseStudySectionBlockProps {
  title?: string; // Optional title for the section
  children: React.ReactNode;
  className?: string; // Allow for additional custom styling
  id?: string; // For in-page navigation
}

const CaseStudySectionBlock: React.FC<CaseStudySectionBlockProps> = ({
  title,
  children,
  className = '',
  id,
}) => {
  console.log("Rendering CaseStudySectionBlock with title:", title);

  return (
    <section id={id} className={`py-8 md:py-12 ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center sm:text-left">
            {title}
          </h2>
        )}
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert">
          {/* 
            The 'prose' classes from @tailwindcss/typography provide default styling 
            for rich text content like paragraphs, headings, lists, etc.
            Ensure @tailwindcss/typography plugin is installed and configured.
            If not, you might need to style child elements manually.
            Example: <p className="mb-4 text-muted-foreground">...</p>
          */}
          {children}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySectionBlock;