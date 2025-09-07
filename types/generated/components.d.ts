import type { Schema, Struct } from '@strapi/strapi';

export interface HeroSliderSliderItems extends Struct.ComponentSchema {
  collectionName: 'components_hero_slider_slider_items';
  info: {
    displayName: 'Slider items';
    icon: 'play';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    highlighted_text: Schema.Attribute.String & Schema.Attribute.Required;
    pre_highlight_text: Schema.Attribute.String & Schema.Attribute.Required;
    primary_button_link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    primary_button_text: Schema.Attribute.String & Schema.Attribute.Required;
    secondary_button_link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    secondary_button_text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HowItsWorkSteps extends Struct.ComponentSchema {
  collectionName: 'components_how_its_work_steps';
  info: {
    displayName: 'Steps';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primary_button_link: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ServiceCardsCardItems extends Struct.ComponentSchema {
  collectionName: 'components_service_cards_card_items';
  info: {
    displayName: 'Card-items';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    service_title: Schema.Attribute.String;
  };
}

export interface ServicesListList extends Struct.ComponentSchema {
  collectionName: 'components_services_list_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    Services: Schema.Attribute.Component<'service-cards.card-items', true>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WhySmeOnCallBlock extends Struct.ComponentSchema {
  collectionName: 'components_why_sme_on_call_blocks';
  info: {
    displayName: 'block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature_list_1: Schema.Attribute.String;
    feature_list_2: Schema.Attribute.String;
    feature_list_3: Schema.Attribute.String;
    primary_button_link: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero-slider.slider-items': HeroSliderSliderItems;
      'how-its-work.steps': HowItsWorkSteps;
      'service-cards.card-items': ServiceCardsCardItems;
      'services-list.list': ServicesListList;
      'why-sme-on-call.block': WhySmeOnCallBlock;
    }
  }
}
