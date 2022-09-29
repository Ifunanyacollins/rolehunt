import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

function Image({ imgKey, name }: { imgKey: string; name: string }) {
  const [url, setUrl] = useState(
    "https://res.cloudinary.com/mindcolony/image/upload/v1664351153/placeholder-4_nwg9eh.png"
  );
  useEffect(() => {
    Storage.get(imgKey, {
      level: "public",
    }).then((url) => {
      if (imgKey) {
        setUrl(url);
      }
    });
  }, [imgKey]);

  return (
    <img className="w-full h-full object-cover z-0" src={url} alt={name} />
  );
}

export default Image;
