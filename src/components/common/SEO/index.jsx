import React from "react";
import { Helmet } from "react-helmet";

export const SEO = ({title,type,author,description,}) => {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:author" content={author} />
      <meta property="og:description" content={description } />
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}