import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroSectionProps) => {
  return (
    <section className="relative mb-12 lg:mb-16">
      <div className="px-5 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-none lg:rounded-3xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
            quality={100}
            priority
          />

          {/* Overlay with content */}
          {(title || subtitle || ctaText) && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
              <div className="flex h-full items-center px-6 lg:px-12">
                <div className="max-w-lg text-white">
                  {title && (
                    <h1 className="mb-4 text-2xl font-bold lg:text-4xl xl:text-5xl">
                      {title}
                    </h1>
                  )}
                  {subtitle && (
                    <p className="mb-6 text-sm lg:text-lg xl:text-xl">
                      {subtitle}
                    </p>
                  )}
                  {ctaText && ctaLink && (
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <Link href={ctaLink}>{ctaText}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
