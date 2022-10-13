// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router } from '@redwoodjs/router'

import FramePage from 'src/pages/FramePage/FramePage'

const Routes = () => {
  return (
    <Router>
      <Route path="/{path...}" page={FramePage} name="frame" />
      <Route path="/" page={FramePage} name="default" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
