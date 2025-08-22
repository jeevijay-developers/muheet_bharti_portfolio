import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import toast from 'react-hot-toast';

const Web3ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY;
      
      // Validate access key format (UUID)
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (!accessKey || !uuidRegex.test(accessKey)) {
        console.error('Invalid or missing Web3Forms access key');
        toast.error('Configuration error. Please contact directly via email.', {
          duration: 4000,
          icon: '⚠️',
        });
        setIsSubmitting(false);
        return;
      }
      
      // Create FormData for Web3Forms API
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", accessKey);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("from_name", "Muheet Bharti Portfolio");
      formDataToSend.append("source", "recognition-hub");
      formDataToSend.append("timestamp", new Date().toISOString());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          duration: 4000,
          icon: '🎵',
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.log("Web3Forms Error", data);
        toast.error(data.message || 'Failed to send message. Please try again.', {
          duration: 4000,
          icon: '❌',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again or contact directly.', {
        duration: 4000,
        icon: '❌',
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-surface via-background to-surface">
      <div className="max-w-4xl mx-auto px-4 md:px-4 lg:px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Connect & Collaborate
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Reach out for collaborations, performances, or media inquiries. Our Web3-enabled contact system 
            ensures secure and transparent communication.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                Let's Create Something Extraordinary
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you're interested in collaborations, booking performances, or featuring 
                my work in media, I'd love to hear from you. Connect with me through traditional 
                or decentralized channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 musical-transition">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">muheetbharti@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 musical-transition">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={18} className="text-accent-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Location</div>
                  <div className="text-sm text-muted-foreground">Mumbai, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-contemplative">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary musical-transition text-foreground placeholder-muted-foreground"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary musical-transition text-foreground placeholder-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary musical-transition text-foreground"
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">Musical Collaboration</option>
                  <option value="performance">Performance Booking</option>
                  <option value="media">Media Interview</option>
                  <option value="lesson">Music Lessons</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary musical-transition text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell me about your project, collaboration idea, or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed musical-transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={18} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3ContactForm;
