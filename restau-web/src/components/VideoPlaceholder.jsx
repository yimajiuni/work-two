/**
 * Video swap-in later: pass `src` (and optional `poster`).
 * `variant="background"` fills a full-bleed parent; text lives in the parent.
 */
const VideoPlaceholder = ({
  src = "",
  poster = "",
  caption = "Kitchen reel coming soon",
  variant = "frame",
}) => {
  const isBackground = variant === "background";

  return (
    <div
      className={
        isBackground
          ? "absolute inset-0 overflow-hidden bg-black"
          : "media-frame media-frame--video group relative w-full overflow-hidden rounded-xl bg-black/80 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      }
    >
      {src ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          controls={!isBackground}
          autoPlay={isBackground}
          playsInline
          muted
          loop
        />
      ) : (
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-white ${
            isBackground ? "bg-[radial-gradient(ellipse_at_center,_#3a3a3a_0%,_#111_70%)]" : ""
          }`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 text-2xl">
            ▶
          </span>
          {!isBackground ? (
            <>
              <p className="font-hedding text-lg md:text-xl">{caption}</p>
              <p className="max-w-md text-sm text-white/70">
                Drop in a video file when it is ready.
              </p>
            </>
          ) : (
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlaceholder;
