import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Globe, Layers, Mail, Play, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-tighter">
            ABSVRD<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
            <a href="#focus" className="hover:text-primary transition-colors">FOCUS</a>
            <a href="#strategy" className="hover:text-primary transition-colors">STRATEGY</a>
            <a href="#vision" className="hover:text-primary transition-colors">VISION</a>
            <Button variant="default" className="rounded-none font-display font-bold tracking-wide bg-primary hover:bg-primary/90 text-white">
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10"></div>
          <img 
            src="/images/hero-bg.jpg" 
            alt="Digital Growth" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              THE NEXT WAVE <br/>
              OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">DIGITAL OWNERSHIP</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
              We acquire underutilized digital assets and transform them into thriving, multi-revenue platforms that reach millions globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Button size="lg" className="rounded-none h-14 px-8 text-lg font-display font-bold bg-foreground text-background hover:bg-foreground/90">
                EXPLORE PORTFOLIO <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-none h-14 px-8 text-lg font-display font-bold border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                OUR THESIS
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] pointer-events-none"></div>
      </section>

      {/* Ticker */}
      <div className="bg-foreground text-background py-4 overflow-hidden whitespace-nowrap border-y border-border">
        <div className="inline-flex animate-marquee items-center gap-12 font-display font-bold text-lg tracking-widest">
          <span>SAAS PLATFORMS</span>
          <span className="text-primary">///</span>
          <span>MEDIA PROPERTIES</span>
          <span className="text-primary">///</span>
          <span>YOUTUBE CHANNELS</span>
          <span className="text-primary">///</span>
          <span>NEWSLETTERS</span>
          <span className="text-primary">///</span>
          <span>CREATOR AGENCIES</span>
          <span className="text-primary">///</span>
          <span>PODCAST NETWORKS</span>
          <span className="text-primary">///</span>
          <span>SAAS PLATFORMS</span>
          <span className="text-primary">///</span>
          <span>MEDIA PROPERTIES</span>
          <span className="text-primary">///</span>
          <span>YOUTUBE CHANNELS</span>
        </div>
      </div>

      {/* What We Acquire Grid */}
      <section id="focus" className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tighter mb-4">WHAT WE <br/>ACQUIRE</h2>
              <div className="h-2 w-24 bg-primary"></div>
            </div>
            <p className="text-muted-foreground max-w-md text-lg mt-8 md:mt-0">
              We target high-value digital assets with proven audiences, recurring revenue, and exponential growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden border border-border bg-card hover:border-primary transition-colors duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/saas-platform.jpg" alt="SaaS" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <Layers className="h-8 w-8 text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl mb-3">Software & SaaS</h3>
                <p className="text-muted-foreground mb-6">Creator-focused software, influencer marketing platforms, and content tools with recurring revenue.</p>
                <ul className="space-y-2 text-sm font-medium border-t border-border pt-4">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Influencer Platforms</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Content CMS</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Analytics Dashboards</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden border border-border bg-card hover:border-primary transition-colors duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/media-content.jpg" alt="Media" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <Globe className="h-8 w-8 text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl mb-3">Media Properties</h3>
                <p className="text-muted-foreground mb-6">Digital publishers, news outlets, and content networks with established audiences and editorial excellence.</p>
                <ul className="space-y-2 text-sm font-medium border-t border-border pt-4">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Digital News Portals</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Niche Media Brands</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Vertical Publishers</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden border border-border bg-card hover:border-primary transition-colors duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-neutral-900 flex items-center justify-center relative">
                   <Play className="h-16 w-16 text-white opacity-50 absolute" />
                   <img src="/images/media-content.jpg" alt="Video" className="w-full h-full object-cover opacity-50 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="p-8">
                <Play className="h-8 w-8 text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl mb-3">YouTube & Video</h3>
                <p className="text-muted-foreground mb-6">Established channels and production companies with millions of subscribers and consistent monetization.</p>
                <ul className="space-y-2 text-sm font-medium border-t border-border pt-4">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Educational Channels</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Entertainment Networks</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Production Studios</li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden border border-border bg-card hover:border-primary transition-colors duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/newsletter-community.jpg" alt="Newsletter" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <Mail className="h-8 w-8 text-primary mb-6" />
                <h3 className="font-display font-bold text-2xl mb-3">Newsletters</h3>
                <p className="text-muted-foreground mb-6">High-engagement newsletters and email communities with proven subscriber loyalty.</p>
                <ul className="space-y-2 text-sm font-medium border-t border-border pt-4">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Industry Newsletters</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Niche Communities</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary mr-2"></span>Subscription Lists</li>
                </ul>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative overflow-hidden border border-border bg-card hover:border-primary transition-colors duration-300 md:col-span-2">
              <div className="absolute inset-0 z-0">
                <img src="/images/creator-economy.jpg" alt="Creator Economy" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
              </div>
              <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                <Zap className="h-10 w-10 text-primary mb-6" />
                <h3 className="font-display font-bold text-3xl mb-4">Creator Agencies & <br/>Talent Management</h3>
                <p className="text-muted-foreground max-w-lg text-lg mb-8">Influencer agencies and talent firms representing multiple revenue-generating creators and intellectual property.</p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 border border-border bg-background/50 backdrop-blur text-sm font-bold">INFLUENCER MARKETING</span>
                  <span className="px-4 py-2 border border-border bg-background/50 backdrop-blur text-sm font-bold">TALENT MANAGEMENT</span>
                  <span className="px-4 py-2 border border-border bg-background/50 backdrop-blur text-sm font-bold">BRAND REPRESENTATION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-primary blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-8 leading-none">
                UNLOCKING <br/>
                <span className="text-primary">TRUE POTENTIAL</span>
              </h2>
              <p className="text-xl text-neutral-400 mb-12 font-light leading-relaxed">
                We don't just invest. We transform digital assets through strategic scaling, operational excellence, and portfolio synergies.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2">Revenue Optimization</h4>
                    <p className="text-neutral-400">Advanced monetization across subscriptions, ads, sponsorships, and premium offerings.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2">Audience Growth</h4>
                    <p className="text-neutral-400">Cross-promotion, market expansion, and unlocking untapped audience segments.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2">Portfolio Synergies</h4>
                    <p className="text-neutral-400">Creating network effects by bundling assets and integrating tools with media properties.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="border border-neutral-800 bg-neutral-900/50 p-8 md:p-12 backdrop-blur-sm">
                <h3 className="font-display font-bold text-3xl mb-8">THE OPPORTUNITY</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-neutral-800 pb-4">
                    <span className="text-neutral-400">Creator Economy Market (2025)</span>
                    <span className="font-display font-bold text-2xl text-primary">$192B</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-neutral-800 pb-4">
                    <span className="text-neutral-400">Projected Market (2030)</span>
                    <span className="font-display font-bold text-2xl text-primary">$528B</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-neutral-800 pb-4">
                    <span className="text-neutral-400">M&A Growth (H1 2025)</span>
                    <span className="font-display font-bold text-2xl text-accent">+73%</span>
                  </div>
                </div>
                <div className="mt-12 p-6 bg-primary/10 border border-primary/20">
                  <p className="text-lg italic text-neutral-300">
                    "The companies that will dominate digital media won't build from scratch—they'll acquire, integrate, and scale."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-8">
            READY TO <span className="text-primary">SCALE?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            If you own a digital asset in the TME space—SaaS, YouTube, Newsletter, or Media—we want to hear from you.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 text-left">
            <div className="p-4 border border-border bg-secondary/30">
              <div className="text-xs text-muted-foreground mb-1">SAAS ARR</div>
              <div className="font-display font-bold text-xl">$100K+</div>
            </div>
            <div className="p-4 border border-border bg-secondary/30">
              <div className="text-xs text-muted-foreground mb-1">YOUTUBE SUBS</div>
              <div className="font-display font-bold text-xl">100K+</div>
            </div>
            <div className="p-4 border border-border bg-secondary/30">
              <div className="text-xs text-muted-foreground mb-1">NEWSLETTER SUBS</div>
              <div className="font-display font-bold text-xl">50K+</div>
            </div>
            <div className="p-4 border border-border bg-secondary/30">
              <div className="text-xs text-muted-foreground mb-1">MONTHLY VISITORS</div>
              <div className="font-display font-bold text-xl">1M+</div>
            </div>
          </div>

          <Button size="lg" className="rounded-none h-16 px-12 text-xl font-display font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-105">
            CONTACT US TODAY
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 border-t border-neutral-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="font-display font-bold text-3xl tracking-tighter mb-6">
                ABSVRD<span className="text-primary">.</span>
              </div>
              <p className="text-neutral-400 max-w-xs">
                Acquiring and scaling the next generation of digital media and technology assets.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold mb-6 text-primary">FOCUS</h4>
                <ul className="space-y-4 text-neutral-400">
                  <li><a href="#" className="hover:text-white transition-colors">SaaS Platforms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Media Properties</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Creator Economy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-primary">COMPANY</h4>
                <ul className="space-y-4 text-neutral-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Investment Thesis</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
            <div>&copy; 2025 Absvrd Ventures. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
