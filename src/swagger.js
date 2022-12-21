const swaggerJSDoc = require("swagger-jsdoc");
const port = process.env.PORT || process.env.NODE_PORT || 8080;
const swaggerOptions = {
  swaggerDefinition: {
    //openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Bankuish Doc",
      description: "Challenge Bankuish",
      contact: {
        name: "Ivan Santobuono",
      },
      servers: [`http://localhost:${port}`],
    },
  },
  apis: ["./src/docs/*.js"],
};
module.exports = swaggerJSDoc(swaggerOptions);
