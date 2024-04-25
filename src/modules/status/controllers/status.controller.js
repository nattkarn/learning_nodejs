const StatusController = {
  getStatus: (req, res) => {
    res.status(200).json({
      success: true,
      data: {
        timestamp: new Date(),
      },
    });
  },
};
export default StatusController;