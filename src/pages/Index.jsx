import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 px-8 bg-green-100">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="space-x-4">
          <a href="/" className="text-green-700 hover:text-green-900">Home</a>
          <a href="/about" className="text-green-700 hover:text-green-900">About</a>
          <a href="/services" className="text-green-700 hover:text-green-900">Services</a>
          <a href="/contact" className="text-green-700 hover:text-green-900">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4 text-xl">We provide the best services for you</p>
          <Button className="mt-8">Get Started</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/feature-1.jpg" alt="Feature 1" className="w-full h-48 object-cover mb-4" />
              <p>Description of feature 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/feature-2.jpg" alt="Feature 2" className="w-full h-48 object-cover mb-4" />
              <p>Description of feature 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/feature-3.jpg" alt="Feature 3" className="w-full h-48 object-cover mb-4" />
              <p>Description of feature 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <img src="/images/feature-1.jpg" alt="User 1" className="mx-auto object-cover w-24 h-24 rounded-full" />
                <p className="mt-4">"Testimonial from user 1."</p>
                <p className="mt-2 font-bold">User 1</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <img src="/images/feature-2.jpg" alt="User 2" className="mx-auto object-cover w-24 h-24 rounded-full" />
                <p className="mt-4">"Testimonial from user 2."</p>
                <p className="mt-2 font-bold">User 2</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <img src="/images/feature-3.jpg" alt="User 3" className="mx-auto object-cover w-24 h-24 rounded-full" />
                <p className="mt-4">"Testimonial from user 3."</p>
                <p className="mt-2 font-bold">User 3</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer className="flex justify-between items-center py-4 px-8 bg-green-100">
        <div className="space-x-4">
          <a href="/privacy" className="text-green-700 hover:text-green-900">Privacy Policy</a>
          <a href="/terms" className="text-green-700 hover:text-green-900">Terms of Service</a>
          <a href="/contact" className="text-green-700 hover:text-green-900">Contact</a>
        </div>
        <div className="space-x-4">
          <a href="https://facebook.com" className="text-green-700 hover:text-green-900">Facebook</a>
          <a href="https://twitter.com" className="text-green-700 hover:text-green-900">Twitter</a>
          <a href="https://linkedin.com" className="text-green-700 hover:text-green-900">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;