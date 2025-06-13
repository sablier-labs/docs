import axios from "axios";
import { useEffect, useState } from "react";
import GFMContent from "./GFMContent";

type RemoteGFMContentProps = {
  /**
   * URL of raw Markdown file
   * e.g. https://raw.githubusercontent.com/sablier-labs/benchmarks/main/results/flow/flow.md
   */
  url: string;
};

export default function RemoteGFMContent({ url }: RemoteGFMContentProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    axios
      .get<string>(url)
      .then((response) => {
        if (isMounted) {
          setContent(response.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  if (loading) {
    return <p>Loading content...</p>;
  }
  if (error) {
    return <p>Error loading content: {error}</p>;
  }

  return <GFMContent content={content} />;
}
