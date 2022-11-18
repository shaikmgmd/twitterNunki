interface IITwitterApiConfiguration {
  api: {
    endpoint: {
      searchTweet: string;
      getTweetDetails: string;
      getUser: string;
    };
    baseUrl: string;
  };
}

type TITwitterApiConfiguration = IITwitterApiConfiguration;

const defaultConfiguration: IITwitterApiConfiguration = {
  api: {
    endpoint: {
      searchTweet: "/search/tweets.json",
      getTweetDetails: "/statuses/show.json",
      getUser: "/users/show.json",
    },
    baseUrl: "https://api.twitter.com/1.1",
  },
};

export {
  IITwitterApiConfiguration,
  TITwitterApiConfiguration,
  defaultConfiguration,
};
