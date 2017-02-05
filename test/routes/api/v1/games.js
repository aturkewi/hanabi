import jwt from 'jwt-simple';

describe("Routes: Games", () => {
  const { User, Game } = app.db.models;
  const jwtSecret = app.libs.config.jwtSecret;
  let token;
  let testUser;
  let testGame;

  before(done => {
    Game
      .destroy({ where: {} });
    User
      .destroy({ where: {} })
      .then(() => done());
  })

  beforeEach(done => {
    User
      .create({
        firstName: "Luke",
        lastName: "Ghenco",
        username: "lukeghenco",
        email: "luke@gmail.com",
        password: "12345"
      })
      .then(user => {
        testUser = user;
        token = jwt.encode({ id: user.id }, jwtSecret);
        done();
      });
  });

  afterEach(done => {
    Game
      .destroy({ where: {} });
    User
      .destroy({ where: {} })
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
