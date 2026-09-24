export interface TherapyLangData {
  documentTitle: string;
  eyebrow: string;
  heading: string;
  lead: string;
  sectionTitle: string;
  intro: string;
  focusTitle: string;
  bullets: string[];
  goal: string;
  admissionsEyebrow: string;
  admissionsTitle: string;
  admissionsText: string;
  callButton: string;
  inquiryButton: string;
  relatedEyebrow: string;
  relatedTitle: string;
  faqEyebrow: string;
  faqTitle: string;
}

export interface TherapyPageData {
  slug: string;
  order: string;
  en: TherapyLangData;
  es: TherapyLangData;
}

export const THERAPIES: TherapyPageData[] = [
  {
    "slug": "individual-therapy",
    "order": "01",
    "en": {
      "documentTitle": "Individual Therapy in Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Treatment & Therapies \u00b7 Oldsmar, Florida",
      "heading": "Individual Therapy: The Anchor of Your Recovery",
      "lead": "At Swiss Behavioral Health, we believe that true transformation happens when treatment is crafted around the person, not a template. Serving the greater Tampa Bay community, our behavioral health and substance use program centers on one-on-one therapeutic connection.\n\nWith two individual therapy sessions each week, you work directly with your primary clinician to explore underlying emotional triggers, build healthier coping mechanisms, and overcome relapse risks in real time. Our low client-to-staff ratio guarantees exceptional access to your care team, fostering a trusting relationship where real healing takes root. Whether you are navigating addiction, mental health challenges, or dual-diagnosis recovery, our individualized therapy offers the space, time, and clinical expertise you need to build a resilient foundation for the future.",
      "sectionTitle": "Individual Therapy at Swiss Behavioral Health",
      "intro": "Individual therapy is a private, supportive space where each person can speak openly about thoughts, emotions, and experiences. The therapist listens carefully and without judgment, helping identify sources of distress and new ways to cope.",
      "focusTitle": "In these sessions, care is thoughtfully tailored to help clients:",
      "bullets": [
        "Recognize and reframe negative patterns of thought and behavior that impact daily life.",
        "Safely process challenging emotions, including anxiety, depression, and anger.",
        "Develop practical coping strategies to manage stress, build emotional resilience, and strengthen self-esteem."
      ],
      "goal": "Our primary goal is to ensure each individual feels deeply supported throughout their recovery journey while acquiring the practical tools necessary to build a balanced, fulfilling, and meaningful life. All treatment modalities are selected and delivered based on clinical appropriateness, individual treatment plans, and the highest standards of professional credentialing.",
      "admissionsEyebrow": "Admissions",
      "admissionsTitle": "Talk with our team.",
      "admissionsText": "Ask about programs, next steps, and insurance verification.",
      "callButton": "Call (656) 232-3504",
      "inquiryButton": "General Inquiry",
      "relatedEyebrow": "Treatment & Therapies",
      "relatedTitle": "Continue exploring treatment approaches.",
      "faqEyebrow": "Frequently Asked Questions",
      "faqTitle": "Individual Therapy FAQs"
    },
    "es": {
      "documentTitle": "Terapia Individual en Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Tratamiento y Terapias \u00b7 Oldsmar, Florida",
      "heading": "Terapia Individual: El Ancla de Su Recuperaci\u00f3n",
      "lead": "En Swiss Behavioral Health, creemos que la verdadera transformaci\u00f3n ocurre cuando el tratamiento se dise\u00f1a alrededor de la persona, no de una plantilla. Al servicio de la comunidad de Tampa Bay, nuestro programa de salud conductual y uso de sustancias se centra en la conexi\u00f3n terap\u00e9utica individual.\n\nCon dos sesiones semanales de terapia individual, usted trabaja directamente con su terapeuta principal para explorar desencadenantes emocionales profundos, construir mecanismos de afrontamiento m\u00e1s saludables y prevenir reca\u00eddas en tiempo real. Nuestra baja proporci\u00f3n de pacientes por terapeuta garantiza un acceso excepcional a su equipo cl\u00ednico, fomentando una relaci\u00f3n de confianza donde florece la verdadera sanaci\u00f3n. Ya sea que enfrente adicci\u00f3n, desaf\u00edos de salud mental o recuperaci\u00f3n de diagn\u00f3stico dual, nuestra terapia individualizada le brinda el tiempo, el espacio y la experiencia cl\u00ednica que necesita para construir una base s\u00f3lida para el futuro.",
      "sectionTitle": "Terapia Individual en Swiss Behavioral Health",
      "intro": "La terapia individual es un espacio \u00edntimo y seguro donde cada persona puede hablar libremente sobre sus pensamientos, emociones y experiencias. Aqu\u00ed, el terapeuta escucha con atenci\u00f3n y sin juicios, ayudando a identificar las dificultades que generan malestar y a encontrar nuevas formas de afrontarlas.",
      "focusTitle": "En estas sesiones, la atenci\u00f3n se adapta cuidadosamente para ayudar a los clientes a:",
      "bullets": [
        "Reconocer y reformular patrones negativos de pensamiento y conducta que impactan la vida diaria.",
        "Procesar de forma segura emociones dif\u00edciles, incluyendo ansiedad, depresi\u00f3n y enojo.",
        "Desarrollar estrategias pr\u00e1cticas de afrontamiento para manejar el estr\u00e9s, construir resiliencia emocional y fortalecer la autoestima."
      ],
      "goal": "Nuestro objetivo principal es asegurar que cada individuo se sienta profundamente apoyado a lo largo de su proceso de recuperaci\u00f3n, adquiriendo las herramientas pr\u00e1cticas necesarias para construir una vida equilibrada, plena y significativa. Todas las modalidades de tratamiento se seleccionan y brindan en funci\u00f3n de la idoneidad cl\u00ednica, planes de tratamiento individuales y los m\u00e1s altos est\u00e1ndares de acreditaci\u00f3n profesional.",
      "admissionsEyebrow": "Admisiones",
      "admissionsTitle": "Hable con nuestro equipo.",
      "admissionsText": "Consulte sobre programas, pr\u00f3ximos pasos y verificaci\u00f3n de seguro.",
      "callButton": "Llamar (656) 232-3504",
      "inquiryButton": "Consulta General",
      "relatedEyebrow": "Tratamiento y Terapias",
      "relatedTitle": "Contin\u00fae explorando enfoques de tratamiento.",
      "faqEyebrow": "Preguntas Frecuentes",
      "faqTitle": "Preguntas frecuentes"
    }
  },
  {
    "slug": "group-therapy",
    "order": "02",
    "en": {
      "documentTitle": "Group Therapy in Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Treatment & Therapies \u00b7 Oldsmar, Florida",
      "heading": "Group Therapy",
      "lead": "Group therapy sessions at Swiss Behavioral Health in Oldsmar, FL, serving Tampa Bay in a supportive, clinician-guided behavioral health setting.",
      "sectionTitle": "Group Therapy at Swiss Behavioral Health",
      "intro": "Group therapy brings together people who share similar experiences, creating a space for mutual support. Participating in a group can help people discover that they are not alone and that others are facing similar challenges.",
      "focusTitle": "In these sessions, care may focus on:",
      "bullets": [
        "Share experiences in a respectful environment guided by a therapist.",
        "Learn new perspectives by hearing how others face their difficulties.",
        "Build empathy, solidarity, and a sense of community."
      ],
      "goal": "The group can become a meaningful support network that strengthens motivation and commitment to the recovery process.",
      "admissionsEyebrow": "Admissions",
      "admissionsTitle": "Talk with our team.",
      "admissionsText": "Ask about programs, next steps, and insurance verification.",
      "callButton": "Call (656) 232-3504",
      "inquiryButton": "General Inquiry",
      "relatedEyebrow": "Treatment & Therapies",
      "relatedTitle": "Continue exploring treatment approaches.",
      "faqEyebrow": "Frequently Asked Questions",
      "faqTitle": "Group Therapy FAQs"
    },
    "es": {
      "documentTitle": "Terapia Grupal en Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Tratamiento y Terapias \u00b7 Oldsmar, Florida",
      "heading": "Terapia Grupal",
      "lead": "Atenci\u00f3n en Swiss Behavioral Health en Oldsmar, Florida, para la comunidad de Tampa Bay.",
      "sectionTitle": "Terapia Grupal en Swiss Behavioral Health",
      "intro": "La terapia grupal re\u00fane a personas que comparten experiencias similares, creando un espacio de apoyo mutuo. Participar en grupo ayuda a descubrir que no se est\u00e1 solo y que otros tambi\u00e9n enfrentan retos parecidos.",
      "focusTitle": "En estas sesiones:",
      "bullets": [
        "Se comparten vivencias en un ambiente respetuoso y guiado por un terapeuta.",
        "Se aprenden nuevas perspectivas al escuchar c\u00f3mo otros enfrentan sus dificultades.",
        "Se fomenta la empat\u00eda, la solidaridad y el sentido de comunidad."
      ],
      "goal": "El grupo se convierte en una red de apoyo que refuerza la motivaci\u00f3n y el compromiso con el proceso de recuperaci\u00f3n.",
      "admissionsEyebrow": "Admisiones",
      "admissionsTitle": "Hable con nuestro equipo.",
      "admissionsText": "Consulte sobre programas, pr\u00f3ximos pasos y verificaci\u00f3n de seguro.",
      "callButton": "Llamar (656) 232-3504",
      "inquiryButton": "Consulta General",
      "relatedEyebrow": "Tratamiento y Terapias",
      "relatedTitle": "Contin\u00fae explorando enfoques de tratamiento.",
      "faqEyebrow": "Preguntas Frecuentes",
      "faqTitle": "Preguntas frecuentes"
    }
  },
  {
    "slug": "family-therapy",
    "order": "03",
    "en": {
      "documentTitle": "Family Therapy & Support in Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Treatment & Therapies \u00b7 Oldsmar, Florida",
      "heading": "Family Therapy & Support",
      "lead": "Family therapy and support at Swiss Behavioral Health in Oldsmar, FL, helping Tampa Bay families strengthen communication and support recovery.",
      "sectionTitle": "Family Therapy & Support at Swiss Behavioral Health",
      "intro": "Family can be an important part of rehabilitation. Conflict or communication difficulties can affect everyone\u2019s well-being. Family therapy is designed to strengthen relationships and support a healthier home environment.",
      "focusTitle": "In these sessions, care may focus on:",
      "bullets": [
        "Improve communication and work through misunderstandings.",
        "Learn tools for managing difficult situations at home.",
        "Help family members better understand recovery and how to provide effective support."
      ],
      "goal": "The goal is to help the family become an active ally in recovery, able to provide support with greater understanding and patience.",
      "admissionsEyebrow": "Admissions",
      "admissionsTitle": "Talk with our team.",
      "admissionsText": "Ask about programs, next steps, and insurance verification.",
      "callButton": "Call (656) 232-3504",
      "inquiryButton": "General Inquiry",
      "relatedEyebrow": "Treatment & Therapies",
      "relatedTitle": "Continue exploring treatment approaches.",
      "faqEyebrow": "Frequently Asked Questions",
      "faqTitle": "Family Therapy & Support FAQs"
    },
    "es": {
      "documentTitle": "Terapia y Apoyo Familiar en Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Tratamiento y Terapias \u00b7 Oldsmar, Florida",
      "heading": "Terapia y Apoyo Familiar",
      "lead": "Atenci\u00f3n en Swiss Behavioral Health en Oldsmar, Florida, para la comunidad de Tampa Bay.",
      "sectionTitle": "Terapia y Apoyo Familiar en Swiss Behavioral Health",
      "intro": "La familia es un pilar fundamental en la rehabilitaci\u00f3n. Muchas veces, los conflictos o la falta de comunicaci\u00f3n afectan el bienestar de todos. La terapia familiar busca fortalecer los v\u00ednculos y crear un entorno m\u00e1s saludable.",
      "focusTitle": "En estas sesiones:",
      "bullets": [
        "Se trabaja en mejorar la comunicaci\u00f3n y resolver malentendidos.",
        "Se ofrecen herramientas para manejar situaciones dif\u00edciles en casa.",
        "Se ayuda a los familiares a comprender mejor el proceso de recuperaci\u00f3n y c\u00f3mo brindar apoyo efectivo."
      ],
      "goal": "El objetivo es que la familia se convierta en un aliado activo, capaz de acompa\u00f1ar con comprensi\u00f3n y paciencia.",
      "admissionsEyebrow": "Admisiones",
      "admissionsTitle": "Hable con nuestro equipo.",
      "admissionsText": "Consulte sobre programas, pr\u00f3ximos pasos y verificaci\u00f3n de seguro.",
      "callButton": "Llamar (656) 232-3504",
      "inquiryButton": "Consulta General",
      "relatedEyebrow": "Tratamiento y Terapias",
      "relatedTitle": "Contin\u00fae explorando enfoques de tratamiento.",
      "faqEyebrow": "Preguntas Frecuentes",
      "faqTitle": "Preguntas frecuentes"
    }
  },
  {
    "slug": "cbt",
    "order": "04",
    "en": {
      "documentTitle": "Cognitive Behavioral Therapy (CBT) in Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Treatment & Therapies \u00b7 Oldsmar, Florida",
      "heading": "Cognitive Behavioral Therapy (CBT)",
      "lead": "CBT at Swiss Behavioral Health in Oldsmar, FL, serving Tampa Bay with practical cognitive behavioral strategies for behavioral health and recovery.",
      "sectionTitle": "Cognitive Behavioral Therapy (CBT) at Swiss Behavioral Health",
      "intro": "Cognitive Behavioral Therapy is widely used in rehabilitation because it provides practical, concrete tools. It focuses on identifying unhelpful thoughts that can influence emotions and behavior.",
      "focusTitle": "In these sessions, care may focus on:",
      "bullets": [
        "Recognize automatic thoughts that may contribute to anxiety or sadness.",
        "Practice replacing those thoughts with more realistic and constructive alternatives.",
        "Develop skills for facing everyday situations with greater confidence."
      ],
      "goal": "The goal is to help each person build tools they can apply in daily life, supporting sustainable improvements in emotional well-being.",
      "admissionsEyebrow": "Admissions",
      "admissionsTitle": "Talk with our team.",
      "admissionsText": "Ask about programs, next steps, and insurance verification.",
      "callButton": "Call (656) 232-3504",
      "inquiryButton": "General Inquiry",
      "relatedEyebrow": "Treatment & Therapies",
      "relatedTitle": "Continue exploring treatment approaches.",
      "faqEyebrow": "Frequently Asked Questions",
      "faqTitle": "Cognitive Behavioral Therapy (CBT) FAQs"
    },
    "es": {
      "documentTitle": "Terapia Cognitivo-Conductual (CBT) en Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Tratamiento y Terapias \u00b7 Oldsmar, Florida",
      "heading": "Terapia Cognitivo-Conductual (CBT)",
      "lead": "Atenci\u00f3n en Swiss Behavioral Health en Oldsmar, Florida, para la comunidad de Tampa Bay.",
      "sectionTitle": "Terapia Cognitivo-Conductual (CBT) en Swiss Behavioral Health",
      "intro": "La terapia cognitivo-conductual es una de las m\u00e1s utilizadas en rehabilitaci\u00f3n porque ofrece resultados pr\u00e1cticos y concretos. Se centra en identificar pensamientos negativos que influyen en las emociones y la conducta.",
      "focusTitle": "En estas sesiones:",
      "bullets": [
        "Se aprende a reconocer ideas autom\u00e1ticas que generan ansiedad o tristeza.",
        "Se practican formas de reemplazar esos pensamientos por otros m\u00e1s realistas y positivos.",
        "Se desarrollan habilidades para enfrentar situaciones cotidianas con mayor seguridad."
      ],
      "goal": "El objetivo es que la persona adquiera herramientas que pueda aplicar en su vida diaria, logrando cambios sostenibles en su bienestar emocional.",
      "admissionsEyebrow": "Admisiones",
      "admissionsTitle": "Hable con nuestro equipo.",
      "admissionsText": "Consulte sobre programas, pr\u00f3ximos pasos y verificaci\u00f3n de seguro.",
      "callButton": "Llamar (656) 232-3504",
      "inquiryButton": "Consulta General",
      "relatedEyebrow": "Tratamiento y Terapias",
      "relatedTitle": "Contin\u00fae explorando enfoques de tratamiento.",
      "faqEyebrow": "Preguntas Frecuentes",
      "faqTitle": "Preguntas frecuentes"
    }
  },
  {
    "slug": "dbt",
    "order": "05",
    "en": {
      "documentTitle": "Dialectical Behavior Therapy (DBT) in Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Treatment & Therapies \u00b7 Oldsmar, Florida",
      "heading": "Dialectical Behavior Therapy (DBT)",
      "lead": "DBT at Swiss Behavioral Health in Oldsmar, FL, serving Tampa Bay with skills for emotional regulation, distress tolerance and relationships.",
      "sectionTitle": "Dialectical Behavior Therapy (DBT) at Swiss Behavioral Health",
      "intro": "Dialectical Behavior Therapy is designed for people who experience very intense emotions or difficulty in relationships. It combines acceptance and change, balancing understanding of what a person feels with learning new ways to respond.",
      "focusTitle": "In these sessions, care may focus on:",
      "bullets": [
        "Learn emotional regulation techniques for managing strong impulses.",
        "Practice tolerating distress without turning to harmful behaviors.",
        "Strengthen communication skills to improve personal relationships."
      ],
      "goal": "The goal is to help each person find greater stability and learn to live with more calm and control over difficult emotions.",
      "admissionsEyebrow": "Admissions",
      "admissionsTitle": "Talk with our team.",
      "admissionsText": "Ask about programs, next steps, and insurance verification.",
      "callButton": "Call (656) 232-3504",
      "inquiryButton": "General Inquiry",
      "relatedEyebrow": "Treatment & Therapies",
      "relatedTitle": "Continue exploring treatment approaches.",
      "faqEyebrow": "Frequently Asked Questions",
      "faqTitle": "Dialectical Behavior Therapy (DBT) FAQs"
    },
    "es": {
      "documentTitle": "Terapia Dial\u00e9ctico-Conductual (DBT) en Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Tratamiento y Terapias \u00b7 Oldsmar, Florida",
      "heading": "Terapia Dial\u00e9ctico-Conductual (DBT)",
      "lead": "Atenci\u00f3n en Swiss Behavioral Health en Oldsmar, Florida, para la comunidad de Tampa Bay.",
      "sectionTitle": "Terapia Dial\u00e9ctico-Conductual (DBT) en Swiss Behavioral Health",
      "intro": "La terapia dial\u00e9ctica conductual est\u00e1 dise\u00f1ada para quienes enfrentan emociones muy intensas o dificultades en sus relaciones. Combina aceptaci\u00f3n y cambio, ofreciendo un equilibrio entre comprender lo que se siente y aprender nuevas formas de actuar.",
      "focusTitle": "En estas sesiones:",
      "bullets": [
        "Se ense\u00f1an t\u00e9cnicas de regulaci\u00f3n emocional para manejar impulsos fuertes.",
        "Se trabaja en tolerar el malestar sin recurrir a conductas da\u00f1inas.",
        "Se fortalecen habilidades de comunicaci\u00f3n para mejorar las relaciones personales."
      ],
      "goal": "El objetivo es que la persona encuentre estabilidad y aprenda a vivir con mayor calma y control sobre sus emociones.",
      "admissionsEyebrow": "Admisiones",
      "admissionsTitle": "Hable con nuestro equipo.",
      "admissionsText": "Consulte sobre programas, pr\u00f3ximos pasos y verificaci\u00f3n de seguro.",
      "callButton": "Llamar (656) 232-3504",
      "inquiryButton": "Consulta General",
      "relatedEyebrow": "Tratamiento y Terapias",
      "relatedTitle": "Contin\u00fae explorando enfoques de tratamiento.",
      "faqEyebrow": "Preguntas Frecuentes",
      "faqTitle": "Preguntas frecuentes"
    }
  },
  {
    "slug": "wellness",
    "order": "06",
    "en": {
      "documentTitle": "Integrative Wellness Modalities in Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Treatment & Therapies \u00b7 Oldsmar, Florida",
      "heading": "Wellness",
      "lead": "Integrative wellness modalities at Swiss Behavioral Health in Oldsmar, FL, supporting whole-person recovery through movement, mindfulness, and restorative practices.",
      "sectionTitle": "Wellness Modalities at Swiss Behavioral Health",
      "intro": "Recovery extends far beyond the traditional therapy room. We recognize that true, lasting healing requires a holistic framework that integrates physical vitality, mental clarity, and emotional resilience.",
      "focusTitle": "Our wellness programming thoughtfully includes:",
      "bullets": [
        "Trauma-informed yoga to gently release physical tension and reconnect with the body.",
        "Breath work and sound healing for deep nervous system regulation.",
        "Moving mindfulness and meditation routines to cultivate sustainable inner peace.",
        "Outdoor experiential therapies and restorative recreation beside Philippe Park.",
        "Nutritional and somatic wellness practices tailored to individual recovery needs."
      ],
      "goal": "The goal is to empower each person with holistic restorative tools that regulate the nervous system, reduce stress, and sustain lasting, balanced recovery.",
      "admissionsEyebrow": "Admissions",
      "admissionsTitle": "Talk with our team.",
      "admissionsText": "Ask about programs, next steps, and insurance verification.",
      "callButton": "Call (656) 232-3504",
      "inquiryButton": "General Inquiry",
      "relatedEyebrow": "Treatment & Therapies",
      "relatedTitle": "Continue exploring treatment approaches.",
      "faqEyebrow": "Frequently Asked Questions",
      "faqTitle": "Wellness FAQs"
    },
    "es": {
      "documentTitle": "Modalidades de Bienestar en Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Tratamiento y Terapias \u00b7 Oldsmar, Florida",
      "heading": "Bienestar",
      "lead": "Modalidades de bienestar integral en Swiss Behavioral Health en Oldsmar, FL, que apoyan la recuperaci\u00f3n hol\u00edstica a trav\u00e9s del movimiento, mindfulness y pr\u00e1cticas restaurativas.",
      "sectionTitle": "Modalidades de Bienestar en Swiss Behavioral Health",
      "intro": "La recuperaci\u00f3n se extiende mucho m\u00e1s all\u00e1 de la sala de terapia tradicional. Reconocemos que la sanaci\u00f3n verdadera y duradera requiere un marco hol\u00edstico que integre vitalidad f\u00edsica, claridad mental y resiliencia emocional.",
      "focusTitle": "Nuestra programaci\u00f3n de bienestar incluye:",
      "bullets": [
        "Yoga informado en trauma para liberar suavemente la tensi\u00f3n f\u00edsica y reconectarse con el cuerpo.",
        "Trabajo de respiraci\u00f3n y sanaci\u00f3n con sonido para la regulaci\u00f3n profunda del sistema nervioso.",
        "Atenci\u00f3n plena en movimiento y meditaci\u00f3n para cultivar una paz interior duradera.",
        "Terapias experienciales al aire libre y recreaci\u00f3n restaurativa junto a Philippe Park.",
        "Pr\u00e1cticas nutricionales y som\u00e1ticas adaptadas a las necesidades individuales."
      ],
      "goal": "El objetivo es empoderar a cada persona con herramientas integrales que regulen el sistema nervioso, reduzcan el estr\u00e9s y apoyen una recuperaci\u00f3n duradera y equilibrada.",
      "admissionsEyebrow": "Admisiones",
      "admissionsTitle": "Hable con nuestro equipo.",
      "admissionsText": "Consulte sobre programas, pr\u00f3ximos pasos y verificaci\u00f3n de seguro.",
      "callButton": "Llamar (656) 232-3504",
      "inquiryButton": "Consulta General",
      "relatedEyebrow": "Tratamiento y Terapias",
      "relatedTitle": "Contin\u00fae explorando enfoques de tratamiento.",
      "faqEyebrow": "Preguntas Frecuentes",
      "faqTitle": "Preguntas Frecuentes sobre Bienestar"
    }
  },
  {
    "slug": "trauma-informed-care",
    "order": "07",
    "en": {
      "documentTitle": "Trauma-Informed Care in Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Treatment & Therapies \u00b7 Oldsmar, Florida",
      "heading": "Trauma-Informed Care",
      "lead": "Trauma-informed care at Swiss Behavioral Health in Oldsmar, FL, serving Tampa Bay with a respectful, safety-focused approach to behavioral health recovery.",
      "sectionTitle": "Trauma-Informed Care at Swiss Behavioral Health",
      "intro": "Trauma-informed care recognizes that many people have lived through difficult experiences that can affect mental health. For that reason, care is provided in a setting designed to support safety, respect, and sensitivity.",
      "focusTitle": "In these sessions, care may focus on:",
      "bullets": [
        "Avoid practices that could unnecessarily recreate distress or discomfort.",
        "Build trust and safety between patient and therapist.",
        "Support empowerment and help each person regain a sense of control."
      ],
      "goal": "The goal is to support healing step by step, with patience and consistent support while respecting each individual\u2019s pace.",
      "admissionsEyebrow": "Admissions",
      "admissionsTitle": "Talk with our team.",
      "admissionsText": "Ask about programs, next steps, and insurance verification.",
      "callButton": "Call (656) 232-3504",
      "inquiryButton": "General Inquiry",
      "relatedEyebrow": "Treatment & Therapies",
      "relatedTitle": "Continue exploring treatment approaches.",
      "faqEyebrow": "Frequently Asked Questions",
      "faqTitle": "Trauma-Informed Care FAQs"
    },
    "es": {
      "documentTitle": "Atenci\u00f3n Informada por Trauma en Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Tratamiento y Terapias \u00b7 Oldsmar, Florida",
      "heading": "Atenci\u00f3n Informada por Trauma",
      "lead": "Atenci\u00f3n en Swiss Behavioral Health en Oldsmar, Florida, para la comunidad de Tampa Bay.",
      "sectionTitle": "Atenci\u00f3n Informada por Trauma en Swiss Behavioral Health",
      "intro": "El cuidado informado en trauma reconoce que muchas personas han vivido experiencias dif\u00edciles que impactan su salud mental. Por eso, cada sesi\u00f3n se desarrolla en un entorno seguro, respetuoso y sensible.",
      "focusTitle": "En estas sesiones:",
      "bullets": [
        "Evitar pr\u00e1cticas que puedan revivir el dolor o generar incomodidad.",
        "Construir confianza y seguridad entre paciente y terapeuta.",
        "Promover el empoderamiento, ayudando a la persona a recuperar el control sobre su vida."
      ],
      "goal": "El objetivo es sanar paso a paso, con paciencia y apoyo constante, respetando el ritmo de cada individuo.",
      "admissionsEyebrow": "Admisiones",
      "admissionsTitle": "Hable con nuestro equipo.",
      "admissionsText": "Consulte sobre programas, pr\u00f3ximos pasos y verificaci\u00f3n de seguro.",
      "callButton": "Llamar (656) 232-3504",
      "inquiryButton": "Consulta General",
      "relatedEyebrow": "Tratamiento y Terapias",
      "relatedTitle": "Contin\u00fae explorando enfoques de tratamiento.",
      "faqEyebrow": "Preguntas Frecuentes",
      "faqTitle": "Preguntas frecuentes"
    }
  },
  {
    "slug": "relapse-prevention",
    "order": "08",
    "en": {
      "documentTitle": "Relapse Prevention & Psychoeducation in Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Treatment & Therapies \u00b7 Oldsmar, Florida",
      "heading": "Relapse Prevention & Psychoeducation",
      "lead": "Relapse prevention and psychoeducation at Swiss Behavioral Health in Oldsmar, FL, serving Tampa Bay with practical recovery planning and education.",
      "sectionTitle": "Relapse Prevention & Psychoeducation at Swiss Behavioral Health",
      "intro": "Relapse prevention and psychoeducation are important for protecting progress during recovery. These sessions provide knowledge and practical strategies that can strengthen resilience.",
      "focusTitle": "In these sessions, care may focus on:",
      "bullets": [
        "Identify warning signs that could indicate increased risk of relapse.",
        "Develop personalized action plans for difficult or higher-risk moments.",
        "Learn how the mind and body can respond throughout the recovery process."
      ],
      "goal": "The goal is for each person to feel more prepared and confident when facing future challenges, with clear resources to help protect well-being.",
      "admissionsEyebrow": "Admissions",
      "admissionsTitle": "Talk with our team.",
      "admissionsText": "Ask about programs, next steps, and insurance verification.",
      "callButton": "Call (656) 232-3504",
      "inquiryButton": "General Inquiry",
      "relatedEyebrow": "Treatment & Therapies",
      "relatedTitle": "Continue exploring treatment approaches.",
      "faqEyebrow": "Frequently Asked Questions",
      "faqTitle": "Relapse Prevention & Psychoeducation FAQs"
    },
    "es": {
      "documentTitle": "Prevenci\u00f3n de Reca\u00eddas y Psicoeducaci\u00f3n en Oldsmar, FL | Swiss Behavioral Health",
      "eyebrow": "Tratamiento y Terapias \u00b7 Oldsmar, Florida",
      "heading": "Prevenci\u00f3n de Reca\u00eddas y Psicoeducaci\u00f3n",
      "lead": "Atenci\u00f3n en Swiss Behavioral Health en Oldsmar, Florida, para la comunidad de Tampa Bay.",
      "sectionTitle": "Prevenci\u00f3n de Reca\u00eddas y Psicoeducaci\u00f3n en Swiss Behavioral Health",
      "intro": "La prevenci\u00f3n de reca\u00eddas y la psicoeducaci\u00f3n son fundamentales para mantener los avances logrados. Aqu\u00ed se ofrecen conocimientos y estrategias pr\u00e1cticas que fortalecen la resiliencia.",
      "focusTitle": "En estas sesiones:",
      "bullets": [
        "Se identifican se\u00f1ales de alerta que podr\u00edan anticipar una reca\u00edda.",
        "Se elaboran planes de acci\u00f3n personalizados para enfrentar esos momentos.",
        "Se brindan talleres educativos que explican c\u00f3mo funciona la mente y el cuerpo en el proceso de recuperaci\u00f3n."
      ],
      "goal": "El objetivo es que cada persona se sienta preparada y segura frente a los desaf\u00edos futuros, con recursos claros para proteger su bienestar.",
      "admissionsEyebrow": "Admisiones",
      "admissionsTitle": "Hable con nuestro equipo.",
      "admissionsText": "Consulte sobre programas, pr\u00f3ximos pasos y verificaci\u00f3n de seguro.",
      "callButton": "Llamar (656) 232-3504",
      "inquiryButton": "Consulta General",
      "relatedEyebrow": "Tratamiento y Terapias",
      "relatedTitle": "Contin\u00fae explorando enfoques de tratamiento.",
      "faqEyebrow": "Preguntas Frecuentes",
      "faqTitle": "Preguntas frecuentes"
    }
  }
];

export const THERAPIES_BY_SLUG: Record<string, TherapyPageData> = Object.fromEntries(THERAPIES.map(t => [t.slug, t]));

export const THERAPY_COMMON = {
  en: {
    home: "Home",
    treatment: "Treatment & Therapies",
    clinicalNote: "All treatment modalities are selected and delivered based on clinical appropriateness, individual treatment plans, and the highest standards of professional credentialing.",
    insuranceQuestion: "Does insurance cover rehab services?",
    insuranceAnswer: "Coverage depends on the individual insurance plan, clinical recommendations, authorization requirements, and level of care. Swiss Behavioral Health can help explain the verification process; verification is not a guarantee of coverage or payment.",
    durationQuestion: "How long does rehab take?",
    durationAnswer: "There is no single fixed length of treatment. Duration varies according to clinical needs, progress, the recommended level of care, and the individualized treatment plan.",
    startQuestion: "How do I get started?",
    startAnswer: "Contact Swiss Behavioral Health Admissions by phone or through the general inquiry form to discuss next steps. Do not send sensitive health information through the general website form."
  },
  es: {
    home: "Inicio",
    treatment: "Tratamiento y Terapias",
    clinicalNote: "Todas las modalidades de tratamiento se seleccionan y brindan según la pertinencia clínica, los planes de tratamiento individualizados y los más altos estándares de acreditación profesional.",
    insuranceQuestion: "¿El seguro cubre los servicios de rehabilitación?",
    insuranceAnswer: "La cobertura depende del plan de seguro individual, las recomendaciones clínicas, los requisitos de autorización y el nivel de atención. Swiss Behavioral Health puede ayudar a explicar el proceso de verificación; la verificación no garantiza cobertura ni pago.",
    durationQuestion: "¿Cuánto dura el tratamiento?",
    durationAnswer: "No existe una duración única y fija para el tratamiento. Esta varía según las necesidades clínicas, el progreso, el nivel de atención recomendado y el plan de tratamiento individualizado.",
    startQuestion: "¿Cómo puedo comenzar?",
    startAnswer: "Comuníquese con Admisiones de Swiss Behavioral Health por teléfono o mediante el formulario de consulta general para conversar sobre los próximos pasos. No envíe información médica sensible mediante el formulario general del sitio web."
  }
};
