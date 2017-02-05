module.exports = (app) => {
  if (process.env.NODE_ENV !== "test") {
    app.db.sequelize.sync().done(() => {
      app.listen(app.get("port"), () => {
        console.log(`HANABI APP - Port ${app.get("port")}`);
      });
    });
  }

  if (process.env.NODE_ENV === "test") {
    app.db.sequelize.sync();
  };
};
