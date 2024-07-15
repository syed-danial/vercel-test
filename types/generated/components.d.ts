import type { Schema, Attribute } from '@strapi/strapi';

export interface BidftaPlusFeature extends Schema.Component {
  collectionName: 'components_bidfta_plus_features';
  info: {
    displayName: 'feature';
    icon: 'award';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BinStoreLocations extends Schema.Component {
  collectionName: 'components_bin_store_locations';
  info: {
    displayName: 'locations';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    nickName: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
    hours: Attribute.Text;
    mondayPrice: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<7>;
    tuesdayPrice: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<5>;
    wednesdayPrice: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<3>;
    thursdayPrice: Attribute.Decimal & Attribute.DefaultTo<2>;
    fridayPrice: Attribute.Decimal &
      Attribute.Required &
      Attribute.DefaultTo<1>;
    url: Attribute.String & Attribute.Required;
  };
}

export interface CommonFaq extends Schema.Component {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Blocks;
  };
}

export interface CommonFeedback extends Schema.Component {
  collectionName: 'components_common_feedbacks';
  info: {
    displayName: 'Feedback';
    icon: 'question';
    description: '';
  };
  attributes: {
    review: Attribute.Text;
    name: Attribute.String;
  };
}

export interface CommonHero extends Schema.Component {
  collectionName: 'components_common_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    title: Attribute.Component<'elements.text'>;
  };
}

export interface CommonIconItem extends Schema.Component {
  collectionName: 'components_common_icon_items';
  info: {
    displayName: 'Icon Item';
    description: '';
  };
  attributes: {
    icon: Attribute.Component<'elements.icon'> & Attribute.Required;
    name: Attribute.Component<'elements.text'>;
    description: Attribute.Component<'elements.text'>;
    href: Attribute.Text;
  };
}

export interface CommonImageItem extends Schema.Component {
  collectionName: 'components_common_image_items';
  info: {
    displayName: 'Image Item';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.Component<'elements.text'> & Attribute.Required;
    href: Attribute.Text & Attribute.Required;
    gradient: Attribute.Component<'elements.gradient'>;
  };
}

export interface CommonSection extends Schema.Component {
  collectionName: 'components_common_sections';
  info: {
    displayName: 'Section';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsBanner extends Schema.Component {
  collectionName: 'components_elements_banners';
  info: {
    displayName: 'Banner';
    icon: 'x-ray';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.Component<'elements.text'>;
    subtitle: Attribute.Component<'elements.text'>;
    backgroundColor: Attribute.String;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    color: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    variant: Attribute.Enumeration<['solid', 'outline', 'gradient']> &
      Attribute.DefaultTo<'solid'>;
    href: Attribute.Text;
    textColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    border: Attribute.Enumeration<['rectangle', 'rounded']> &
      Attribute.DefaultTo<'rectangle'>;
    gradient: Attribute.Component<'elements.gradient'>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['solid', 'gradient', 'image']> &
      Attribute.Required;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    gradient: Attribute.Component<'elements.gradient'>;
    image: Attribute.Media<'images'>;
    edges: Attribute.Enumeration<['round', 'flat']> &
      Attribute.Required &
      Attribute.DefaultTo<'round'>;
    mobileType: Attribute.Enumeration<['solid', 'gradient', 'image']>;
    mobileColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    mobileGradient: Attribute.Component<'elements.gradient'>;
    mobileImage: Attribute.Media<'images'>;
    mobileEdges: Attribute.Enumeration<['round', 'flat']>;
    href: Attribute.Text;
    position: Attribute.Enumeration<
      [
        'center',
        'bottom',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top'
      ]
    > &
      Attribute.DefaultTo<'center'>;
  };
}

export interface ElementsGradient extends Schema.Component {
  collectionName: 'components_elements_gradients';
  info: {
    displayName: 'Gradient';
  };
  attributes: {
    start: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    end: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    degree: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

export interface ElementsIcon extends Schema.Component {
  collectionName: 'components_elements_icons';
  info: {
    displayName: 'Icon';
    icon: 'seed';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    size: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<48>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    src: Attribute.Media<'images'> & Attribute.Required;
    objectFit: Attribute.Enumeration<
      ['contain', 'cover', 'fill', 'none', 'scale-down']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'cover'>;
    position: Attribute.Enumeration<
      [
        'center',
        'bottom',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'center'>;
    borderRadius: Attribute.Enumeration<
      ['none', 'sm', 'md', 'lg', 'xl', 'full']
    >;
    href: Attribute.Text;
  };
}

export interface ElementsRichBody extends Schema.Component {
  collectionName: 'components_elements_rich_bodies';
  info: {
    displayName: 'RichBody';
    description: '';
  };
  attributes: {
    body: Attribute.RichText & Attribute.Required;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    fontSize: Attribute.Integer;
    font: Attribute.Enumeration<['raleway', 'lato', 'leagueSpartan']>;
    align: Attribute.Enumeration<['left', 'center', 'right', 'justify']>;
  };
}

export interface ElementsText extends Schema.Component {
  collectionName: 'components_elements_texts';
  info: {
    displayName: 'Short Text';
    icon: 'text-height';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    fontSize: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    align: Attribute.Enumeration<['left', 'center', 'right', 'justify']>;
    tag: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']>;
    weight: Attribute.Enumeration<['extrabold', 'bold', 'semi-bold', 'normal']>;
    fullWidth: Attribute.Boolean;
    href: Attribute.Text;
    width: Attribute.Integer;
    font: Attribute.Enumeration<['raleway', 'lato', 'leagueSpartan']> &
      Attribute.Required &
      Attribute.DefaultTo<'raleway'>;
    label2: Attribute.String;
    color2: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    direction: Attribute.Enumeration<['inline', 'stack']> &
      Attribute.DefaultTo<'inline'>;
    mobileFontSize: Attribute.Integer;
  };
}

export interface StructureColumns extends Schema.Component {
  collectionName: 'components_structure_columns';
  info: {
    displayName: 'Columns';
  };
  attributes: {};
}

export interface StructureRows extends Schema.Component {
  collectionName: 'components_structure_rows';
  info: {
    displayName: 'Rows';
  };
  attributes: {
    Columns: Attribute.Component<'structure.columns', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'bidfta-plus.feature': BidftaPlusFeature;
      'bin-store.locations': BinStoreLocations;
      'common.faq': CommonFaq;
      'common.feedback': CommonFeedback;
      'common.hero': CommonHero;
      'common.icon-item': CommonIconItem;
      'common.image-item': CommonImageItem;
      'common.section': CommonSection;
      'elements.banner': ElementsBanner;
      'elements.button': ElementsButton;
      'elements.card': ElementsCard;
      'elements.gradient': ElementsGradient;
      'elements.icon': ElementsIcon;
      'elements.image': ElementsImage;
      'elements.rich-body': ElementsRichBody;
      'elements.text': ElementsText;
      'structure.columns': StructureColumns;
      'structure.rows': StructureRows;
    }
  }
}
