import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero-section.sliders': HeroSectionSliders;
      'how-it-works.cards': HowItWorksCards;
    }
  }
}
