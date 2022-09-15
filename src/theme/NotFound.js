/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

export default function NotFound(): JSX.Element {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 align="center" className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  404 - Page Not Found
                </Translate>
              </h1>
              <p align="center">
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  Whoops! We can't find what you're looking for.
                </Translate>
              </p>
              <p align="center">
              <img class="svg" src="/img/sumo-404.svg" alt="Sumo Logic 404 image" width="250">
              </img>
              </p>
              <p align="center">
              <button className="backtohome-404"
                  description="Back to Sumo Docs homepage">
                  <a href="/">Back to home</a>
              </button>
              <button className="backtohome-404"
                  description="Open GitHub Issue">
                  <a href="https://github.com/SumoLogic/sumologic-documentation/issues/new/choose">Let us know</a>
              </button>
              </p>
              <p align="center">
              <button className="search-404"
                  description="Search">
                  <a href="https://app.sitesearch360.com/demo/18891?auth=627bf5a32ba2ed7f1e7dbe02a13a5a5ae13c5c4d">Search Docs Site</a>
              </button>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
