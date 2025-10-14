import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CATEGORIES } from "../data/categories";
import { useJobs } from "../context/JobContext";
import JobCard from "../components/JobCard";

export default function HomePage() {
  const { jobs } = useJobs();
  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Find Local Services in Texas</h1>
        <p className="text-lg text-purple-100 mb-8">
          Connect with trusted professionals for cleaning, moving, landscaping, and more.
        </p>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Service Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <div>{cat.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Recent Jobs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}