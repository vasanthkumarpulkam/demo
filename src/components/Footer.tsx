export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ServiceHub</h3>
            <p className="text-sm">
              Connect with trusted local service providers for all your needs.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Customers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/jobs" className="hover:text-white">Browse Jobs</a></li>
              <li><a href="/post-job" className="hover:text-white">Post a Job</a></li>
              <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Providers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/jobs" className="hover:text-white">Find Work</a></li>
              <li><a href="/signup" className="hover:text-white">Join as Provider</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/support" className="hover:text-white">Support</a></li>
              <li><a href="/legal" className="hover:text-white">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} ServiceHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
