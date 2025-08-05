import { useEffect } from "react";

const adComponent = () =>{
useEffect(() => {
    try {
      if (window.adsbygoogle && process.env.NODE_ENV === "production") {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
<ins class="adsbygoogle"
     style="display:inline-block;width:150px;height:300px"
     data-ad-client="ca-pub-3940256099942544"
     data-ad-slot="2297051693"></ins>
  );

};
export default adComponent