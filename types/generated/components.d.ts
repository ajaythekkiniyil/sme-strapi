import type { Schema, Struct } from '@strapi/strapi';

export interface BenefitItemLists extends Struct.ComponentSchema {
  collectionName: 'components_benefit_item_lists';
  info: {
    displayName: 'lists';
  };
  attributes: {
    benefit: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BenefitItemSection extends Struct.ComponentSchema {
  collectionName: 'components_benefit_item_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    benefits_heading: Schema.Attribute.String & Schema.Attribute.Required;
    benfits_list: Schema.Attribute.Component<'benefit-item.lists', true>;
  };
}

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

export interface CommonBlocksGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_common_blocks_get_in_touches';
  info: {
    displayName: 'get-in-touch';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    location: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Get in Touch'>;
  };
}

export interface CommonBlocksHeader extends Struct.ComponentSchema {
  collectionName: 'components_common_blocks_headers';
  info: {
    displayName: 'header';
    icon: 'apps';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    primary_button_link: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonBlocksImageSlider extends Struct.ComponentSchema {
  collectionName: 'components_common_blocks_image_sliders';
  info: {
    displayName: 'image-slider';
  };
  attributes: {
    image_slider: Schema.Attribute.Media<'images', true>;
  };
}

export interface CommonBlocksImageTextAlternative
  extends Struct.ComponentSchema {
  collectionName: 'components_common_blocks_image_text_alternatives';
  info: {
    displayName: 'image-text-alternative';
    icon: 'plus';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    primary_button_link: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonBlocksJobPost extends Struct.ComponentSchema {
  collectionName: 'components_common_blocks_job_posts';
  info: {
    displayName: 'job-post';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    job_title: Schema.Attribute.String;
    location: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View Details'>;
    sub_title: Schema.Attribute.String;
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
    section_title: Schema.Attribute.String & Schema.Attribute.Required;
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
    highlighted_text: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface HowItWorksHowWeWorkTogethe extends Struct.ComponentSchema {
  collectionName: 'components_how_it_works_how_we_work_togethes';
  info: {
    displayName: 'How We Work Together';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    steps: Schema.Attribute.Component<'how-it-works.steps', true>;
  };
}

export interface HowItWorksSteps extends Struct.ComponentSchema {
  collectionName: 'components_how_it_works_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    step: Schema.Attribute.String & Schema.Attribute.Required;
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
    services_card: Schema.Attribute.Component<'our-services.cards', true>;
  };
}

export interface OurValuesCards extends Struct.ComponentSchema {
  collectionName: 'components_our_values_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    value_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_our_values_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    Values: Schema.Attribute.Component<'our-values.cards', true>;
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
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'benefit-item.lists': BenefitItemLists;
      'benefit-item.section': BenefitItemSection;
      'bulltet-points.text': BulltetPointsText;
      'common-blocks.get-in-touch': CommonBlocksGetInTouch;
      'common-blocks.header': CommonBlocksHeader;
      'common-blocks.image-slider': CommonBlocksImageSlider;
      'common-blocks.image-text-alternative': CommonBlocksImageTextAlternative;
      'common-blocks.job-post': CommonBlocksJobPost;
      'experts.profile-card': ExpertsProfileCard;
      'experts.section': ExpertsSection;
      'faq.question-and-answer': FaqQuestionAndAnswer;
      'hero-section.sliders': HeroSectionSliders;
      'how-it-works.cards': HowItWorksCards;
      'how-it-works.how-we-work-togethe': HowItWorksHowWeWorkTogethe;
      'how-it-works.steps': HowItWorksSteps;
      'our-services.cards': OurServicesCards;
      'our-services.section': OurServicesSection;
      'our-values.cards': OurValuesCards;
      'our-values.section': OurValuesSection;
      'testimonials.card': TestimonialsCard;
      'why-sme-on-call.block': WhySmeOnCallBlock;
    }
  }
}
