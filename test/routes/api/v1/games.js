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
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.a('object');
            // expect(res.body.user.firstName).to.eql("Avidor");
            // expect(res.body.user.lastName).to.eql("Turkewitz");
            // expect(res.body.user.username).to.eql("aturkewi");
            // expect(res.body.user.email).to.eql("avidor@gmail.com");
            // expect(res.body.token).to.exist;
            done(err);
          });
      });
    });
  });


});
