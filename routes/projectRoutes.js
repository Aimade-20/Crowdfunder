const express = require("express")
const router = express.Router()

const projectController = require("../controllers/projectController")
const authMiddleware = require("../middlewares/authMiddleware")
const roleMiddleware =require("../middlewares/roleMiddleware")

router.post("/",authMiddleware,roleMiddleware("owner"),projectController.createProject)
router.get("/my-projects",authMiddleware,roleMiddleware("owner"),projectController.getMyProjects)
router.put("/:id",authMiddleware,roleMiddleware("owner"),projectController.updateProject)
router.delete("/:id",authMiddleware,roleMiddleware("owner"),projectController.deleteProject)
router.put("/:id",authMiddleware,roleMiddleware("owner"),projectController.closeProject)
router.get("/:id/investments",authMiddleware,roleMiddleware("owner"),projectController.getProjectInvestments)

module.exports = router