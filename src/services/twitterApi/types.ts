interface ITwitterApiSearchParameter {
  keyword: string;
  language?: string;
  locale?: string;
  shouldHaveMedia: boolean;
}

interface ITwitterApiSearchTweetQueryParam {
  q: string;
  include_ext_edit_control?: boolean;
  geocode?: string;
  lang?: string;
  locale?: string;
  result_type?: string;
  count?: number;
  until?: string;
  since_id?: string;
  max_id?: string;
  include_entities?: boolean;
}

interface ITwitterApiSearchTweetResponse {
  statuses: Array<{
    created_at: string;
    id: number;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: {
      hashtags: Array<{
        text: string;
        indices: Array<number>;
      }>;
      symbols: Array<any>;
      user_mentions: Array<{
        screen_name: string;
        name: string;
        id: number;
        id_str: string;
        indices: Array<number>;
      }>;
      urls: Array<{
        url: string;
        expanded_url: string;
        display_url: string;
        indices: Array<number>;
      }>;
      media?: Array<{
        id: number;
        id_str: string;
        indices: Array<number>;
        media_url: string;
        media_url_https: string;
        url: string;
        display_url: string;
        expanded_url: string;
        type: string;
        sizes: {
          thumb: {
            w: number;
            h: number;
            resize: string;
          };
          medium: {
            w: number;
            h: number;
            resize: string;
          };
          small: {
            w: number;
            h: number;
            resize: string;
          };
          large: {
            w: number;
            h: number;
            resize: string;
          };
        };
        source_status_id?: number;
        source_status_id_str?: string;
        source_user_id?: number;
        source_user_id_str?: string;
      }>;
    };
    metadata: {
      result_type: string;
      iso_language_code: string;
    };
    source: string;
    in_reply_to_status_id: any;
    in_reply_to_status_id_str: any;
    in_reply_to_user_id: any;
    in_reply_to_user_id_str: any;
    in_reply_to_screen_name: any;
    user: {
      id: number;
      id_str: string;
      name: string;
      screen_name: string;
      location: string;
      description: string;
      url: string;
      entities: {
        url: {
          urls: Array<{
            url: string;
            expanded_url: string;
            display_url: string;
            indices: Array<number>;
          }>;
        };
        description: {
          urls: Array<{
            url: string;
            expanded_url: string;
            display_url: string;
            indices: Array<number>;
          }>;
        };
      };
      protected: boolean;
      followers_count: number;
      friends_count: number;
      listed_count: number;
      created_at: string;
      favourites_count: number;
      utc_offset: any;
      time_zone: any;
      geo_enabled: boolean;
      verified: boolean;
      statuses_count: number;
      lang: any;
      contributors_enabled: boolean;
      is_translator: boolean;
      is_translation_enabled: boolean;
      profile_background_color: string;
      profile_background_image_url: string;
      profile_background_image_url_https: string;
      profile_background_tile: boolean;
      profile_image_url: string;
      profile_image_url_https: string;
      profile_banner_url: string;
      profile_link_color: string;
      profile_sidebar_border_color: string;
      profile_sidebar_fill_color: string;
      profile_text_color: string;
      profile_use_background_image: boolean;
      has_extended_profile: boolean;
      default_profile: boolean;
      default_profile_image: boolean;
      following: boolean;
      follow_request_sent: boolean;
      notifications: boolean;
      translator_type: string;
      withheld_in_countries: Array<any>;
    };
    geo: any;
    coordinates: any;
    place: any;
    contributors: any;
    is_quote_status: boolean;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    possibly_sensitive?: boolean;
    lang: string;
    extended_entities?: {
      media: Array<{
        id: number;
        id_str: string;
        indices: Array<number>;
        media_url: string;
        media_url_https: string;
        url: string;
        display_url: string;
        expanded_url: string;
        type: string;
        sizes: {
          thumb: {
            w: number;
            h: number;
            resize: string;
          };
          medium: {
            w: number;
            h: number;
            resize: string;
          };
          small: {
            w: number;
            h: number;
            resize: string;
          };
          large: {
            w: number;
            h: number;
            resize: string;
          };
        };
        source_status_id?: number;
        source_status_id_str?: string;
        source_user_id?: number;
        source_user_id_str?: string;
        video_info?: {
          aspect_ratio: Array<number>;
          duration_millis: number;
          variants: Array<{
            bitrate?: number;
            content_type: string;
            url: string;
          }>;
        };
        additional_media_info?: {
          monetizable: boolean;
        };
      }>;
    };
  }>;
  search_metadata: {
    completed_in: number;
    max_id: number;
    max_id_str: string;
    next_results: string;
    query: string;
    count: number;
    since_id: number;
    since_id_str: string;
  };
}

interface ITwitterApiFormattedSearchResponse {
  tweetText: string;
  tweetAuthor: {
    id: string;
    name: string;
    screenName: string;
  };
  tweetUrl: string;
  statistics: {
    tweetLikeCount: number;
    tweetRetweetCount: number;
  };

  medias: string[];
}

interface ItwitterApiGetTweetDetailsResponse {
  created_at: string;
  id: number;
  id_str: string;
  full_text: string;
  truncated: boolean;
  display_text_range: Array<number>;
  entities: {
    hashtags: Array<any>;
    symbols: Array<any>;
    user_mentions: Array<any>;
    urls: Array<any>;
    media: Array<{
      id: number;
      id_str: string;
      indices: Array<number>;
      media_url: string;
      media_url_https: string;
      url: string;
      display_url: string;
      expanded_url: string;
      type: string;
      sizes: {
        thumb: {
          w: number;
          h: number;
          resize: string;
        };
        large: {
          w: number;
          h: number;
          resize: string;
        };
        medium: {
          w: number;
          h: number;
          resize: string;
        };
        small: {
          w: number;
          h: number;
          resize: string;
        };
      };
    }>;
  };
  extended_entities: {
    media: Array<{
      id: number;
      id_str: string;
      indices: Array<number>;
      media_url: string;
      media_url_https: string;
      url: string;
      display_url: string;
      expanded_url: string;
      type: string;
      sizes: {
        thumb: {
          w: number;
          h: number;
          resize: string;
        };
        large: {
          w: number;
          h: number;
          resize: string;
        };
        medium: {
          w: number;
          h: number;
          resize: string;
        };
        small: {
          w: number;
          h: number;
          resize: string;
        };
      };
    }>;
  };
  source: string;
  in_reply_to_status_id: any;
  in_reply_to_status_id_str: any;
  in_reply_to_user_id: any;
  in_reply_to_user_id_str: any;
  in_reply_to_screen_name: any;
  user: {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url: string;
    entities: {
      url: {
        urls: Array<{
          url: string;
          expanded_url: string;
          display_url: string;
          indices: Array<number>;
        }>;
      };
      description: {
        urls: Array<{
          url: string;
          expanded_url: string;
          display_url: string;
          indices: Array<number>;
        }>;
      };
    };
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset: any;
    time_zone: any;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang: any;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following: boolean;
    follow_request_sent: boolean;
    notifications: boolean;
    translator_type: string;
    withheld_in_countries: Array<any>;
  };
  geo: any;
  coordinates: any;
  place: any;
  contributors: any;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  possibly_sensitive_appealable: boolean;
  lang: string;
}

interface ITwitterApiGetUserResponse {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  profile_location: any;
  description: string;
  url: string;
  entities: {
    url: {
      urls: Array<{
        url: string;
        expanded_url: string;
        display_url: string;
        indices: Array<number>;
      }>;
    };
    description: {
      urls: Array<any>;
    };
  };
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: any;
  time_zone: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: any;
  status: {
    created_at: string;
    id: number;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: {
      hashtags: Array<any>;
      symbols: Array<any>;
      user_mentions: Array<any>;
      urls: Array<any>;
    };
    source: string;
    in_reply_to_status_id: number;
    in_reply_to_status_id_str: string;
    in_reply_to_user_id: number;
    in_reply_to_user_id_str: string;
    in_reply_to_screen_name: string;
    geo: any;
    coordinates: any;
    place: any;
    contributors: any;
    is_quote_status: boolean;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    lang: string;
  };
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
  withheld_in_countries: Array<any>;
}

interface ITwitterApiGetUserFormattedResponse {
  id: string;
  username: string;
  screenName: string;
  description: string;
  location: string;
  language: string;
  statistics: {
    followersCount: number;
    friendsCount: number;
    favouritesCount: number;
  };
  profile: {
    image: string;
    banner: string;
  };
  url: string;
  createdAt: string;
}

export {
  ITwitterApiSearchParameter,
  ITwitterApiSearchTweetQueryParam,
  ITwitterApiSearchTweetResponse,
  ITwitterApiFormattedSearchResponse,
  ItwitterApiGetTweetDetailsResponse,
  ITwitterApiGetUserResponse,
  ITwitterApiGetUserFormattedResponse,
};
