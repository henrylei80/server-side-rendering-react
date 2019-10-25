import React from 'react';

const NotFoundPage = ({ staticContext = {} }) =>
  (staticContext.notFound = true);
<h1>Ooop, route not found.</h1>;

export default {
  component: NotFoundPage
};
