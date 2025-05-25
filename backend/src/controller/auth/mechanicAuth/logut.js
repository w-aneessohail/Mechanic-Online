const blacklistedTokens = new Set();

const mech_logoutController = {
  logout: async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      blacklistedTokens.add(token);
      res.json({
        message: "User logged out successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong on the server",
      });
    }
  },
};

export default mech_logoutController;
