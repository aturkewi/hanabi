import jwt from 'jwt-simple';
const User = require('../../../../server/models/user');
const Game = require('../../../../server/models/game');

describe("Routes: Users", () => {
  const jwtSecret = app.libs.config.jwtSecret;
  let token;
  let testUser;

  before(done => {
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

  describe("POST /users", () => {
    describe("status 200", () => {
      it("creates a new user and returns with a JWT token", done => {
        request
          .post("/api/v1/users")
          .send({
            first_name: "Avidor",
            last_name: "Turkewitz",
            username: "aturkewi",
            email: "avidor@gmail.com",
            password: "12345"
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body.user.first_name).to.eql("Avidor");
            expect(res.body.user.last_name).to.eql("Turkewitz");
            expect(res.body.user.username).to.eql("aturkewi");
            expect(res.body.user.email).to.eql("avidor@gmail.com");
            expect(res.body.token).to.exist;
            done(err);
          });
      });
    });
  });
  
  describe("POST /login", () => {
    describe("status 200", () => {
      it("returns the user object with the token", () => {
        request
          .post("/api/v1/login")
          .send({
            username: "lukeghenco",
            password: "12345"
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body.user.first_name).to.eql("Luke");
            expect(res.body.user.last_name).to.eql("Ghenco");
            expect(res.body.user.username).to.eql("lukeghenco");
            expect(res.body.user.email).to.eql("luke@gmail.com");
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
            expect(res.body.first_name).to.eql("Luke");
            expect(res.body.last_name).to.eql("Ghenco");
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
