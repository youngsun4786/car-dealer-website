import clsx from "clsx";
import Image from "next/image";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={clsx(title())}>Xi He</h1>
      <div className="flex flex-col md:flex-row items-center mb-8 pt-6">
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <Image
            alt="Our dealership"
            className="rounded-lg"
            height={400}
            src="https://images.unsplash.com/photo-1562519819-016930ada31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            width={600}
          />
        </div>
        <div className="md:w-1/2">
          <p className="mb-4">
            Premium Used Cars has been serving our community for over 20 years,
            providing high-quality pre-owned vehicles to satisfied customers.
            Our commitment to excellence and customer satisfaction sets us apart
            in the used car market.
          </p>
          <p>
            We pride ourselves on our extensive selection of well-maintained
            vehicles, competitive pricing, and exceptional customer service. Our
            team of experienced professionals is dedicated to helping you find
            the perfect car to fit your needs and budget.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Our Values</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Integrity in all our dealings</li>
        <li>Transparency in our pricing and vehicle history</li>
        <li>Commitment to customer satisfaction</li>
        <li>Continuous improvement in our services</li>
      </ul>
    </div>
  );
}
