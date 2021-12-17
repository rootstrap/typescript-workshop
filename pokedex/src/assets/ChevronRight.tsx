import withAlt from "./withAlt";

const ChevronRight: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => (
  <svg
    height="16"
    width="8"
    fill="none"
    viewBox="0 0 8 16"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M0.772004 1.19066L0.153285 1.80935C0.00684766 1.95579 0.00684766 2.19322 0.153285 2.33969L5.80013 8.00001L0.153285 13.6603C0.00684766 13.8068 0.00684766 14.0442 0.153285 14.1907L0.772004 14.8094C0.918441 14.9558 1.15588 14.9558 1.30235 14.8094L7.84653 8.26519C7.99297 8.11876 7.99297 7.88132 7.84653 7.73485L1.30235 1.19066C1.15588 1.04419 0.918441 1.04419 0.772004 1.19066Z" />
  </svg>
);

export default withAlt(ChevronRight, "Open");
