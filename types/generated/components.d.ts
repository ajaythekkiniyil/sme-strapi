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
      'hero-section.sliders': HeroSectionSliders;
      'how-it-works.cards': HowItWorksCards;
      'our-services.cards': OurServicesCards;
      'our-services.section': OurServicesSection;
      'why-sme-on-call.block': WhySmeOnCallBlock;
    }
  }
}
