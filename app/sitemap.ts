import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.leesh9098.site",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        }
    ]
}