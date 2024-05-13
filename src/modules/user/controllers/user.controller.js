import UserService from '../service/user.service.js'

const userController = {
  addUser: async (req, res) =>{
    const { name, birthdate} = req.body;
    console.log(`{ "name": "${name}" , "birthdate": "${birthdate}" }`)
    const created = await UserService.create({name , birthdate: new Date(birthdate)})
    res.status(201).json({
      success: true,
      timestamp: new Date(),
      data: {
        result: "created",
        data: created
      },
    });
  },
  getUser: async (req, res) => {
    const GetAll = await UserService.getAll()
    res.status(200).json({
      success: true,
      timestamp: new Date(),
      data: GetAll
    });
  }
};
export default userController;
