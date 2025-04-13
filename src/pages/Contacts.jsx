import React from "react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Contact() {
  return (
    <section
      className="min-h-screen bg-gray-950 relative overflow-hidden"
      id="contact"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Let's Connect
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach
              out through any of these channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="group bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 transition-all duration-300 hover:bg-gray-900/60 hover:border-gray-700/50 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FiMail className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:altafalamshaikh55@gmail.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group-hover:gap-3"
                    >
                      altafalamshaikh55@gmail.com
                      <FaExternalLinkAlt className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 transition-all duration-300 hover:bg-gray-900/60 hover:border-gray-700/50 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FiPhone className="text-purple-400 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+917773905221"
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group-hover:gap-3"
                    >
                      +91 777 390 5221
                      <FaExternalLinkAlt className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 transition-all duration-300 hover:bg-gray-900/60 hover:border-gray-700/50 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-pink-500/10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FiMapPin className="text-pink-400 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Location
                    </h3>
                    <p className="text-gray-400">Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Connect on Social
              </h3>
              <div className="space-y-6">
                <a
                  href="https://github.com/sunnyshaikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl transition-all duration-300 hover:bg-gray-900/70"
                >
                  <div className="p-3 bg-gray-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <FaGithub className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">GitHub</h4>
                    <p className="text-gray-400 text-sm">
                      Check out my open source work
                    </p>
                  </div>
                  <FaExternalLinkAlt className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl transition-all duration-300 hover:bg-gray-900/70"
                >
                  <div className="p-3 bg-gray-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <FaLinkedin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <p className="text-gray-400 text-sm">
                      Let's connect professionally
                    </p>
                  </div>
                  <FaExternalLinkAlt className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
