import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 px-8 bg-gray-100">
        <div className="text-2xl font-bold">{t('logo')}</div>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-gray-900">{t('home')}</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900">{t('about')}</a>
          <a href="/services" className="text-gray-700 hover:text-gray-900">{t('services')}</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900">{t('contact')}</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">{t('welcome_message')}</h1>
          <p className="mt-4 text-xl">{t('hero_subtitle')}</p>
          <Button className="mt-8">{t('get_started')}</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">{t('our_features')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('feature_1_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('feature_1_description')}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t('feature_2_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('feature_2_description')}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t('feature_3_title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t('feature_3_description')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">{t('testimonials')}</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt={t('user_1')} className="mx-auto object-cover w-24 h-24 rounded-full" />
                <p className="mt-4">{t('testimonial_1')}</p>
                <p className="mt-2 font-bold">{t('user_1')}</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt={t('user_2')} className="mx-auto object-cover w-24 h-24 rounded-full" />
                <p className="mt-4">{t('testimonial_2')}</p>
                <p className="mt-2 font-bold">{t('user_2')}</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt={t('user_3')} className="mx-auto object-cover w-24 h-24 rounded-full" />
                <p className="mt-4">{t('testimonial_3')}</p>
                <p className="mt-2 font-bold">{t('user_3')}</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer className="flex justify-between items-center py-4 px-8 bg-gray-100">
        <div className="space-x-4">
          <a href="/privacy" className="text-gray-700 hover:text-gray-900">{t('privacy_policy')}</a>
          <a href="/terms" className="text-gray-700 hover:text-gray-900">{t('terms_of_service')}</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900">{t('contact')}</a>
        </div>
        <div className="space-x-4">
          <a href="https://facebook.com" className="text-gray-700 hover:text-gray-900">Facebook</a>
          <a href="https://twitter.com" className="text-gray-700 hover:text-gray-900">Twitter</a>
          <a href="https://linkedin.com" className="text-gray-700 hover:text-gray-900">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;