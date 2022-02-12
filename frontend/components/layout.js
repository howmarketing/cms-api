/* eslint-enable import/prefer-default-export */
import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <>
    <h1>TESTE</h1>
    <Nav categories={categories} />
    {children}
  </>
)

export default Layout
