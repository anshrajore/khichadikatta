import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        menu: "Menu",
        franchise: "Franchise",
        about: "About",
        contact: "Contact",
      },
      hero: {
        tagline: "Serving Warmth in Every Bowl",
        subtitle: "Authentic Khandeshi-style Khichadi made with traditional spices",
        cta1: "Order Now",
        cta2: "Find Outlet",
        cta3: "Franchise Inquiry",
      },
      menu: {
        title: "Our Menu",
        subtitle: "Traditional flavors, homestyle comfort",
      },
      franchise: {
        title: "Own a Khichadi Katta",
        subtitle: "Start your journey at ₹1,99,999",
        whyInvest: "Why Invest in Khichadi Katta?",
        bulkOrders: "Bulk Order Opportunities",
        dayOneRevenue: "Revenue from Day 1",
        fastGrowing: "Be part of Central Maharashtra's biggest and fastest growing brand",
        zeroRoyalty: "Zero Royalty or Any Commission",
        investment: "Investment",
        space: "Space Required",
        kitchenSetup: "Kitchen Setup",
        support: "Support Offered",
        getStarted: "Start Your Franchise",
      },
      about: {
        title: "About Khichadi Katta",
        founderTitle: "Founded by Kunal P. Mahajan",
        founderBio: "Driven by the vision to bring the taste of authentic Khandeshi Khichadi to every corner, Kunal Mahajan founded Khichadi Katta in 2024 — combining tradition, flavor, and entrepreneurship.",
        mission: "Our Mission",
        missionText: "To deliver warmth and authenticity through every bowl of Khichadi.",
        vision: "Our Vision",
        visionText: "To make Khichadi Katta India's most trusted comfort food brand.",
      },
      contact: {
        title: "Get in Touch",
        subtitle: "We'd love to hear from you",
        phone: "Phone",
        email: "Email",
        outlets: "Our Outlets",
      },
      footer: {
        tagline: "Authentic homestyle flavors in every bowl",
        rights: "All rights reserved",
      },
    },
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        menu: "मेनू",
        franchise: "फ्रेंचाइजी",
        about: "हमारे बारे में",
        contact: "संपर्क",
      },
      hero: {
        tagline: "हर कटोरे में गर्मजोशी परोसना",
        subtitle: "पारंपरिक मसालों से बनी असली खानदेशी शैली की खिचड़ी",
        cta1: "अभी ऑर्डर करें",
        cta2: "आउटलेट खोजें",
        cta3: "फ्रेंचाइजी पूछताछ",
      },
      menu: {
        title: "हमारा मेनू",
        subtitle: "पारंपरिक स्वाद, घर जैसा आराम",
      },
      franchise: {
        title: "खिचड़ी कट्टा के मालिक बनें",
        subtitle: "₹1,99,999 से अपनी यात्रा शुरू करें",
        whyInvest: "खिचड़ी कट्टा में निवेश क्यों करें?",
        bulkOrders: "बल्क ऑर्डर के अवसर",
        dayOneRevenue: "पहले दिन से राजस्व",
        fastGrowing: "मध्य महाराष्ट्र के सबसे बड़े और तेजी से बढ़ते ब्रांड का हिस्सा बनें",
        zeroRoyalty: "शून्य रॉयल्टी या कोई कमीशन नहीं",
        investment: "निवेश",
        space: "आवश्यक जगह",
        kitchenSetup: "रसोई सेटअप",
        support: "दी जाने वाली सहायता",
        getStarted: "अपनी फ्रेंचाइजी शुरू करें",
      },
      about: {
        title: "खिचड़ी कट्टा के बारे में",
        founderTitle: "कुणाल पी. महाजन द्वारा स्थापित",
        founderBio: "असली खानदेशी खिचड़ी का स्वाद हर कोने तक पहुंचाने के दृष्टिकोण से प्रेरित होकर, कुणाल महाजन ने 2024 में खिचड़ी कट्टा की स्थापना की — परंपरा, स्वाद और उद्यमिता को मिलाते हुए।",
        mission: "हमारा मिशन",
        missionText: "खिचड़ी के हर कटोरे के माध्यम से गर्मजोशी और प्रामाणिकता प्रदान करना।",
        vision: "हमारी दृष्टि",
        visionText: "खिचड़ी कट्टा को भारत का सबसे भरोसेमंद कम्फर्ट फूड ब्रांड बनाना।",
      },
      contact: {
        title: "संपर्क में रहें",
        subtitle: "हम आपसे सुनना पसंद करेंगे",
        phone: "फोन",
        email: "ईमेल",
        outlets: "हमारे आउटलेट",
      },
      footer: {
        tagline: "हर कटोरे में असली घर का स्वाद",
        rights: "सर्वाधिकार सुरक्षित",
      },
    },
  },
  mr: {
    translation: {
      nav: {
        home: "होम",
        menu: "मेनू",
        franchise: "फ्रँचायझी",
        about: "आमच्याबद्दल",
        contact: "संपर्क",
      },
      hero: {
        tagline: "प्रत्येक वाटीमध्ये उबदारपणा सर्व्ह करणे",
        subtitle: "पारंपारिक मसाल्यांसह बनवलेली अस्सल खानदेशी शैलीतील खिचडी",
        cta1: "आता ऑर्डर करा",
        cta2: "आउटलेट शोधा",
        cta3: "फ्रँचायझी चौकशी",
      },
      menu: {
        title: "आमचा मेनू",
        subtitle: "पारंपारिक चव, घरगुती आराम",
      },
      franchise: {
        title: "खिचडी कट्टा चे मालक व्हा",
        subtitle: "₹1,99,999 पासून तुमचा प्रवास सुरू करा",
        whyInvest: "खिचडी कट्टा मध्ये गुंतवणूक का करावी?",
        bulkOrders: "मोठ्या प्रमाणावर ऑर्डर मिळण्याची संधी",
        dayOneRevenue: "पहिल्याच दिवसापासून उत्पन्न सुरू",
        fastGrowing: "मध्य महाराष्ट्रातील सर्वात मोठ्या आणि वेगाने वाढणाऱ्या ब्रँडचा भाग व्हा",
        zeroRoyalty: "शून्य रॉयल्टी व कोणताही कमिशन नाही",
        investment: "गुंतवणूक",
        space: "आवश्यक जागा",
        kitchenSetup: "किचन सेटअप",
        support: "देण्यात येणारा सपोर्ट",
        getStarted: "तुमची फ्रँचायझी सुरू करा",
      },
      about: {
        title: "खिचडी कट्टा बद्दल",
        founderTitle: "कुनाल पी. महाजन यांनी स्थापित",
        founderBio: "अस्सल खानदेशी खिचडीची चव प्रत्येक कोपऱ्यापर्यंत पोहोचवण्याच्या दृष्टीने प्रेरित होऊन, कुनाल महाजन यांनी 2024 मध्ये खिचडी कट्टा स्थापन केला — परंपरा, चव आणि उद्योजकता एकत्रित करत.",
        mission: "आमचे मिशन",
        missionText: "खिचडीच्या प्रत्येक वाटीद्वारे उबदारपणा आणि प्रामाणिकपणा प्रदान करणे.",
        vision: "आमची दृष्टी",
        visionText: "खिचडी कट्टा ला भारतातील सर्वात विश्वासार्ह कम्फर्ट फूड ब्रँड बनवणे.",
      },
      contact: {
        title: "संपर्कात रहा",
        subtitle: "आम्हाला तुमच्याकडून ऐकायला आवडेल",
        phone: "फोन",
        email: "ईमेल",
        outlets: "आमचे आउटलेट",
      },
      footer: {
        tagline: "प्रत्येक वाटीमध्ये अस्सल घरगुती चव",
        rights: "सर्व हक्क राखीव",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
