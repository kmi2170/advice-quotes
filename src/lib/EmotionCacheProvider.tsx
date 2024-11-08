"use client";

// import * as React from "react";
// import { CacheProvider } from "@emotion/react";
// import createEmotionCache from "./emotionCache";

// const cache = createEmotionCache();

// export default function EmotionCacheProvider({ children }) {
//   return <CacheProvider value={cache}>{children}</CacheProvider>;
// }

import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import * as React from "react";

import createEmotionCache from "./emotionCache";

interface Props {
  children: React.ReactNode;
}

export default function EmotionRegistry({ children }: Props) {
  const [emotionCache] = React.useState(() => createEmotionCache());

  useServerInsertedHTML(() => {
    if (!emotionCache) return null;

    return (
      <style
        data-emotion={`${emotionCache.key} ${Object.keys(
          emotionCache.inserted
        ).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(emotionCache.inserted).join(" "),
        }}
      />
    );
  });

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}
