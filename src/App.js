import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditTag from "./components/tag/edit.component";
import TagList from "./components/tag/list.component";
import CreateTag from "./components/tag/create.component";
import PropertyList from "./components/property/list.component";
import DetailProperty from "./components/property/detail.component";

function App() {
  return (<Router>
    <Navbar bg="dark">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Tags App
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/tag/list" element={<TagList />} />
            <Route path="/tag/create" element={<CreateTag />} />
            <Route path="/tag/edit/:id" element={<EditTag />} />
            <Route path="/property/view/:id" element={<DetailProperty />} />
            <Route exact path='/' element={<PropertyList />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;