module.exports = (app) => {
  if (process.env.NODE_ENV !== "test") {
    app.listen(app.get("port"), () => {
      console.log(`HANABI APP - Port ${app.get("port")}`);
    });
  }
};
