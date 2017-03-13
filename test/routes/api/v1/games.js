import jwt from 'jwt-simple';
const User = require('../../../../server/models/user');
const Game = require('../../../../server/models/game');

describe("Routes: Games", () => {
  const jwtSecret = app.libs.config.jwtSecret;
  let token;
  let testUser;
  let testGame;

  before(done => {
    
    Game
      .where('id', '!=', '0')
      .destroy()
    User
      .where('id', '!=', '0')
      .destroy()
      .then(() => done());
  })

  beforeEach(done => {
    User
      .where('id', '!=', '0')
      .destroy()
      .then(() => {
        User
          .forge({
            first_name: "Luke",
            last_name: "Ghenco",
            username: "lukeghenco",
            email: "luke@gmail.com",
            password: "password"
          })
          .save()
          .then(user => {
            testUser = user.prepUserForAuth()
            token = jwt.encode({ id: testUser.id }, jwtSecret);
            done();
          });
      })
  });

  afterEach(done => {
    Game
      .where('id', '!=', '0')
      .destroy()
    User
      .where('id', '!=', '0')
      .destroy()
      .then(() => done());
  })

  describe("POST /games", () => {
    describe("status 200", () => {
      it("creates a new game and and associates a user to the game with a hand", done => {
        request
          .post("/api/v1/games")
          .set("Authorization", `JWT ${token}`)
          .send({ title: "Flatiron instructors game" })
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.be.an('object');
            expect(res.body.title).to.eql("Flatiron instructors game");
            expect(res.body.currentPlayerId).to.eql(testUser.id);
            expect(res.body.hands).to.be.an('array');
            expect(res.body.clueCounter).to.eql(8);
            expect(res.body.missesRemaining).to.eql(3);
            done(err);
          });
      });
    });
  });


});
