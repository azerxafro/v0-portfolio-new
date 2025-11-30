"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, FileImage, FileCode, FileText, AlertTriangle } from "lucide-react"

export default function AssetManagement() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">Asset Management Guide</h2>
          <p className="text-text-secondary mb-12 text-center">
            Follow these instructions to easily update and manage your website assets.
          </p>

          <Tabs defaultValue="logo" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="logo">Logo</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="cv">CV File</TabsTrigger>
            </TabsList>

            <TabsContent value="logo">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileImage className="h-5 w-5 text-purple-400" />
                    Updating Your Logo
                  </CardTitle>
                  <CardDescription>Follow these steps to change the site logo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Logo Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-text-secondary">
                      <li>Recommended size: 200px × 50px</li>
                      <li>Formats: SVG (preferred), PNG with transparency</li>
                      <li>Keep file size under 100KB for optimal performance</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Replacement Steps</h3>
                    <ol className="list-decimal pl-5 space-y-3 text-text-secondary">
                      <li>
                        <strong className="text-white">Prepare your logo file</strong>
                        <p>Create your logo according to the requirements above.</p>
                      </li>
                      <li>
                        <strong className="text-white">Add to public directory</strong>
                        <p>
                          Place your logo file in the{" "}
                          <code className="bg-zinc-800 px-1 py-0.5 rounded text-purple-300">/public/assets/</code>{" "}
                          directory.
                        </p>
                      </li>
                      <li>
                        <strong className="text-white">Update the navbar component</strong>
                        <p>
                          Open{" "}
                          <code className="bg-zinc-800 px-1 py-0.5 rounded text-purple-300">
                            app/components/navbar.tsx
                          </code>{" "}
                          and replace the text logo with an image:
                        </p>
                        <pre className="bg-zinc-800 p-3 rounded-md text-sm mt-2 overflow-x-auto">
                          {`<a href="#" className="flex items-center">
  <img 
    src="/assets/your-logo-file.svg" 
    alt="Ashwin R" 
    className="h-10 w-auto" 
  />
</a>`}
                        </pre>
                      </li>
                    </ol>
                  </div>

                  <Alert className="bg-purple-900/20 border-purple-500/30">
                    <Info className="h-4 w-4 text-purple-400" />
                    <AlertTitle>Pro Tip</AlertTitle>
                    <AlertDescription>
                      For dark backgrounds, ensure your logo has sufficient contrast. Consider having a light-colored
                      version of your logo.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="images">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileImage className="h-5 w-5 text-purple-400" />
                    Managing Website Images
                  </CardTitle>
                  <CardDescription>How to update and optimize images across your portfolio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Image Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-zinc-800/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-purple-400">Hero/Background Images</h4>
                        <ul className="list-disc pl-5 space-y-1 text-text-secondary text-sm">
                          <li>Dimensions: 1920px × 1080px</li>
                          <li>Format: JPG or WebP</li>
                          <li>File size: Under 300KB</li>
                        </ul>
                      </div>
                      <div className="bg-zinc-800/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-purple-400">Portfolio Thumbnails</h4>
                        <ul className="list-disc pl-5 space-y-1 text-text-secondary text-sm">
                          <li>Dimensions: 600px × 400px</li>
                          <li>Format: JPG or WebP</li>
                          <li>File size: Under 100KB</li>
                        </ul>
                      </div>
                      <div className="bg-zinc-800/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-purple-400">Profile Photo</h4>
                        <ul className="list-disc pl-5 space-y-1 text-text-secondary text-sm">
                          <li>Dimensions: 400px × 400px</li>
                          <li>Format: JPG or PNG</li>
                          <li>Shape: Square (will be displayed as circle)</li>
                        </ul>
                      </div>
                      <div className="bg-zinc-800/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-purple-400">Testimonial Images</h4>
                        <ul className="list-disc pl-5 space-y-1 text-text-secondary text-sm">
                          <li>Dimensions: 100px × 100px</li>
                          <li>Format: JPG or PNG</li>
                          <li>Shape: Square (will be displayed as circle)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Image Replacement Process</h3>
                    <ol className="list-decimal pl-5 space-y-3 text-text-secondary">
                      <li>
                        <strong className="text-white">Optimize your images</strong>
                        <p>
                          Use tools like{" "}
                          <a
                            href="https://squoosh.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:underline"
                          >
                            Squoosh
                          </a>{" "}
                          or{" "}
                          <a
                            href="https://tinypng.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:underline"
                          >
                            TinyPNG
                          </a>{" "}
                          to compress images without losing quality.
                        </p>
                      </li>
                      <li>
                        <strong className="text-white">Place in the correct directory</strong>
                        <p>
                          Add all images to the{" "}
                          <code className="bg-zinc-800 px-1 py-0.5 rounded text-purple-300">
                            /public/assets/images/
                          </code>{" "}
                          directory, organizing them in subdirectories if needed.
                        </p>
                      </li>
                      <li>
                        <strong className="text-white">Update component references</strong>
                        <p>
                          Find the component that displays the image you want to change and update the src attribute:
                        </p>
                        <pre className="bg-zinc-800 p-3 rounded-md text-sm mt-2 overflow-x-auto">
                          {`// Example: Updating profile image in about.tsx
<img
  src="/assets/images/profile/your-photo.jpg"
  alt="Ashwin R"
  className="h-full w-full object-cover"
/>`}
                        </pre>
                      </li>
                    </ol>
                  </div>

                  <Alert className="bg-amber-900/20 border-amber-500/30">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    <AlertTitle>Important Note</AlertTitle>
                    <AlertDescription>
                      Always replace placeholder images with real content before deploying to production. The current
                      placeholders are using the format{" "}
                      <code className="bg-zinc-800 px-1 py-0.5 rounded text-amber-300">
                        /placeholder.svg?height=X&width=Y
                      </code>{" "}
                      which should be replaced with actual image paths.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cv">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-400" />
                    Managing Your CV File
                  </CardTitle>
                  <CardDescription>How to update your downloadable CV</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">CV File Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-text-secondary">
                      <li>Format: PDF (recommended for universal compatibility)</li>
                      <li>File size: Ideally under 2MB</li>
                      <li>
                        Filename: Use a consistent name like{" "}
                        <code className="bg-zinc-800 px-1 py-0.5 rounded text-purple-300">ashwin-r-cv.pdf</code>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Updating Your CV</h3>
                    <ol className="list-decimal pl-5 space-y-3 text-text-secondary">
                      <li>
                        <strong className="text-white">Prepare your CV file</strong>
                        <p>Create your CV in your preferred software and export as PDF.</p>
                      </li>
                      <li>
                        <strong className="text-white">Add to public directory</strong>
                        <p>
                          Place your CV file in the{" "}
                          <code className="bg-zinc-800 px-1 py-0.5 rounded text-purple-300">/public/assets/</code>{" "}
                          directory.
                        </p>
                      </li>
                      <li>
                        <strong className="text-white">Verify the link in navbar.tsx</strong>
                        <p>
                          Ensure the download link in{" "}
                          <code className="bg-zinc-800 px-1 py-0.5 rounded text-purple-300">
                            app/components/navbar.tsx
                          </code>{" "}
                          points to your CV file:
                        </p>
                        <pre className="bg-zinc-800 p-3 rounded-md text-sm mt-2 overflow-x-auto">
                          {`<a 
  href="/assets/ashwin-r-cv.pdf" 
  download
  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition-opacity"
>
  <Download className="h-4 w-4" />
  Download CV
</a>`}
                        </pre>
                      </li>
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Testing the Download</h3>
                    <p className="text-text-secondary">
                      After updating your CV file, test the download functionality by:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-text-secondary">
                      <li>
                        Running your site locally with{" "}
                        <code className="bg-zinc-800 px-1 py-0.5 rounded text-purple-300">npm run dev</code>
                      </li>
                      <li>Clicking the &quot;Download CV&quot; button in the navigation</li>
                      <li>Verifying that the correct file downloads</li>
                    </ol>
                  </div>

                  <Alert className="bg-purple-900/20 border-purple-500/30">
                    <Info className="h-4 w-4 text-purple-400" />
                    <AlertTitle>Pro Tip</AlertTitle>
                    <AlertDescription>
                      Consider creating an ATS-friendly version of your CV that&apos;s optimized for applicant tracking
                      systems, as well as a visually appealing version that matches your portfolio&apos;s design aesthetic.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 bg-zinc-800/30 rounded-lg border border-zinc-700">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <FileCode className="h-5 w-5 text-purple-400" />
              Additional Resources
            </h3>
            <p className="text-text-secondary mb-4">
              For more advanced asset management and optimization, consider exploring these resources:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>
                  <a
                    href="https://nextjs.org/docs/app/building-your-application/optimizing/images"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Next.js Image Optimization
                  </a>{" "}
                  - Learn how to use Next.js built-in image optimization features
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>
                  <a
                    href="https://web.dev/learn/images/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Web.dev Image Guide
                  </a>{" "}
                  - Comprehensive guide to web image optimization
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>
                  <a
                    href="https://tailwindcss.com/docs/responsive-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Tailwind CSS Responsive Design
                  </a>{" "}
                  - Tips for responsive image handling with Tailwind
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

