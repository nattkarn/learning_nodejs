// import UserService from '../service/user.service.js'

const userController = {
  addUser: (req, res) =>{
    const { name, birthdate} = req.body;
    console.log(`name: ${name}`)
    console.log(`birthdate: ${birthdate}`)
    res.status(201).json({
      success: true,
      timestamp: new Date(),
      data: {
        result: "created",
      },
    });
  },
  getUser: async (req, res) => {
    res.status(200).json({
      success: true,
      timestamp: new Date(),
      data: {
      },
    });
  }
};
export default userController;
