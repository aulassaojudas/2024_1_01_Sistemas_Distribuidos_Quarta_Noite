const { v4: uuidv4 } = require("uuid");
const UserService = require("./user.service");
const userService = new UserService();
const { GenericException } = require("../generic-exception.js");
const UserDTO = require("./user.dto.js");

class UserController {
  createUser(req, res) {
    req.body.id = uuidv4();
    try {
      res.json(userService.create(new UserDTO(req.body, true)));
    } catch(error) {
      res.status(400).json({ msg: error.message });
    }
  }

  getAllUsers(req, res) {
    const users = userService.findAll();
    res.json(users);
  }

  getUserById(req, res) {
    const { id } = req.params;
    const user = userService.findOne(id);

    if (!user) {
      return res.status(404).send("register not found");
    }
    res.json(user);
  }

  updateUser(req, res) {
    req.body.id = req.params.id;
    const updatedUser = userService.update(new UserDTO(req.body));
    if (!updatedUser) return res.status(404).send("User not found");
    res.status(200).json(updatedUser);
  }

  deleteUser(req, res) {
    const { id } = req.params;
    const result = userService.remove(id);
    if (!result) return res.status(404).send("User not found");
    res.status(204).send();
  }
}

module.exports = UserController;
