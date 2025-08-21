import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BookingInquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    performanceType: '',
    venue: '',
    date: '',
    duration: '',
    audience: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const performanceTypes = [
    { value: 'classical-recital', label: 'Classical Recital' },
    { value: 'fusion-concert', label: 'Fusion Concert' },
    { value: 'contemporary-performance', label: 'Contemporary Performance' },
    { value: 'collaborative-show', label: 'Collaborative Show' },
    { value: 'masterclass', label: 'Masterclass/Workshop' },
    { value: 'private-event', label: 'Private Event' }
  ];

  const durationOptions = [
    { value: '60-minutes', label: '60 minutes' },
    { value: '90-minutes', label: '90 minutes' },
    { value: '2-hours', label: '2 hours' },
    { value: '2.5-hours', label: '2.5 hours' },
    { value: '3-hours', label: '3+ hours' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const audienceOptions = [
    { value: 'under-100', label: 'Under 100' },
    { value: '100-500', label: '100-500' },
    { value: '500-1000', label: '500-1,000' },
    { value: '1000-2500', label: '1,000-2,500' },
    { value: '2500-5000', label: '2,500-5,000' },
    { value: 'over-5000', label: 'Over 5,000' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'discuss', label: 'Prefer to discuss' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          organization: '',
          phone: '',
          performanceType: '',
          venue: '',
          date: '',
          duration: '',
          audience: '',
          budget: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const technicalRequirements = [
    {
      category: "Audio Equipment",
      items: ["Professional sound system", "Wireless microphones", "Audio mixing console", "Monitor speakers"]
    },
    {
      category: "Stage Setup",
      items: ["Minimum 20x16 ft stage", "Proper lighting system", "Piano/keyboard access", "Seating for musicians"]
    },
    {
      category: "Technical Support",
      items: ["Sound engineer", "Lighting technician", "Stage manager", "Technical rehearsal time"]
    },
    {
      category: "Venue Requirements",
      items: ["Green room/dressing room", "Parking arrangements", "Security provisions", "Catering facilities"]
    }
  ];

  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center grammy-glow">
              <Icon name="MessageCircle" size={24} color="white" />
            </div>
          </div>
          <h2 className="text-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Book a Performance
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Bring the magic of live music to your venue. From intimate classical recitals to grand fusion concerts, let's create an unforgettable experience for your audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Booking Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-contemplative">
            <h3 className="text-headline text-xl font-semibold text-foreground mb-6">
              Performance Inquiry
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-success mr-3" />
                  <div>
                    <p className="text-success font-medium">Inquiry Submitted Successfully!</p>
                    <p className="text-success/80 text-sm">We'll respond within 24 hours with availability and details.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Your name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Organization"
                  type="text"
                  placeholder="Venue or organization name"
                  value={formData?.organization}
                  onChange={(e) => handleInputChange('organization', e?.target?.value)}
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                />
              </div>

              {/* Performance Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <Select
                  label="Performance Type"
                  placeholder="Select performance type"
                  options={performanceTypes}
                  value={formData?.performanceType}
                  onChange={(value) => handleInputChange('performanceType', value)}
                  required
                />
                <Input
                  label="Venue Name"
                  type="text"
                  placeholder="Performance venue"
                  value={formData?.venue}
                  onChange={(e) => handleInputChange('venue', e?.target?.value)}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Preferred Date"
                  type="date"
                  value={formData?.date}
                  onChange={(e) => handleInputChange('date', e?.target?.value)}
                  required
                />
                <Select
                  label="Duration"
                  placeholder="Select duration"
                  options={durationOptions}
                  value={formData?.duration}
                  onChange={(value) => handleInputChange('duration', value)}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Select
                  label="Expected Audience"
                  placeholder="Select audience size"
                  options={audienceOptions}
                  value={formData?.audience}
                  onChange={(value) => handleInputChange('audience', value)}
                  required
                />
                <Select
                  label="Budget Range"
                  placeholder="Select budget range"
                  options={budgetOptions}
                  value={formData?.budget}
                  onChange={(value) => handleInputChange('budget', value)}
                />
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Please share any specific requirements, themes, or additional information about your event..."
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                className="grammy-border"
                iconName="Send"
                iconPosition="left"
                iconSize={18}
              >
                {isSubmitting ? 'Submitting Inquiry...' : 'Submit Booking Inquiry'}
              </Button>
            </form>

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                For urgent inquiries or additional information:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="text-primary mr-3" />
                  <span className="text-sm text-foreground">bookings@muheetbharti.com</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="text-primary mr-3" />
                  <span className="text-sm text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="text-primary mr-3" />
                  <span className="text-sm text-foreground">Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Requirements */}
          <div className="space-y-8">
            
            {/* Performance Types */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-contemplative">
              <h3 className="text-headline text-xl font-semibold text-foreground mb-6">
                Performance Options
              </h3>
              
              <div className="space-y-4">
                {performanceTypes?.map((type) => (
                  <div key={type?.value} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">{type?.label}</h4>
                      <p className="text-sm text-muted-foreground">
                        {type?.value === 'classical-recital' && 'Traditional Indian classical music in intimate settings'}
                        {type?.value === 'fusion-concert' && 'Blend of classical and contemporary styles for diverse audiences'}
                        {type?.value === 'contemporary-performance' && 'Modern arrangements and innovative compositions'}
                        {type?.value === 'collaborative-show' && 'Joint performances with other renowned artists'}
                        {type?.value === 'masterclass' && 'Educational workshops and interactive sessions'}
                        {type?.value === 'private-event' && 'Exclusive performances for special occasions'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Requirements */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-contemplative">
              <h3 className="text-headline text-xl font-semibold text-foreground mb-6">
                Technical Requirements
              </h3>
              
              <div className="space-y-6">
                {technicalRequirements?.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-foreground mb-3 flex items-center">
                      <Icon name="Settings" size={16} className="text-primary mr-2" />
                      {category?.category}
                    </h4>
                    <div className="grid grid-cols-1 gap-2 ml-6">
                      {category?.items?.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <Icon name="Check" size={14} className="text-success mr-2" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-start">
                  <Icon name="Info" size={16} className="text-accent mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">Technical Rider Available</p>
                    <p className="text-xs text-accent/80">
                      Detailed technical specifications and requirements document available upon request.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Technical Rider */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-accent/20">
              <div className="text-center">
                <Icon name="Download" size={32} className="text-primary mx-auto mb-4" />
                <h4 className="text-headline text-lg font-semibold text-foreground mb-2">
                  Technical Rider
                </h4>
                <p className="text-body text-muted-foreground mb-4">
                  Download comprehensive technical specifications, stage plots, and equipment requirements.
                </p>
                <Button
                  variant="outline"
                  className="musical-hover"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={16}
                >
                  Download Technical Rider
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingInquiry;