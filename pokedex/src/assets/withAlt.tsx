interface WithAltProps {
  alt?: string;
}

const withAlt =
  <P extends object>(
    Component: React.ComponentType<P>,
    defaultAlt: string
  ): React.FC<P & WithAltProps> =>
  ({ alt, ...props }: WithAltProps) =>
    (
      <>
        <span className="sr-only">{alt || defaultAlt}</span>
        <Component {...(props as P)} />
      </>
    );

export default withAlt;
