import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

function Image({ imgKey, name }: { imgKey: string; name: string }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    Storage.get(imgKey, {
      level: "public",
    }).then((url) => setUrl(url));
  }, [imgKey]);

  return (
    <img className="w-full h-full object-cover z-0" src={url} alt={name} />
  );
}

export default Image;
