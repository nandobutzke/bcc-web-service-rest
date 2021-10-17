import { Router } from "express";

import CreateUserService from "../services/CreateUserService";
import DeleteUserService from "../services/DeleteUserService";
import UpdateUserService from "../services/UpdateUserService";

const usersRouter = Router();

usersRouter.post("/", async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const usersUpdate = new UpdateUserService;

    await usersUpdate.execute({
      id,
      name,
      email,
      password,
    });

    return response.json(`the product with ${id} has been altered.`);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const usersUpdate = new DeleteUserService;

    await usersUpdate.execute({
      id
    });

    return response.json(`the product with ${id} has been deleted.`);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
