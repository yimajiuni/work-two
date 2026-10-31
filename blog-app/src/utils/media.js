export const isVideoSrc = (src) =>
  typeof src === "string" && /\.(mp4|webm|ogg)(\?|$)/i.test(src);
