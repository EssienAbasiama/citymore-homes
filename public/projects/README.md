# Project images

Drop the images for each project in here. Use one **sub-folder per project**,
named exactly like the project's `slug` in `data/projects.js`.

```
public/projects/
  the-bowery-residence/
    cover.jpg          <- main / hero image
    1.jpg              <- gallery (finished-home) photo
    2.jpg
    ground-floor.png   <- a plan / elevation drawing
    walkthrough.mp4    <- optional video walkthrough
  terra/
    cover.png
    ...
```

A project can have up to four kinds of media, each optional:

| Field      | Shows as                          | Notes                                  |
|------------|-----------------------------------|----------------------------------------|
| `cover`    | card thumbnail + detail-page hero | one landscape image                    |
| `gallery`  | "The finished home" photo grid    | renders / finished photos, click-to-zoom |
| `plans`    | "Floor plans & elevations" grid   | architectural drawings, click-to-zoom  |
| `video`    | "Walkthrough" player              | omit the field to hide the section     |

## How to reference them

Paths in `data/projects.js` are relative to `public/`, so a file at
`public/projects/the-bowery-residence/cover.jpg` is written as
`/projects/the-bowery-residence/cover.jpg` (note the leading slash, no `public`).

```js
{
  slug: "the-bowery-residence",
  cover: "/projects/the-bowery-residence/cover.jpg",
  gallery: [
    "/projects/the-bowery-residence/1.jpg",
    "/projects/the-bowery-residence/2.jpg",
  ],
  // Architectural drawings — each gets a caption shown under the card.
  plans: [
    { src: "/projects/the-bowery-residence/ground-floor.png", caption: "Ground Floor" },
    { src: "/projects/the-bowery-residence/front-elevation.png", caption: "Front Elevation" },
  ],
  // Video walkthrough. The MP4 is hosted OFF-REPO (see "Adding a video" below)
  // so the large binary stays out of git and the deploy bundle — `src` is a full
  // URL. `sources` lets the browser pick the best it can play. The `poster` is a
  // small still and stays local. `orientation: "portrait"` frames vertical phone
  // footage without cropping. Nothing loads until the viewer presses play.
  video: {
    orientation: "portrait", // omit for normal landscape (16:9)
    poster: "/projects/the-bowery-residence/walkthrough-poster.jpg",
    sources: [
      { src: "https://github.com/EssienAbasiama/citymore-homes-media/releases/download/media-v1/the-bowery-residence-walkthrough.mp4", type: "video/mp4" },
    ],
  },
}
```

### Adding a video for a new project

Videos are **not committed to this repo** — they live on the public
`citymore-homes-media` GitHub release and are referenced by URL. Only the small
`poster` still is kept locally. To add one:

1. **Transcode** the source to a web-friendly MP4 (browsers can't play
   `.mov`/HEVC, and raw phone clips are far too big). With `ffmpeg`
   (`winget install Gyan.FFmpeg`) and `INPUT` = your source clip:

   ```bash
   # Poster still (kept local, in the project's public/ folder)
   ffmpeg -y -ss 2 -i INPUT -vframes 1 -q:v 3 walkthrough-poster.jpg

   # MP4 (portrait 720-wide; use scale=-2:720 for landscape).
   # -movflags +faststart lets it start playing before fully downloaded.
   ffmpeg -y -i INPUT -vf "scale=720:-2" -c:v libx264 -preset veryfast \
     -b:v 1800k -maxrate 1950k -bufsize 3600k -pix_fmt yuv420p \
     -c:a aac -b:a 128k -movflags +faststart <slug>-walkthrough.mp4
   ```

2. **Upload** `<slug>-walkthrough.mp4` to the `media-v1` release of the public
   repo `EssienAbasiama/citymore-homes-media` (GitHub UI: Releases → media-v1 →
   Edit → drag the file in; or `gh release upload`).

3. **Reference** the resulting public download URL in the project's `video.sources`
   `src` (see the example above). Commit only the local poster image.

> Want adaptive (HLS) streaming later for poor connections? The player
> (`components/ProjectVideo.jsx`) still supports an `hls:` field — host the HLS
> ladder on a CDN/object store that sends CORS headers (Bunny, Cloudflare R2,
> Cloudinary) and add `hls: "https://…/master.m3u8"` alongside `sources`.

## Tips
- **cover** should be landscape and high quality — it's the card thumbnail and the detail-page hero.
- **gallery**: any number of images. The first renders full-width on the detail page; the rest tile two-up. Clicking opens a fullscreen lightbox.
- **plans**: floor plans and elevations. They display on white cards (so the drawings read cleanly) with the `caption` as a label, and zoom to full-size on tap — handy for the small dimension text.
- **video**: provide several `sources` if you have different resolutions; the browser automatically plays the best one it can. The `poster` is the still shown before play. If `sources` is empty, the whole Walkthrough section stays hidden.
- Keep images reasonably sized (ideally under ~500 KB each, max width ~1600px) and videos web-encoded (H.264 MP4) so pages load fast.
- Supported image formats: `.jpg`, `.png`, `.webp`. Video: `.mp4` (recommended), `.webm`.
- The folder name must match the project `slug` exactly (lowercase, hyphens).
