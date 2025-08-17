export default function Shop() {
    return (
        <section className="container-fluid py-5 shop">
            <h1 className="text-center text-black py-4">Latest product</h1>
            <div className="row">

                {/* Filter Sidebar */}
                <aside className="col-md-3 mb-4">
                    <div className="card p-4 shadow rounded-4 border-0 d-flex flex-column gap-4">

                        {/* Search */}
                        <div className="search">
                            <h4 className="mb-4 text-primary">
                                <i className="fas fa-filter me-2"></i>Filter
                            </h4>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-white border-end-0">
                                    <i className="fas fa-search text-muted"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0"
                                    placeholder="Search glasses..."
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="Category">
                            <h6 className="fw-bold mt-4 mb-2 text-dark">
                                <i className="fas fa-tags me-2"></i>Category
                            </h6>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="sun" />
                                <label className="form-check-label" htmlFor="sun">Sunglasses</label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="optic" />
                                <label className="form-check-label" htmlFor="optic">Optical Glasses</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" type="checkbox" id="blue" />
                                <label className="form-check-label" htmlFor="blue">Blue Light</label>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="price">
                            <h6 className="fw-bold text-dark">Price</h6>
                            <label htmlFor="priceRange" className="form-label fw-semibold">
                                Max Price: <span id="priceOutput">$200</span>
                            </label>
                            <input
                                type="range"
                                className="form-range"
                                min="50"
                                max="500"
                                step="10"
                                id="priceRange"
                                onInput={(e) => {
                                    document.getElementById("priceOutput").innerText = "$" + e.target.value;
                                }}
                            />
                        </div>

                        {/* Clear All */}
                        <button className="btn btn-outline-danger w-100 mt-3 d-flex align-items-center justify-content-center gap-2">
                            <i className="fas fa-times me-1"></i> Clear All
                        </button>
                    </div>
                </aside>

                {/* Product Cards */}
                <div className="col-md-9">
                    <div className="row g-4">

                        {/* Card 1 */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 product-card">
                                <img src="/images/elephantglasses.jpg" className="card-img-top" alt="Stylish Glasses" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-dark">Classic Round Glasses</h5>
                                    <p className="card-text text-muted small">i just loved the pick XD</p>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="fw-bold text-black">$59.99</span>
                                        <button className="btn btn-primary btn-sm rounded-3">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 product-card">
                                <img src="/images/glasses1.jpg" className="card-img-top" alt="Stylish Glasses" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-dark">Classic Round Glasses</h5>
                                    <p className="card-text text-muted small">Elegant and timeless design, perfect for daily wear.</p>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="fw-bold text-black">$59.99</span>
                                        <button className="btn btn-primary btn-sm rounded-3">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 product-card">
                                <img src="/images/glasses2.jpg" className="card-img-top" alt="Stylish Glasses" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-dark">Classic Round Glasses</h5>
                                    <p className="card-text text-muted small">Elegant and timeless design, perfect for daily wear.</p>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="fw-bold text-black">$59.99</span>
                                        <button className="btn btn-primary btn-sm rounded-3">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 product-card">
                                <img src="/images/glasses3.jpg" className="card-img-top" alt="Stylish Glasses" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-dark">Classic Round Glasses</h5>
                                    <p className="card-text text-muted small">Elegant and timeless design, perfect for daily wear.</p>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="fw-bold text-black">$59.99</span>
                                        <button className="btn btn-primary btn-sm rounded-3">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 product-card">
                                <img src="/images/glasses4.jpg" className="card-img-top" alt="Stylish Glasses" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-dark">Classic Round Glasses</h5>
                                    <p className="card-text text-muted small">Elegant and timeless design, perfect for daily wear.</p>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="fw-bold text-black">$59.99</span>
                                        <button className="btn btn-primary btn-sm rounded-3">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 product-card">
                                <img src="/images/glasses5.jpg" className="card-img-top" alt="Stylish Glasses" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-dark">Classic Round Glasses</h5>
                                    <p className="card-text text-muted small">Elegant and timeless design, perfect for daily wear.</p>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="fw-bold text-black">$59.99</span>
                                        <button className="btn btn-primary btn-sm rounded-3">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
