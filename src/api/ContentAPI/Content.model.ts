export type ContentLinksModel = {
  thumbnail: { href: string };
  retire: { href: string };
  draft: { href: string };
  self: { href: string };
  type: { href: string };
};

export type ContentElementsModel = {
  heading: { elementType: string; value: string };
  author: { elementType: string; value: string };
  body: {
    values: string[];
    elementType: string;
  };
  date: { elementType: string; value: string };
  mainImage: {
    elementType: string;
    value: {
      leadImage: {
        mode: string;
        profiles: string[];
        renditions: {
          lead: {
            source: string;
            width: number;
            height: number;
            transform: {
              scale: number;
              crop: { x: number; y: number; width: number; height: number };
            };
            url: string;
          };
          card: {
            source: string;
            width: number;
            height: number;
            transform: {
              scale: number;
              crop: { x: number; y: number; width: number; height: number };
            };
            url: string;
          };
          default: {
            width: number;
            source: string;
            height: number;
            url: string;
          };
        };
        asset: {
          fileName: string;
          altText: string;
          fileSize: number;
          width: number;
          mediaType: string;
          id: string;
          resourceUri: string;
          height: number;
        };
        elementType: string;
        url: string;
      };
    };
  };
  leadImageCaption: { elementType: string; value: string };
  leadImageCredit: { elementType: string };
};

export type ContentDTO = {
  reviewHistory: string[];
  keywords: string[];
  libraryId: string;
  creatorId: string;
  description: string;
  type: string;
  locale: string;
  lastModifierId: string;
  links: ContentLinksModel;
  id: string;
  systemModified: string;
  rev: string;
  thumbnail: {
    id: string;
    url: string;
  };
  kind: string[];
  created: string;
  classification: string;
  tags: string[];
  elements: ContentElementsModel;
  name: string;
  typeId: string;
  lastModified: string;
  status: string;
};
