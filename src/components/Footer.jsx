export default function Footer() {
    return (
        <footer className="text-white py-5 contact">
            <div className="container">
                <h4 className="text-black">Contact Us</h4>
                <form className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="col-12 text-end">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
                <hr className="my-4" />
                <p className="text-center mb-0 text-black">© 2035 by MAS. All rights reserved.</p>
            </div>
        </footer>
    );
}