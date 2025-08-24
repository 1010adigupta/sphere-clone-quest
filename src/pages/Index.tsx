import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex flex-col justify-center items-center px-6 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-text-primary font-heading">
            Engineering Genius
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-text-secondary max-w-3xl mx-auto">
            <p>
              Anysphere is an applied research lab working on automating coding. Our approach is to build 
              the engineer of the future: a human-AI programmer that's an order of magnitude more 
              effective than any one programmer.
            </p>
            
            <p>
              This hybrid engineer will have effortless control over their codebase and no low-entropy 
              keystrokes. They will iterate at the speed of their judgment, even in the most complex 
              systems. Using a combination of AI and human ingenuity, they will out-smart and out-engineer 
              the best pure-AI system.
            </p>
            
            <p>
              We are a group of researchers and engineers. We build software and models to invent at the 
              edge of what's useful and what's possible. Our{" "}
              <a 
                href="https://cursor.com/" 
                className="text-cosmic-orange hover:text-cosmic-blue transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                work
              </a>{" "}
              has already improved the lives of millions of programmers.
            </p>
            
            <p>If this excites you, we'd love to hear from you.</p>
            
            <p className="text-base">
              — <a 
                href="https://twitter.com/amanrsanger" 
                className="text-cosmic-orange hover:text-cosmic-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aman
              </a>, <a 
                href="https://www.sualehasif.me/" 
                className="text-cosmic-orange hover:text-cosmic-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sualeh
              </a>, <a 
                href="https://mntruell.com/" 
                className="text-cosmic-orange hover:text-cosmic-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Michael
              </a>, <a 
                href="https://arvid.xyz/" 
                className="text-cosmic-orange hover:text-cosmic-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arvid
              </a>, and the entire Anysphere team
            </p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 px-6 bg-gradient-cosmic">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-text-primary text-center font-heading">
            Careers
          </h2>
          
          <div className="space-y-12">
            {/* Engineering Section */}
            <div>
              <h3 className="text-2xl font-medium mb-8 text-text-primary font-heading">
                Engineering
              </h3>
              <div className="space-y-4">
                <JobListing 
                  title="Infrastructure Engineer" 
                  location="San Francisco / New York"
                  href="https://anysphere.inc/careers/infrastructure_engineer"
                />
                <JobListing 
                  title="Research Engineer" 
                  location="San Francisco / New York"
                  href="https://anysphere.inc/careers/research_engineer"
                />
                <JobListing 
                  title="Product Engineer" 
                  location="San Francisco / New York"
                  href="https://anysphere.inc/careers/product_engineer"
                />
                <JobListing 
                  title="Enterprise Product Engineer" 
                  location="San Francisco / New York"
                  href="https://anysphere.inc/careers/enterprise_product_engineer"
                />
                <JobListing 
                  title="Enterprise Engineering Manager" 
                  location="San Francisco / New York"
                  href="https://anysphere.inc/careers/enterprise_engineering_manager"
                />
              </div>
            </div>

            {/* Go-to-Market Section */}
            <div>
              <h3 className="text-2xl font-medium mb-8 text-text-primary font-heading">
                Go-to-Market
              </h3>
              <div className="space-y-4">
                <JobListing 
                  title="Account Executive" 
                  location="San Francisco / New York"
                  href="https://anysphere.inc/careers/enterprise_ae"
                />
                <JobListing 
                  title="Technical Account Manager" 
                  location="San Francisco / New York"
                  href="https://anysphere.inc/careers/technical_account_manager"
                />
                <JobListing 
                  title="Field Engineer" 
                  location="San Francisco / New York"
                  href="https://anysphere.inc/careers/field_engineer"
                />
                <JobListing 
                  title="Technical Support Engineer" 
                  location="San Francisco / New York"
                  href="https://anysphere.inc/careers/technical_support_engineer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface JobListingProps {
  title: string;
  location: string;
  href: string;
}

const JobListing = ({ title, location, href }: JobListingProps) => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-border/30 hover:border-cosmic-orange/50 transition-colors">
      <a 
        href={href}
        className="text-cosmic-orange hover:text-cosmic-blue transition-colors text-lg font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <span className="text-text-secondary text-base">
        {location}
      </span>
    </div>
  );
};

export default Index;