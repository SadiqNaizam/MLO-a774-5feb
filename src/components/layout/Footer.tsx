import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react'; // Example social icons

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  // Replace with actual links
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:designer@example.com' },
  ];

  const footerNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    // Add more links like Privacy Policy, Terms of Service if needed
  ];

  return (
    <footer className="bg-muted/50 border-t border-border mt-12 py-8 text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand/About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Designer Portfolio</h3>
            <p className="text-sm">Crafting user-centered digital experiences.</p> {/* Placeholder tagline */}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Navigate</h3>
            <ul className="space-y-2">
              {footerNavLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media/Contact */}
          <div>
             <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Connect</h3>
             <div className="flex space-x-4">
               {socialLinks.map(social => (
                 <a
                   key={social.name}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-primary transition-colors"
                   aria-label={social.name}
                 >
                   <social.icon className="h-5 w-5" />
                 </a>
               ))}
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs">&copy; {currentYear} Your Name. All rights reserved.</p> {/* Replace Your Name */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;