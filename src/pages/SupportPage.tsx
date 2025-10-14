import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';

export const SupportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Support request submitted! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    {
      question: 'How do I post a job?',
      answer: 'Click on "Post a Job" in the navigation menu, fill out the job details including title, description, budget, and requirements, then submit. Service providers will start bidding on your job.'
    },
    {
      question: 'How do I become a service provider?',
      answer: 'Sign up for an account and select "Offer my services" during registration. Complete your profile with your skills, experience, and portfolio to start bidding on jobs.'
    },
    {
      question: 'How does payment work?',
      answer: 'Payments are processed securely through our platform. Customers pay upfront, funds are held in escrow, and released to the provider once the job is completed satisfactorily.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'We offer a satisfaction guarantee. If you\'re not happy with the work, contact our support team and we\'ll work to resolve the issue or provide a refund.'
    },
    {
      question: 'How are service providers verified?',
      answer: 'All providers go through a verification process including identity verification, background checks, and skill assessments to ensure quality and safety.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Support Center</h1>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Contact Methods */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <MessageCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-4">Chat with our support team</p>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-4">support@servicehub.com</p>
              <a
                href="mailto:support@servicehub.com"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Send Email
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-sm text-gray-600 mb-4">1-800-SERVICE</p>
              <a
                href="tel:1-800-SERVICE"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* FAQs */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-6">
                <HelpCircle className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="account">Account Issues</option>
                    <option value="payment">Payment Problems</option>
                    <option value="technical">Technical Support</option>
                    <option value="dispute">Dispute Resolution</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
