import * as express from "express";
import { TwitterApiV1 } from "../../services/twitterApi";
import { ControllerCore } from "../";

class UserController extends ControllerCore {
  private tweeterApi: TwitterApiV1;

  constructor() {
    super();
    this.tweeterApi = new TwitterApiV1();

    this.path = "/users";
    this.router = express.Router();

    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(`${this.path}/:user_id`, this.getUserRequest);
  }

  /**
   * @description GET /users/<user_id>
   * @param request
   * @param response
   */
  public getUserRequest = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const userResponse = await this.tweeterApi.getUser(
        request.params.user_id
      );

      response.status(200);
      response.send(userResponse);
    } catch (error) {
      response.status(500);
      response.send({
        code: 500,
        message: "An unexpected error occurred ",
      });
    }
  };
}

export { UserController };
