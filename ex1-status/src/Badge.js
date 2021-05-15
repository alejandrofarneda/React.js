function Badge({ value = null }) {
  return (
    value && <span className="bubble">{value}</span>
  );
}

export default Badge;
