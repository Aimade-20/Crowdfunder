const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

router.post(
  "/",
  authMiddleware,
  projectController.createProject
);

router.get(
  "/my-projects",
  authMiddleware,
  roleMiddleware("OWNER"),
  projectController.getMyProjects
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("OWNER"),
  projectController.updateProject
);

router.patch(
  "/:id/close",
  authMiddleware,
  roleMiddleware("OWNER"),
  projectController.closePorject
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("OWNER"),
  projectController.deleteProject
);

router.get(
  "/:id/investments",
  authMiddleware,
  roleMiddleware("OWNER"),
  projectController.getProjectInvetors
);
module.exports = router;
