import React from 'react'
import Banner from '../common/Banner';
import SupportCard from './SupportCard'
const Support = () => {
  return (
    <div className="max-w-[1280px] mx-auto ">
      <Banner
        heading="Solving Sales & Support Bottlenecks Faced By Many Startups"
        paragraph="Eliminate Leaks, Slow Responses, And Stagnating AI That Torpedoes Your
        Selling and Support—so You Can Focus on Growth"
      />
      <div className="flex gap-6">
        <SupportCard
          title="Excessive Costs & Limitations"
          subtitle="Excessive Support Costs & Scaling Limitations"
          description="Slash support costs with AI, handling 80% of queries. Omni-channel support across WhatsApp, Instagram, Messenger, and your website."
          buttonText="Lower Support Costs"
          imageUrl="/images/placeholder.webp"
        />
        <SupportCard
          title="Excessive Costs & Limitations"
          subtitle="Excessive Support Costs & Scaling Limitations"
          description="Slash support costs with AI, handling 80% of queries. Omni-channel support across WhatsApp, Instagram, Messenger, and your website."
          buttonText="Lower Support Costs"
          imageUrl="/images/placeholder.webp"
        />
        <SupportCard
          title="Excessive Costs & Limitations"
          subtitle="Excessive Support Costs & Scaling Limitations"
          description="Slash support costs with AI, handling 80% of queries. Omni-channel support across WhatsApp, Instagram, Messenger, and your website."
          buttonText="Lower Support Costs"
          imageUrl="/images/placeholder.webp"
        />
      </div>
    </div>
  );
}

export default Support