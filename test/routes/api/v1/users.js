import jwt from 'jwt-simple';

describe("Routes: Users", () => {
  const User = app.db.models.User;
  const jwtSecret = app.libs.config.jwtSecret;
  let token;
  let testUser;

  before(done => {
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
    User
      .destroy({ where: {} })
      .then(() => done());
  })

  describe("POST /users", () => {
    describe("status 200", () => {
      it("creates a new user and returns with a JWT token", done => {
        request
          .post("/api/v1/users")
          .send({
            firstName: "Avidor",
            lastName: "Turkewitz",
            username: "aturkewi",
            email: "avidor@gmail.com",
            password: "12345"
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body.user.firstName).to.eql("Avidor");
            expect(res.body.user.lastName).to.eql("Turkewitz");
            expect(res.body.user.username).to.eql("aturkewi");
            expect(res.body.user.email).to.eql("avidor@gmail.com");
            expect(res.body.token).to.exist;
            done(err);
          });
      });
    });
  });

  describe("GET /users/:id", () => {
    describe("status 200", () => {
      it("returns an authenticated user", done => {
        request
          .get(`/api/v1/users/${testUser.id}`)
          .set("Authorization", `JWT ${token}`)
          .expect(200)
          .end((err, res) => {
            expect(res.body.firstName).to.eql("Luke");
            expect(res.body.lastName).to.eql("Ghenco");
            expect(res.body.username).to.eql("lukeghenco");
            expect(res.body.email).to.eql("luke@gmail.com");
            done(err);
          });
      });
    });
  });

  describe("DELETE /users/:id", () => {
    describe("status 204", () => {
      it("deletes an authenticated user", done => {
        request
          .delete(`/api/v1/users/${testUser.id}`)
          .set("Authorization", `JWT ${token}`)
          .expect(204)
          .end((err, res) => done(err));
      });
    });
  });

});
