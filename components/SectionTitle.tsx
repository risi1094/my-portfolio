type Props = {
  label?: string;
  title: string;
  highlight?: string;
  center?: boolean;
};

export default function SectionTitle({
  label,
  title,
  highlight,
  center = false,
}: Props) {
  return (
    <div className={`${center ? "text-center mx-auto max-w-3xl" : ""}`}>
      {label && <p className="section-label">{label}</p>}

      <h2 className="section-title">
        {title}{" "}
        {highlight && <span className="accent">{highlight}</span>}
      </h2>
    </div>
  );
}