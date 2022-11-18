import * as express from "express";
import { TwitterApiV1 } from "../../services/twitterApi";
import { ControllerCore } from "../index";

class SearchController extends ControllerCore {
  private tweeterApi: TwitterApiV1;

  constructor() {
    super();
    this.tweeterApi = new TwitterApiV1();

    this.path = "/search";
    this.router = express.Router();

    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(`${this.path}`, this.searchrequest);
  }

  /**
   * @description GET /search?q=<keyword>&media=<boolean>
   * @param request
   * @param response
   */
  public searchrequest = async (
    request: express.Request<{}, {}, {}, { q: string; media: string }>,
    response: express.Response
  ) => {
    try {
      const keyword: string = request.query.q;
      const shouldHaveMedia = request.query.media === "true";

      const searchResponse = await this.tweeterApi.searchTweets({
        keyword,
        shouldHaveMedia,
      });

      response.status(200);
      return response.send(searchResponse);
    } catch (error) {
      response.status(500);
      response.send({
        code: 500,
        message: "An unexpected error occurred ",
      });
    }
  };
}

export { SearchController };
