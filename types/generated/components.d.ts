import type { Schema, Struct } from '@strapi/strapi';

export interface BulltetPointsText extends Struct.ComponentSchema {
  collectionName: 'components_bulltet_points_texts';
  info: {
    displayName: 'text';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ExpertsProfileCard extends Struct.ComponentSchema {
  collectionName: 'components_experts_profile_cards';
  info: {
    displayName: 'profile-card';
  };
  attributes: {
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profile_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    profile_summary: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ExpertsSection extends Struct.ComponentSchema {
  collectionName: 'components_experts_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    profile: Schema.Attribute.Component<'experts.profile-card', true>;
  };
}

export interface FaqQuestionAndAnswer extends Struct.ComponentSchema {
  collectionName: 'components_faq_question_and_answers';
  info: {
    displayName: 'question_and_answer';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroSectionSliders extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_sliders';
  info: {
    displayName: 'sliders';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    hero_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    highlighted_text: Schema.Attribute.Text & Schema.Attribute.Required;
    primary_button_link: Schema.Attribute.String & Schema.Attribute.Required;
    primary_button_text: Schema.Attribute.String & Schema.Attribute.Required;
    secondary_button_link: Schema.Attribute.String & Schema.Attribute.Required;
    secondary_button_text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HowItWorksCards extends Struct.ComponentSchema {
  collectionName: 'components_how_it_works_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    primary_button_link: Schema.Attribute.String & Schema.Attribute.Required;
    primary_button_text: Schema.Attribute.String & Schema.Attribute.Required;
    step_description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    step_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurServicesCards extends Struct.ComponentSchema {
  collectionName: 'components_our_services_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    service_title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface OurServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_our_services_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services_card: Schema.Attribute.Component<'our-services.cards', true>;
  };
}

export interface TestimonialsCard extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    author_name: Schema.Attribute.String & Schema.Attribute.Required;
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    testimonial_text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface WhySmeOnCallBlock extends Struct.ComponentSchema {
  collectionName: 'components_why_sme_on_call_blocks';
  info: {
    displayName: 'block';
  };
  attributes: {
    bullet_points: Schema.Attribute.Component<'bulltet-points.text', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    primary_button_link: Schema.Attribute.String & Schema.Attribute.Required;
    primary_button_text: Schema.Attribute.String & Schema.Attribute.Required;
    why_sme_on_call_description: Schema.Attribute.Text &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bulltet-points.text': BulltetPointsText;
      'experts.profile-card': ExpertsProfileCard;
      'experts.section': ExpertsSection;
      'faq.question-and-answer': FaqQuestionAndAnswer;
      'hero-section.sliders': HeroSectionSliders;
      'how-it-works.cards': HowItWorksCards;
      'our-services.cards': OurServicesCards;
      'our-services.section': OurServicesSection;
      'testimonials.card': TestimonialsCard;
      'why-sme-on-call.block': WhySmeOnCallBlock;
    }
  }
}
