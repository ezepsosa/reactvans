import { createServer, Model, Factory, Server, Response } from "miragejs";
import { Review, Session, User, Van } from "./types";

function tokenGenerator() {
  const length = 150;
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    token += chars.charAt(randomIndex);
  }

  return token;
}

export function MockServer({ environment = "development" }): Server {
  const server = createServer({
    environment,
    models: {
      van: Model,
      user: Model,
      session: Model,
      review: Model,
    },
    factories: {
      van: Factory.extend<Van>({
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description:
          "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        type: "simple",
        hostId: 123,
      }),
      user: Factory.extend<User>({
        id: "1",
        name: "Ezequiel",
        password: "Asecurepassword123:)",
        email: "ezequiel.psosa@outlook.com",
      }),

      session: Factory.extend<Session>({
        id: "1",
        sessiontoken: "sdasd23fasf21e298jdnn727621gdnndndnd721e72273hde",
      }),

      review: Factory.extend<Review>({
        id: "1",
        stars: 5,
        name: "Ezequiel",
        text: "Txample text",
        date: "2021, 02",
        hostId: 123,
      }),
    },
    seeds(server) {
      server.create("van", {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description:
          "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        type: "simple",
        hostId: 123,
      });
      server.create("van", {
        id: "2",
        name: "Beach Bum",
        price: 80,
        description:
          "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
        type: "rugged",
        hostId: 456,
      });
      server.create("van", {
        id: "3",
        name: "Reliable Red",
        price: 100,
        description:
          "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
        type: "luxury",
        hostId: 123,
      });
      server.create("van", {
        id: "4",
        name: "Dreamfinder",
        price: 65,
        description:
          "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
        type: "simple",
        hostId: 123,
      });
      server.create("van", {
        id: "5",
        name: "The Cruiser",
        price: 120,
        description:
          "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
        type: "luxury",
        hostId: 456,
      });
      server.create("van", {
        id: "6",
        name: "Green Wonder",
        price: 70,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
        type: "rugged",
        hostId: 789,
      });
      server.create("user", {
        id: "2",
        email: "john@doe.com",
        password: "Jd123",
        name: "John Doe",
      });
      server.create("session", {
        id: "2",
        sessiontoken: "sdasd23fasf21e298jdnn727621gdnndndnd721e72273hds",
      });
      server.create("review", {
        id: "2",
        name: "Andrea",
        date: "May 08, 2024",
        stars: 5,
        text: "Our caravan experience was exceptional. Throughout our two-week journey, this caravan became our rolling home, offering unmatched comfort and reliability. From the get-go, we encountered no issues, allowing us to fully immerse ourselves in the joys of the road. Impeccably clean and well-equipped, it provided everything we needed for a memorable trip. The warmth and hospitality we experienced inside only enhanced our satisfaction. If you're seeking the ultimate caravan experience, I highly recommend embarking on a journey like ours.",
        hostId: 123,
      });
      server.create("review", {
        id: "3",
        name: "Antonio",
        date: " April 29, 2024",
        stars: 4,
        text: "Our caravan adventure was absolutely fantastic! Over the course of two weeks, this caravan became our haven on wheels, offering unparalleled comfort and convenience. Not once did we encounter any issues, allowing us to fully enjoy every moment of our journey. The caravan was spotless and thoughtfully equipped, ensuring we had everything we needed for a memorable trip. The coziness and warmth it provided made our experience even more delightful. If you're looking for an unforgettable caravan experience, I wholeheartedly recommend embarking on a journey like ours.",
        hostId: 123,
      });
    },
    routes() {
      this.urlPrefix = "/api";
      this.get("/vans", (schema, request) => {
        const type = request.queryParams.type as string;
        return type ? schema.where("van", { type: type }) : schema.all("van");
      });
      this.get("/vans/:id", (schema, request) => {
        const id = request.params.id;
        return schema.find("van", id);
      });

      this.get("/host/vans", (schema) => {
        return schema.where("van", { hostId: 123 });
      });

      this.get("/host/vans/:id", (schema, request) => {
        const id = request.params.id;
        return schema.where("van", { hostId: 123, id: id });
      });
      this.get("/host/reviews/", (schema) => {
        return schema.where("review", { hostId: 123 });
      });

      this.get("/sessions/:token", (schema, request) => {
        const token = request.params.token;
        return schema.where("session", { sessiontoken: token });
      });

      this.post("/login", (schema, request) => {
        {
          const { email, password } = JSON.parse(request.requestBody);
          const foundUser = schema.findBy("user", {
            email: email,
            password: password,
          });
          if (!foundUser) {
            return new Response(
              401,
              {},
              { message: "No user with those credentials found!" }
            );
          }
          foundUser.password = "";
          const token = tokenGenerator();
          schema.create("session", {
            id: schema.all("session").length.toString(),
            sessiontoken: token,
          });
          return {
            user: foundUser,
            token: token,
          };
        }
      });
    },
  });
  return server;
}
