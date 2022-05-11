// common libraries
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@fontsource/readex-pro";
import "@fontsource/passion-one";

import * as React from "react";
import Layout from './src/components/layout';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
