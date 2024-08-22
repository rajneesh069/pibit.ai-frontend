import { FeatureCardType2Props } from "../components/FeatureCardType2";

interface ContentProps {
  title: string;
  subtitle: string;
}

interface CustomerProps {
  title: string;
  review: string;
  customerName: string;
  customerImage?: string;
  customerDescription: string;
  customerWorkPlace: string;
}

/* Hero Banner Data */
export const HeroBannerContent: ContentProps = {
  title: "Faster, Accurate Loss Run Analysis",
  subtitle:
    "Streamline your underwriting process: convert unstructured submission documents like ACORD and loss runs into actionable insights within 2 hours!",
};

/* Loss Inefficiencies */
export const LossInefficienciesContent1: ContentProps = {
  title: "Eliminate Manual Data Entry",
  subtitle:
    "Our advanced AI, combined with expert verification, accurately extracts loss run data at a remarkable 99.9% accuracy within 2 hours.",
};
export const LossInefficienciesContent2: ContentProps = {
  title: "Get Quick & Accurate Loss Run Insights",
  subtitle:
    "Uncover key information from loss runs with our insights report. Spot key trends and patterns and analyse risk accurately.",
};

export const Ingestion: ContentProps = {
  title: "Ingestion",
  subtitle:
    "Data can be ingested via API, SFTP, Email or our UI in multiple formats like excel, pdf, jpg, word and tiff",
};

export const Extraction: ContentProps = {
  title: "Extraction",
  subtitle:
    "Our AI model does the document indexing and data extraction from the loss run documents",
};

export const DataVerification: ContentProps = {
  title: "Data Verification",
  subtitle:
    "Automated quality checks runs on the data along with expert review, makes sure data is accurate",
};

export const DataEncrichment: ContentProps = {
  title: "Data Enrichment",
  subtitle:
    "Extracting information from relevant third party sources as per the line of business, providing 360 degree view of the customer.",
};
export const Analytics: ContentProps = {
  title: "Analytics",
  subtitle:
    "Generating visual reports that summarizes the key trends in the loss run files",
};
export const Delivery: ContentProps = {
  title: "Delivery",
  subtitle:
    "Sending this extracted data along with analytics to the carriers either via APIs, Excels, SFTP, Email or any other way as per requirement.",
};

export const WhatMakesUsUniqueContent: FeatureCardType2Props[] = [
  {
    src: "/images/accuracy.svg",
    alt: "accuracy",
    width: 100,
    heading: "99.9% Accuracy within 2 hrs",
    body: "Commercial insurance specific AI models along with expert review delivers 100% accurate data within 2hrs",
  },
  {
    src: "/images/submission-analytics.svg",
    alt: "Loss run analytics",
    width: 100,
    heading: "Loss run analytics",
    body: "Quick insights helping underwriters to evaluate risk accurately. Helping Insurers to make informed decisions!",
  },
  {
    src: "/images/template-agnostic.svg",
    alt: "Support any format",
    width: 100,
    heading: "Support any format",
    body: "Understands any carrier, MGA or other loss runs formats across line of business",
  },
  {
    src: "/images/implementation.png",
    alt: "Implement in 2 weeks!",
    width: 100,
    heading: "Implement in 2 weeks!",
    body: "Flexible document ingestion techniques makes it easy to do rapid deployments with current workflows quickly",
  },
];

export const technology: ContentProps = {
  title: "Our Technology",
  subtitle:
    "Our cutting-edge approach integrates Artificial Intelligence, Machine Learning, Computer Vision, NLP, and LLMs, providing unmatched precision in extracting data from complex submissions, propelling Commercial Insurance into a new era of efficiency.",
};

export const customerReviews: CustomerProps[] = [
  {
    title: "Significantly improved our efficiency",
    review:
      "After bringing in Pibit.ai loss run analysis product to our submission and underwriting process, we saw a positive shift. As our employees moved up the career path from Underwriting Assistants to Underwriters, we did not have to backfill all roles as this replaced manual data entry. Our operations are now faster, impacting quote generation speed positively. We have now achieved a data accuracy of 99.9%, ensuring consistently improved risk analysis, with an average turnaround time of submission to reviewable underwriting file in the underwriter’s queue under 2 hours. Pibit.ai has truly streamlined our submission workflow!",
    customerImage: "/images/Michaela_Morrison.png",
    customerName: "Michaela Morrison",
    customerDescription: "SVP Operations",
    customerWorkPlace: "Method Workers' Comp",
  },
];

export const investorImageURLs: { src: string; alt: string }[] = [
  { src: "/images/y-combinator-logo.png", alt: "y-combinator-logo" },
  { src: "/images/arali-logo.png", alt: "arali-logo" },
];
