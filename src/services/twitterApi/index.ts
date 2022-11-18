import { defaultConfiguration, TITwitterApiConfiguration } from "./config";
import {
  ITwitterApiFormattedSearchResponse,
  ItwitterApiGetTweetDetailsResponse,
  ITwitterApiGetUserFormattedResponse,
  ITwitterApiGetUserResponse,
  ITwitterApiSearchParameter,
  ITwitterApiSearchTweetResponse,
} from "./types";
import Twitter from "twitter";

class TwitterApiV1 {
  private client: Twitter;
  private configuration: TITwitterApiConfiguration;

  constructor() {
    this.configuration = defaultConfiguration;

    this.client = new Twitter({
      consumer_key: process.env.TWITTER_CUSTOMER_KEY || "",
      consumer_secret: process.env.TWITTER_CUSTOMER_SECRET || "",
      access_token_key: process.env.TWITTER_TOKEN || "",
      access_token_secret: process.env.TWITTER_TOKEN_SECRET || "",
    });
  }

  async searchTweets(
    parameter: ITwitterApiSearchParameter
  ): Promise<ITwitterApiFormattedSearchResponse[]> {
    const queryParam = {
      q: parameter.keyword,
      lang: parameter.language,
      result_type: "popular",
    };

    const response = (await this.client.get(
      this.configuration.api.endpoint.searchTweet,
      queryParam
    )) as ITwitterApiSearchTweetResponse;

    return await this.formatSearchTweetResponse(
      response,
      parameter.shouldHaveMedia
    );
  }

  private async getTweetDetails(
    tweetId: string
  ): Promise<ItwitterApiGetTweetDetailsResponse> {
    const response = (await this.client.get(
      this.configuration.api.endpoint.getTweetDetails,
      {
        id: tweetId,
        tweet_mode: "extended",
      }
    )) as ItwitterApiGetTweetDetailsResponse;

    return response;
  }

  private formatTweetFullText(fullText: string): {
    text: string;
    tweetUrl: string;
  } {
    const lastIndexOfSpace = fullText.lastIndexOf(" ");

    const text = fullText.substring(0, lastIndexOfSpace);

    const tweetUrl = fullText.substring(lastIndexOfSpace);
    return { text, tweetUrl };
  }

  private async formatSearchTweetResponse(
    searchResponse: ITwitterApiSearchTweetResponse,
    shouldHaveMedia: boolean
  ): Promise<ITwitterApiFormattedSearchResponse[]> {
    const formattedTweets: ITwitterApiFormattedSearchResponse[] = [];

    for (const tweet of searchResponse.statuses) {
      if (shouldHaveMedia && !tweet.extended_entities) {
        continue;
      }

      const tweetDetails = await this.getTweetDetails(tweet.id_str);

      const { text, tweetUrl } = await this.formatTweetFullText(
        tweetDetails.full_text
      );

      const formattedTweet: ITwitterApiFormattedSearchResponse = {
        tweetText: text,
        tweetAuthor: {
          id: tweetDetails.user.id_str,
          name: tweetDetails.user.name,
          screenName: tweetDetails.user.screen_name,
        },
        tweetUrl: tweetUrl,
        statistics: {
          tweetLikeCount: tweetDetails.retweet_count,
          tweetRetweetCount: tweetDetails.favorite_count,
        },
        medias: tweetDetails.extended_entities?.media.map(
          (media) => media.media_url
        ),
      };

      formattedTweets.push(formattedTweet);
    }

    return formattedTweets;
  }

  async getUser(userId: string): Promise<ITwitterApiGetUserFormattedResponse> {
    const response = (await this.client.get(
      this.configuration.api.endpoint.getUser,
      {
        user_id: userId,
      }
    )) as ITwitterApiGetUserResponse;

    return {
      id: response.id_str,
      username: response.name,
      screenName: response.screen_name,
      description: response.description,
      location: response.location,
      language: response.lang,
      statistics: {
        followersCount: response.followers_count,
        friendsCount: response.friends_count,
        favouritesCount: response.favourites_count,
      },
      profile: {
        image: response.profile_image_url_https,
        banner: response.profile_banner_url,
      },
      url: response.url,
      createdAt: response.created_at,
    };
  }
}
export { TwitterApiV1 };
