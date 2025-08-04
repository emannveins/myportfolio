import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-green-400 pl-4">
        CONTACT ME
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-8">
            <p className="mb-4">
              Interested in working together? Fill out the form and I'll get
              back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 border-2 border-green-400 flex items-center justify-center mr-4">
                  <MailIcon size={20} className="text-green-400" />
                </div>
                <span>hello@pixeldev.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 border-2 border-green-400 flex items-center justify-center mr-4">
                  <PhoneIcon size={20} className="text-green-400" />
                </div>
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 border-2 border-green-400 flex items-center justify-center mr-4">
                  <MapPinIcon size={20} className="text-green-400" />
                </div>
                <span>Pixel City, Digital Land</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <div>
              <input type="text" placeholder="YOUR NAME" className="w-full p-3 bg-transparent border-2 border-green-400 focus:outline-none focus:border-green-300" />
            </div>
            <div>
              <input type="email" placeholder="YOUR EMAIL" className="w-full p-3 bg-transparent border-2 border-green-400 focus:outline-none focus:border-green-300" />
            </div>
            <div>
              <textarea rows={5} placeholder="YOUR MESSAGE" className="w-full p-3 bg-transparent border-2 border-green-400 focus:outline-none focus:border-green-300"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full p-3 bg-green-400 text-black font-bold hover:bg-green-300 transition-colors">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>;
}