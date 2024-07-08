import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      logo: "Logo",
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      welcome_message: "Welcome to Our Website",
      hero_subtitle: "We provide the best services for you",
      get_started: "Get Started",
      our_features: "Our Features",
      feature_1_title: "Feature 1",
      feature_1_description: "Description of feature 1.",
      feature_2_title: "Feature 2",
      feature_2_description: "Description of feature 2.",
      feature_3_title: "Feature 3",
      feature_3_description: "Description of feature 3.",
      testimonials: "What Our Clients Say",
      testimonial_1: "\"Testimonial from user 1.\"",
      testimonial_2: "\"Testimonial from user 2.\"",
      testimonial_3: "\"Testimonial from user 3.\"",
      user_1: "User 1",
      user_2: "User 2",
      user_3: "User 3",
      privacy_policy: "Privacy Policy",
      terms_of_service: "Terms of Service"
    }
  },
  zh: {
    translation: {
      logo: "标志",
      home: "首页",
      about: "关于",
      services: "服务",
      contact: "联系",
      welcome_message: "欢迎来到我们的网站",
      hero_subtitle: "我们为您提供最好的服务",
      get_started: "开始",
      our_features: "我们的特点",
      feature_1_title: "特点 1",
      feature_1_description: "特点 1 的描述。",
      feature_2_title: "特点 2",
      feature_2_description: "特点 2 的描述。",
      feature_3_title: "特点 3",
      feature_3_description: "特点 3 的描述。",
      testimonials: "客户评价",
      testimonial_1: "\"用户 1 的评价。\"",
      testimonial_2: "\"用户 2 的评价。\"",
      testimonial_3: "\"用户 3 的评价。\"",
      user_1: "用户 1",
      user_2: "用户 2",
      user_3: "用户 3",
      privacy_policy: "隐私政策",
      terms_of_service: "服务条款"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;