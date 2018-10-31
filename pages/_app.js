import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles.less'


class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Layout>
            <Header/>
              <main className='container' style={{minHeight: 'calc(100vh - 210px)'}}>
                <Component {...pageProps} />
              </main>
            <Footer/>
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
