import React from "react";
import { Job } from "../types/job";
import { MapPin, DollarSign } from "lucide-react";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white shadow p-4 rounded-xl border hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-3">{job.description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" /> {job.location.text}
        </span>
        <span className="flex items-center gap-1">
          <DollarSign className="w-4 h-4" /> ${job.budget}
        </span>
      </div>
    </div>
  );
}