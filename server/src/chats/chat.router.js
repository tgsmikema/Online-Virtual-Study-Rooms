const { Router } = require("express")
const ChatController = require("./chat.controller")
const UserController = require("../users/user.controller")
const { queryValidator } = require("../middlewares/queryValidator")

const chatController = new ChatController();
const userController = new UserController();

const router = Router({ mergeParams: true });

router.get("/", [queryValidator(["myId", "customerId"])], async (req, res) => {
    const { myId, customerId } = req.query;
    const user = await userController.findById(myId);
    const customer = await userController.findById(customerId);
    if (user === null || customer === null) {
        res.status(404).json("User or customer is not exist");
    } else {
        res.json(await chatController.getChat(myId, customerId));
    }
})



module.exports = router;