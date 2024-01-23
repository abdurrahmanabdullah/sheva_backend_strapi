import type { Schema, Attribute } from '@strapi/strapi';

export interface FactContent extends Schema.Component {
  collectionName: 'components_fact_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    data: Attribute.String;
    description: Attribute.String;
  };
}

export interface FactName extends Schema.Component {
  collectionName: 'components_fact_names';
  info: {
    displayName: 'name';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface PartnerCard extends Schema.Component {
  collectionName: 'components_partner_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface PartnerName extends Schema.Component {
  collectionName: 'components_partner_names';
  info: {
    displayName: 'Name';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ProgramDescription extends Schema.Component {
  collectionName: 'components_program_descriptions';
  info: {
    displayName: 'description';
    description: '';
  };
  attributes: {
    about: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ProgramProgram extends Schema.Component {
  collectionName: 'components_program_programs';
  info: {
    displayName: 'name';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fact.content': FactContent;
      'fact.name': FactName;
      'hero.hero': HeroHero;
      'partner.card': PartnerCard;
      'partner.name': PartnerName;
      'program.description': ProgramDescription;
      'program.program': ProgramProgram;
    }
  }
}
