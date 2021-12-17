import React from "react";
import withAlt from "./withAlt";

const BackArrow: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = ({
  className,
}) => (
  <svg
    height="24"
    width="24"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path d="M12.2305 20.5117L13.0039 19.7383C13.1869 19.5553 13.1869 19.2585 13.0039 19.0754L6.94411 13.0157H20.2813C20.5401 13.0157 20.75 12.8058 20.75 12.5469V11.4532C20.75 11.1943 20.5401 10.9844 20.2813 10.9844H6.94411L13.0039 4.92465C13.1869 4.7416 13.1869 4.4448 13.0039 4.26172L12.2305 3.48836C12.0474 3.30531 11.7506 3.30531 11.5676 3.48836L3.38732 11.6686C3.20427 11.8516 3.20427 12.1484 3.38732 12.3315L11.5676 20.5118C11.7506 20.6948 12.0474 20.6948 12.2305 20.5117Z" />
  </svg>
);

export default withAlt(BackArrow, "Go back");
