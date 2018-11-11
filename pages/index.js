// import Link from 'next/link'
// export default () => (
//   <div>Hello World. <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
// )

import React from 'react';
import Layout from './components/Layout';
import styled from 'styled-components';
import Hanvanoostende from './components/Hanvanoostende'
import Code from './components/Code'



const home = () => (
  <Layout>
    <Hanvanoostende />
    <Code />
    <div>fun</div>
    <div>test</div>
  </Layout>
);
export default home;
