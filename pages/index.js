// ASR: this project is created from this url below which is part of Next.js/examples
// https://github.com/zeit/next.js/tree/canary/examples/with-cookie-auth

import React from "react";
import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <h1>Cookie-based authentication example</h1>

    <p>Steps to test the functionality:</p>

    <ol>
      <li>Click login and enter your GitHub username.</li>
      <li>
        Click home and click profile again, notice how your session is being
        used through a token stored in a cookie.
      </li>
      <li>
        Click logout and try to go to profile again. You'll get redirected to
        the `/login` route.
      </li>
    </ol>
    <style jsx>{`
      li {
        margin-bottom: 0.5rem;
      }
    `}</style>
  </Layout>
);

export default Home;
