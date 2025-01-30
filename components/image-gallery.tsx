"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

// Create an array of objects with both src and alt text
const images = [
  { src: "/images/anchor-tag.1.svg", alt: "Anchor Tag Example" },
  { src: "/images/anchor-tag.svg", alt: "Anchor Tag" },
  { src: "/images/description-list.1.svg", alt: "Description List Example" },
  { src: "/images/description-list.svg", alt: "Description List" },
  { src: "/images/divisor-ai-layout.svg", alt: "AI Layout Divider" },
  { src: "/images/divisor-line-break.1.svg", alt: "Line Break Example" },
  { src: "/images/divisor-line-break.svg", alt: "Line Break" },
  { src: "/images/enhanced-italic-tags (1).1.svg", alt: "Enhanced Italic Tags Example 1" },
  { src: "/images/enhanced-italic-tags (1).svg", alt: "Enhanced Italic Tags 1" },
  { src: "/images/enhanced-italic-tags.svg", alt: "Enhanced Italic Tags" },
  { src: "/images/external-link (1).svg", alt: "External Link Example" },
  { src: "/images/external-link.1.png", alt: "External Link Example 1 PNG" },
  { src: "/images/external-link.1.svg", alt: "External Link Example 1" },
  { src: "/images/external-link.svg", alt: "External Link" },
  { src: "/images/Group.png", alt: "Group Image" },
  { src: "/images/heading-tags (1).svg", alt: "Heading Tags Example 1" },
  { src: "/images/heading-tags (2).svg", alt: "Heading Tags Example 2" },
  { src: "/images/heading-tags.svg", alt: "Heading Tags" },
  { src: "/images/html-entities.1.svg", alt: "HTML Entities Example" },
  { src: "/images/html-entities.svg", alt: "HTML Entities" },
  { src: "/images/html-formatting.1.svg", alt: "HTML Formatting Example" },
  { src: "/images/html-formatting.svg", alt: "HTML Formatting" },
  { src: "/images/html-paragraph.svg", alt: "HTML Paragraph" },
  { src: "/images/html-structure.svg", alt: "HTML Structure" },
  { src: "/images/image 1 1.png", alt: "Image Example 1 PNG" },
  { src: "/images/image 1.svg", alt: "Image Example 1" },
  { src: "/images/image.1.svg", alt: "Image Example" },
  { src: "/images/image 2.png", alt: "Image Example 2" },
  { src: "/images/image 3.png", alt: "Image Example 3" },
  { src: "/images/internal-link 1 (1).png", alt: "Internal Link Example 1 PNG" },
  { src: "/images/internal-link.1 (1).svg", alt: "Internal Link Example 1" },
  { src: "/images/internal-link 1.png", alt: "Internal Link PNG" },
  { src: "/images/internal-link.1.svg", alt: "Internal Link Example" },
  { src: "/images/internal-link.svg", alt: "Internal Link" },
  { src: "/images/mailto-link.1.svg", alt: "Mailto Link Example" },
  { src: "/images/mailto-link.svg", alt: "Mailto Link" },
  { src: "/images/nested-lists.1.svg", alt: "Nested Lists Example" },
  { src: "/images/nested-lists.svg", alt: "Nested Lists" },
  { src: "/images/ordered-list.1 (1).svg", alt: "Ordered List Example 1" },
  { src: "/images/ordered-list.1 (2).svg", alt: "Ordered List Example 2" },
  { src: "/images/ordered-list.1.svg", alt: "Ordered List Example" },
  { src: "/images/ordered-list.svg", alt: "Ordered List" },
  { src: "/images/Paragraph (1).svg", alt: "Paragraph Example 1" },
  { src: "/images/Paragraph (2).svg", alt: "Paragraph Example 2" },
  { src: "/images/paragraph-tags.svg", alt: "Paragraph Tags" },
  { src: "/images/Paragraph.svg", alt: "Paragraph" },
  { src: "/images/placeholder-logo.png", alt: "Placeholder Logo PNG" },
  { src: "/images/placeholder-logo.svg", alt: "Placeholder Logo" },
  { src: "/images/placeholder-user.jpg", alt: "Placeholder User" },
  { src: "/images/placeholder.jpg", alt: "Placeholder" },
  { src: "/images/placeholder.svg", alt: "Placeholder SVG" },
  { src: "/images/sub-sup-tags.1.svg", alt: "Subscript Superscript Tags Example" },
  { src: "/images/sub-sup-tags.svg", alt: "Subscript Superscript Tags" },
  { src: "/images/text-decoration-tags.1.svg", alt: "Text Decoration Tags Example" },
  { src: "/images/text-decoration-tags.svg", alt: "Text Decoration Tags" },
  { src: "/images/unordered-list.1.svg", alt: "Unordered List Example" },
  { src: "/images/unordered-list.svg", alt: "Unordered List" }
]

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = React.useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center rounded-lg border bg-background p-4 shadow-sm transition-all hover:shadow-lg"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative mb-2 w-full">
              <Image
                src={image.src}
                alt={image.alt}
                className="mx-auto cursor-pointer"
                width={400}
                height={300}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          <ScrollArea className="max-h-[80vh]">
            {selectedImage && (
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="mx-auto"
                  width={800}
                  height={600}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}

