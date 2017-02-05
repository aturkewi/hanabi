import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

let db = null;

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = (app) => {
  if (!db) {
    const config = app.libs.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
    db = {
      sequelize,
      Sequelize,
      models: {}
    };
    const dir = path.join(__dirname, "models");
    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      db.models[capitalize(model.name)] = model;
    });
    Object.keys(db.models).forEach(key => {
      db.models[key].associate(db.models);
    });
  }
  return db;
};