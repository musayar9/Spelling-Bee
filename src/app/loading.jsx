"use client"
import { ColorRing } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperClass="color-ring-wrapper"
        colors={["#34d399", "#10b981", "#059669", "#047857", "#065f46"]}
      />
    </div>
  );
};

export default Loading;
