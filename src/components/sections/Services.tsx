"use client";

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-16 px-6 pt-6 pb-14">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-lg text-gray-600 mb-10">
          Professional residential and commercial fence installation services across Central Florida. 
          We handle every step — from free on-site consultation to material delivery, installation, and cleanup. 
          Our fences are built for durability, security, and clean aesthetics, backed by workmanship warranty.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">On-Site Estimate & Consultation</h3>
            <p>
              Free property evaluation and measurements to determine layout, material options, and the best fence 
              design for your home or business.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Fence Installation</h3>
            <p>
              Expert installation of vinyl, wood, aluminum, and chain-link fences. 
              Each fence is built with precise alignment, strength, and professional finish for long-lasting performance.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Fence Removal & Replacement</h3>
            <p>
              Safe removal of old fences and installation of new ones with complete site cleanup 
              and minimal disruption to your property.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Custom Fence Design</h3>
            <p>
              Tailored solutions for decorative, privacy, or security fences. We help you match styles and colors 
              to enhance your property’s appearance and value.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Gate Installation & Automation</h3>
            <p>
              Manual and automatic gate systems for residential and commercial applications. 
              Includes hinges, latches, motors, and safety sensors.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Fence Repairs & Maintenance</h3>
            <p>
              Repair or replace damaged posts, panels, or gates. 
              Maintain your fence in perfect condition for safety and curb appeal year-round.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">What’s included</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Free on-site estimate and professional quote</li>
              <li>Material delivery and handling</li>
              <li>Expert installation and alignment</li>
              <li>Jobsite cleanup after completion</li>
              <li>Workmanship warranty for all projects</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Optional add-ons</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Painting or staining for wood fences</li>
              <li>Decorative post caps and custom gates</li>
              <li>Commercial security and privacy systems</li>
              <li>Multi-property and HOA service packages</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          <strong>Service area:</strong> Citrus County, Marion County, and surrounding Central Florida communities. <br />
          <strong>Typical lead times:</strong> Most standard fences installed within 1–2 weeks. Custom orders may vary.
        </p>

        <div className="mt-8">
          <a
            href="/quote"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
