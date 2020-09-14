const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const isEnvDevelopment = process.env.NODE_ENV === 'development';
};
