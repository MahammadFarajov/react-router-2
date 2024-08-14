import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-24 h-24 border-4 border-black/80 animate-spin rounded-full border-r-black/20"></div>
    </div>
  );
}
