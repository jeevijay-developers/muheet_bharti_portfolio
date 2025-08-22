import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const CollaboratorTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Arijit Singh",
      title: "Playback Singer & Music Director",
      image:
        "https://scontent.fjdh1-2.fna.fbcdn.net/v/t39.30808-6/310440311_460161376147334_5922898089465705691_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=O3VSlM4fF9IQ7kNvwHgPeEh&_nc_oc=AdmIKmOwjheMfOb8WUfTsSBNz8hdijq37CoiHNEt5Plm_aC0hZgxdwpR-01sx62mgQimQCRVCDuruvJ6rDjQbWVw&_nc_zt=23&_nc_ht=scontent.fjdh1-2.fna&_nc_gid=RG7k-M8E3gVtxQaDsW55Ew&oh=00_AfWgJZNfJnER-sXAOFMeH6dMl67mmBu1lB9oNjUdGxTZHA&oe=68ACEDF7",
      quote: `Muheet's ability to seamlessly blend classical Indian ragas with contemporary production is extraordinary. His Grammy nomination is well-deserved recognition of his unique artistry that bridges generations of musical tradition.`,
      project: "Shuruaat Album",
      videoThumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      collaboration: "Lead Vocalist & Co-Producer",
    },
    {
      id: 2,
      name: "Shankar Mahadevan",
      title: "Composer & Vocalist",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shankar_Mahadevan_01_%28cropped%29.jpg/250px-Shankar_Mahadevan_01_%28cropped%29.jpg",
      quote: `Working with Muheet has been a revelation. His deep understanding of Senia Gharana traditions combined with Berklee-trained precision creates compositions that are both authentic and innovative. He represents the future of Indian classical fusion.`,
      project: "Cultural Bridges Symphony",
      videoThumbnail:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      collaboration: "Orchestral Arrangement & Vocals",
    },
    {
      id: 3,
      name: "Salim Merchant",
      title: "Music Director (Salim-Sulaiman)",
      image:
        "https://c.saavncdn.com/artists/Salim_Merchant_002_20231030074556_500x500.jpg",
      quote: `Muheet brings a rare combination of classical depth and contemporary sensibility to every project. His Grammy nomination validates what we've known - he's creating music that transcends boundaries while honoring heritage.`,
      project: "Fusion Collective Sessions",
      videoThumbnail:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      collaboration: "Electronic Fusion Producer",
    },
  ];

  const handleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-16 lg:py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Icon name="Users" size={20} className="text-primary" />
            <span className="text-primary font-medium">Industry Voices</span>
          </div>
          <h2 className="text-headline text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Legends Say
          </h2>
          <p className="text-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from renowned artists who have collaborated with Muheet and
            witnessed his unique approach to bridging classical tradition with
            contemporary innovation
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video/Image Section */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-grandeur">
              <Image
                src={currentTestimonial?.videoThumbnail}
                alt={`${currentTestimonial?.name} collaboration video`}
                className="w-full h-full object-cover"
              />

              {/* Video Play Overlay */}
              {/* <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleVideoPlay}
                  className="bg-background/90 hover:bg-background text-foreground musical-hover grammy-glow"
                  iconName={isVideoPlaying ? "Pause" : "Play"}
                  iconSize={24}
                />
              </div> */}
            </div>

            {/* Project Info */}
            <div className="mt-6 p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-headline font-semibold text-foreground">
                    {currentTestimonial?.project}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial?.collaboration}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-accent" />
                  <span className="text-sm text-accent font-medium">
                    Featured Work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-8">
            {/* Quote */}
            <div className="relative">
              <Icon
                name="Quote"
                size={48}
                className="text-primary/20 absolute -top-4 -left-4"
              />
              <blockquote className="text-body text-xl lg:text-2xl text-foreground leading-relaxed pl-8">
                "{currentTestimonial?.quote}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-contemplative">
                <Image
                  src={currentTestimonial?.image}
                  alt={currentTestimonial?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-headline text-xl font-bold text-foreground">
                  {currentTestimonial?.name}
                </h3>
                <p className="text-body text-muted-foreground">
                  {currentTestimonial?.title}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <div className="flex space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full musical-transition ${
                      index === activeTestimonial
                        ? "bg-primary shadow-lg"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  iconName="ChevronLeft"
                  iconSize={16}
                  className="musical-hover"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  iconName="ChevronRight"
                  iconSize={16}
                  className="musical-hover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              onClick={() => setActiveTestimonial(index)}
              className={`p-6 rounded-xl border musical-transition cursor-pointer musical-hover ${
                index === activeTestimonial
                  ? "bg-primary/5 border-primary shadow-contemplative"
                  : "bg-background border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-body font-semibold text-foreground">
                    {testimonial?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial?.title}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-3">
                {testimonial?.quote}
              </p>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">
                    {testimonial?.project}
                  </span>
                  <Icon
                    name="Play"
                    size={14}
                    className={`text-muted-foreground ${
                      index === activeTestimonial ? "text-primary" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaboratorTestimonials;
