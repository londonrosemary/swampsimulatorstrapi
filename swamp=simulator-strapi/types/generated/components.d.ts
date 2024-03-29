import type { Schema, Attribute } from '@strapi/strapi';

export interface PetStatsStatistics extends Schema.Component {
  collectionName: 'components_pet_stats_statistics';
  info: {
    displayName: 'Statistics';
    icon: 'heart';
  };
  attributes: {
    Health: Attribute.Integer;
    Happiness: Attribute.Integer;
    Hunger: Attribute.Integer;
    Thirst: Attribute.Integer;
    Boredom: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pet-stats.statistics': PetStatsStatistics;
    }
  }
}
