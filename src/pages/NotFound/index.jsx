function Notfound() {
  return (
    <div>
      {/* 404 Page Not Found */}
      <div className="container" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="display-1">404</h1>
              <h1 className="display-4">Page Not Found</h1>
              <p className="lead">Sorry, that page does not exist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
